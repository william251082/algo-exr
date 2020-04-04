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
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('grapes', 10001);
// console.log(myHashTable.get('grapes'));
// myHashTable.set('apples', 9);
// myHashTable.get('grapes');
console.log(myHashTable.get('grapes'));

// console.dir(myHashTable.data);
