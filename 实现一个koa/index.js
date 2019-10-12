const http = require('http');
const Emitter = require('events');

function compose(middleware) {
    if (!Array.isArray(middleware)) {
        throw new TypeError('Middleware stack must be an array!');
    }
    return function (ctx, next) {
        let index = -1;
        return dispatch(0);
        function dispatch(i) {
            if (i < index) {
                return Promise.reject(new Error('next() called multiple times'));
            }
            index = i;
            let fn = middleware[i];
            if (i === middleware.length) {
                fn = next;
            }
            if (!fn) {
                return Promise.resolve();
            }
            try {
                return Promise.resolve(fn(ctx, () => {
                    return dispatch(i + 1);
                }));
            } catch (err) {
                return Promise.reject(err);
            }
        }
    };
}

const context = {
  _body: null,

  get body() {
    return this._body;
  },

  set body(val) {
    this._body = val;
    this.res.end(this._body);
  }
};

class SimpleKoa extends Emitter {
  constructor() {
    super();
    this.middleware = [];
    this.context = Object.create(context);
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    return server.listen(...args);
  }

  use(fn) {
    if (typeof fn === 'function') {
      this.middleware.push(fn);
    }
  }

  callback() {
    if (this.listeners('error').length === 0) {
      this.on('error', this.onerror);
    }

    const handleRequest = (req, res) => {
      let context = this.createContext(req, res);
      let middleware = this.middleware;
      // 执行中间件
      compose(middleware)(context).catch(err => this.onerror(err))
    };
    return handleRequest;
  }

  onerror(err) {
    console.log(err);
  }

  createContext(req, res) {
    let context = Object.create(this.context);
    context.req = req;
    context.res = res;
    return context;
  }
}

module.exports = SimpleKoa;