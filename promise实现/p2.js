//第二版

const Promise = function (executor) {
    let _ = this
    _.value = undefined
    _.reason = undefined
    _.states = 'pending'
    _.resolveCallbacks = []
    _.rejectCallbacks = []
}