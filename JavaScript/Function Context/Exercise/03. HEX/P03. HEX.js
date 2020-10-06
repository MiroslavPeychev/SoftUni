class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        let hexStr = this.value.toString(16).toUpperCase();
        return "0x" + hexStr;
    }

    plus(hex) {
        let result = this.value + hex;

        return new Hex(result);
    }

    minus(hex) {
        let result = this.value - hex;

        return new Hex(result);
    }

    parse(string) {
        let number = parseInt(string, 16);

        return number;
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
