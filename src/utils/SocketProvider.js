import { SocketHandler } from "../utils/SocketHandler.js"

function registerSocketHandlers() {
  // https://webpack.js.org/guides/dependency-management/#require-context
  // @ts-ignore
  const handlers = import.meta.globEager('../handlers/**/*.js')
  Object.entries(handlers).forEach(([fileName, handler]) => {
    const handlerName = fileName
      .substring(fileName.lastIndexOf('/') + 1)
      .replace(/\.\w+$/, '')
    // Register handler
    handlers[handlerName] = handler
  })
  return handlers
}

class SocketProvider extends SocketHandler {
  handlers = {}
  get(name) {
    return this.handlers[name]
  }
  constructor() {
    super()
    this.handlers = registerSocketHandlers()
  }
}

// Ensure all socketHandlers are registered when the app is loaded
export const socketProvider = new SocketProvider()
