const person={
    name: "deepu",
    age: 25,
    greet: function () {
        return `Hello,my name is ${this.name}`;
    },
};
console.log(person.name);   //output:deepu
console.log(person.greet());  //output: Hello, my name is deepu