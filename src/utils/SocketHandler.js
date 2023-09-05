import { io } from 'socket.io-client'
import { baseURL, useSockets } from '../env.js'
import { logger } from './Logger.js'

const SOCKET_EVENTS = {
  connection: 'connection',
  connected: 'connected',
  disconnect: 'disconnect',
  authenticate: 'authenticate',
  authenticated: 'authenticated',
  userConnected: 'userConnected',
  userDisconnected: 'userDisconnected',
  error: 'error'
}

let socket = null

function getSocketConnection(url) {
  if (!socket) {
    socket = io(url)
    registerGlobalSocketMessages(socket)
  }
  return socket
}

function registerGlobalSocketMessages(socket) {
  socket.on(SOCKET_EVENTS.error, onSocketError)
}
function onSocketError(error) {
  logger.error('⚡[SOCKET_ERROR]', error)
}

export class SocketHandler {
  /**
   * @param {boolean} requiresAuth
   * @param {String} url
   */
  constructor(requiresAuth = false, url = '') {
    if (!useSockets) { return }
    getSocketConnection(url || baseURL)
    this.socket = socket
    this.requiresAuth = requiresAuth
    this.queue = []
    this.authenticated = false
    this
      .on(SOCKET_EVENTS.connected, this.onConnected)
      .on(SOCKET_EVENTS.authenticated, this.onAuthenticated)
  }

  on(event, fn) {
    const ctx = this
    this.socket?.on(event, function() {
      try {
        fn.call(ctx, ...arguments)
      } catch (error) {
        logger.warn('🩻[FATAL EVENT]', event)
        logger.error('💀[FATAL ERROR IN HANDLER METHOD]', error)
      }
    })
    return this
  }

  onConnected(connection) {
    this.connected = true
    this.playback()
  }

  onAuthenticated(auth) {
    console.groupCollapsed('⚡[SOCKET_AUTHENTICATED]', this.constructor.name)
    logger.log(auth)
    this.authenticated = true
    this.playback()
    console.groupEnd()
  }

  authenticate(bearerToken) {
    this.socket?.emit(SOCKET_EVENTS.authenticate, bearerToken)
  }

  enqueue(action, payload) {
    logger.log('📼[ENQUEING_ACTION]', { action, payload })
    this.queue.push({ action, payload })
  }

  playback() {
    if (!this.queue.length) { return }
    logger.log(`📽️[${this.constructor.name}]`,)
    const playback = [...this.queue]
    this.queue = []
    playback.forEach(e => {
      this.emit(e.action, e.payload)
    })
  }

  emit(action, payload = undefined) {
    if (this.requiresAuth && !this.authenticated) {
      return this.enqueue(action, payload)
    }
    if (!this.connected) {
      return this.enqueue(action, payload)
    }
    logger.log('📡', action, payload)
    this.socket.emit(action, payload)
  }
}
