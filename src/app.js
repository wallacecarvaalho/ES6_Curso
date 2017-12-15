console.log("Hello".indexOf("ell wallace") === 1);
console.log("Hello wallace".startsWith("wallace", 6));
console.log("Hello wallace".endsWith("ace", 13));
console.log("Hello wallace".includes("H", 1));



/*var US = new Intl.DateTimeFormat("en-US");
var BR = new Intl.DateTimeFormat("pt-BR");
var DE = new Intl.DateTimeFormat("de-DE");

console.log(US.format(new Date("2016-01-05")));
console.log(BR.format(new Date("2016-01-05")));
console.log(DE.format(new Date("2016-01-05")));*/
/*var USD = new Intl.NumberFormat('en-US', { style: "currency", currency: "USD" }).format(10000000000000.400);
var BRL = new Intl.NumberFormat('pt-BR', { style: "currency", currency: "BRL" }).format(10000000000000.400);
console.log(USD);
console.log(BRL);*/
/*var number = 123456.34;

var En = new Intl.NumberFormat('en-US').format(number);
var DE = new Intl.NumberFormat('de-DE').format(number);

console.log(En);
console.log(DE);
*/
/*let color = new Set();

color.add("red").add("green").add("red");


if (color.size === 2 && color.has("red")) {
    for (let key of color.values()) {
        console.log(key);
    }

}*/
/*class Pessoa {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    toString() {
        return `Name:${this.name}
                Email:${this.email}
                Phone:${this.phone} `
    }
}


class Client extends Pessoa {
    constructor(id, name, email, phone) {
        super(name, email, phone);
        this.id = id;
    };
    toString() {
        return `
                id: ${this.id}
                ${super.toString()}`;
    }
}

var test = new Client(1, "wallace", "Mail@mail.com", "123456");
console.log(test.toString());

*/
/*var list = ["test", 34, { name: "Wallace" }];

for (let i of list) {
    console.log(i);
}
*/

/*function test(valueA, valueB = 4) {
    return valueA + valueB;
}

console.log(test(2, 3));
*/

/*let name = "Wallace"
let age = 21;
let text = `
        name: ${name} 
        age:${age}
`;

console.log(text);
*/
/*class Color {
    constructor(codeColor, nameColor) {
        this.codeColor = codeColor;
        this.nameColor = nameColor;
    };
    getColor() {
        return {
            codeColor: this.codeColor,
            nameColor: this.nameColor
        };
    };
}

let red = new Color("red", "Red");

console.log(red.getColor());
*/
/*var bob = {
    _name: "bob",
    _friends: ["Guilherme", "Camila", "Murilo"],
    printFriends: function printFriends() {
        this._friends.forEach(function(f) {
            return console.log(this._name + "knows" + f);
        });
    }
}

bob.printFriends();
*/
/*
var color = () => console.log("red");
color();

var bob = {
    _name: "bob",
    _friends: ["Guilherme", "Camila", "Murilo"],
    printFriends: function printFriends() {
        this._friends.forEach(f => console.log(this._name + " knows " + f));
    }
}

bob.printFriends();*/