import './test.sub.js'

console.log('mehr davon'.camelCase)
// console.log(toCamelCase('mehr hasen'))



class Example {
    constructor(x) {
        this.x = x;
    }
    toString() {
        return `Example[x=${this.x}]`;
    }
    get [Symbol.toStringTag]() {
        return "Example";
    }
}
const e =  new Example(42);
console.log(String(e));  