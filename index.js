class AsyncHook {
  enable() {}
  disable() {}
}

exports.AsyncHook = AsyncHook

exports.createHook = function createHook(opts) {
  return new AsyncHook(opts)
}

exports.executionAsyncId = function executionAsyncId() {
  return -1
}

exports.triggerAsyncId = function triggerAsyncId() {
  return -1
}

class AsyncResource {
  bind() {
    throw new Error('Not implemented')
  }

  static bind() {
    throw new Error('Not implemented')
  }

  runInAsyncScope() {
    throw new Error('Not implemented')
  }

  emitDestroy() {
    throw new Error('Not implemented')
  }

  asyncId() {
    return -1
  }

  triggerAsyncId() {
    return -1
  }
}

exports.AsyncResource = AsyncResource
