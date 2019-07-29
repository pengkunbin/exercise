class Queue{
    constructor(){
        this.items = []
    }
    enqueue(data){
        this.items.push(data)
    }
    dequeue(){
        return this.items.shift()
    }
    front(){
        return this.items[0]
    }
    clear(){
        this.items = []
    }
    get size(){
        return this.items.length
    }
    get isEmpty(){
        return !this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}