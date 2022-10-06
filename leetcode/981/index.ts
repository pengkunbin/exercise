class TimeMap {
    public store: Record<string, string[]>;
    constructor() {
        this.store = {}
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.store[key]) {
            this.store[key] = [];
        }
        this.store[key][timestamp] = value;
    }

    get(key: string, timestamp: number): string {
        if (!this.store[key]) {
            return ''
        }
        while (timestamp >= 0) {
            if (this.store[key][timestamp]) {
                return this.store[key][timestamp]
            }
            timestamp--;
        }
        return ''
    }
}