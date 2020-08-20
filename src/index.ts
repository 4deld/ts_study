class Greeter{
    constructor(public name:string){}
    greet(){
        return `hello world, ${this.name}!!`;
    }
    hugeGreet(){
        return `HELLO WORLD~~!, ${this.name}!!!`
    }
};

const greeter= new Greeter('vincent');
console.log(greeter.greet());