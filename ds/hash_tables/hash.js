class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) { // O(1)
        let hash = 0;
        for (let i=0; i<key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
                this.data.length
        }
        return hash;
    }

    set(key, value) {  // O(1)
        // run in the black box
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            // this.data[address].push([key, value]);
        }
        // to not automatically delete the hash collision
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {  // O(1) if there's no collisions
        let address = this._hash(key);
        // bucket of items with the same indexes
        const currentBucket = this.data[address];
        if (currentBucket) {
            // loop on the items inside the bucket
            for (let i = 0; i < currentBucket.length; i++) {
                // check the first key of inside array, "grapes"
                if(currentBucket[i][0] === key) {
                    // return the first value
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        // loop to find the keys --no guaranteed order
        for (let i=0; i < this.data.length; i++) {
            if (this.data[i]) {
                // the bucket
                console.log('bucket', this.data[i]);
                // element inside the bucket
                console.log('element', this.data[i][0]);
                // key of the first element
                console.log('key', this.data[i][0][0]);
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}

// for in --slow
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 10001);
myHashTable.set('oranges', 9);
console.log(myHashTable.keys());
