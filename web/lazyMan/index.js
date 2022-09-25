class _LazyMan {
    constructor(name) {
        this.tasks = [];
        const task = () => {
            console.log(`Hi! This is ${name}`);
            this.next();
        }
        this.tasks.push(task);
        setTimeout(() => {               // 把 this.next() 放到调用栈清空之后执行
            this.next();
        }, 0);
    }

    next() {
        const task = this.tasks.shift(); // 取第一个任务执行
        task && task();
    }

    sleep(time) {
        this._sleepWrapper(time, false);
        return this;                     // 链式调用
    }

    sleepFirst(time) {
        this._sleepWrapper(time, true);
        return this;
    }

    _sleepWrapper(time, first) {
        const task = () => {
            setTimeout(() => {
                console.log(`Wake up after ${time}`);
                this.next();
            }, time * 1000)
        }
        if (first) {
            this.tasks.unshift(task);     // 放到任务队列顶部
        } else {
            this.tasks.push(task);        // 放到任务队列尾部
        }
    }

    eat(name) {
        const task = () => {
            console.log(`Eat ${name}`);
            this.next();
        }
        this.tasks.push(task);
        return this;
    }
}

function LazyMan(name) {
    return new _LazyMan(name);
}