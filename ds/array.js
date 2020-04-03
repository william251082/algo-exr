class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    deleteAtIndex(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            // shift each data to the next element
            this.data[i] = this.data[i + 1];
        }
        console.log(this.data[this.length - 1]);
        // delete the last item
        delete this.data[this.length - 1];
        this.length--;
    }
}

// const myArray = new MyArray();
// myArray.push('hi');
// myArray.push('you');
// myArray.push('!');
// // myArray.pop();
// myArray.deleteAtIndex(0);
// // myArray.push('are');
// // myArray.push('nice');
// // myArray.shiftItems(0);
// console.log(myArray);

// // reverse string
// function reverse(str) {
//     let reversed = '';
//
//     for (let char of str) {
//         reversed = char + reversed
//     }
//
//     return reversed;
// }
//
// console.log(reverse('ih'));

function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;

    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i]);
    }
    return backwards.join('');
}

// function reverse2(str){
//     //check for valid input
//     return str.split('').reverse().join('');
// }
//
// const reverse3 = str => [...str].reverse().join('');
//
// reverse('Timbits Hi')
// reverse('Timbits Hi')
// reverse3('Timbits Hi')
