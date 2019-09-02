class EventEmeitter {
    constructor() {
        this._events = this._events || new Map()
        this._maxListeners = this._maxListeners || 10
    }
    emit(type, ...args) {
        let handler;
        handler = this._events.get(type)
        if (Array.isArray(handler)) {
            for (let i = 0; i < handler.length; i++) {
                if (args.length > 0) {
                    handler.apply(this, args)
                } else {
                    handler.call(this)
                }
            }
        } else {
            if (args.length > 0) {
                handler.apply(this, args)
            } else {
                handler.call(this)
            }
        }
        return true
    }
    addListener(type, fn) {
        if (!this._events.get(type)) {
            this._events.set(type, fn)
        }
    }
}
