import { SocketHandler } from "../utils/SocketHandler.js";

class TestHandler extends SocketHandler {

  constructor() {
    super()
    this
      .on('IS_TESTED', this.onTest)
  }

  onTest(payload){
    console.log('Recieved IS_TESTED', payload)
  }

}

export const testHandler = new TestHandler()
