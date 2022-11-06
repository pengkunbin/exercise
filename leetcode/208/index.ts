class Trie {
    private children: Record<string ,any>
    constructor() {
        this.children = {}
    }

    insert(word: string): void {
        let node = this.children;
        for(let i of word){ 
            if(!node[i]){
                node[i] = {};
            }
            node = node[i]
        }
        node.isEnd = true;
    }

    search(word: string): boolean {
        let node = this.children;
        for(let i of word){
            if (!node[i]) {
                return false;
            }
            node = node[i];
        }
        return !!node && !!node.isEnd;
    }

    startsWith(prefix: string): boolean {
        let node = this.children;
        for(let i of prefix){
            if (!node[i]) {
                return false;
            }
            node = node[i];
        }
        return !!prefix
    }
}