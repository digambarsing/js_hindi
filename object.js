// object create by literal way

const b={
    key:"value",
    name:"ved",
    roll:23,
    email:dig2gmail.com,
    "height":45,
    //symbol use in object

    [symbolname]:"hello",
}


// if you create a var with const you can change its value but if you create a object with const than you can change value of any key of object.


// access method

console.log(b.name)
console.log(b.roll)
console.log(b["name"])
console.log(b.height)
console.log(b["height"])


// to delete a property we use.

delete b.name;
console.log(b);


// symbol create

const symbolname= Symbol("key")

// access symbol
console.log(b[symbolname])

// change values in object

b.roll=45
//Object.freeze(b) // after this u can not change value of this obect
b.roll=76// it does not show in answer but did not gave any error

// function uesd in object

b.greeting=function(){
    console.log(" hello users")
}

console.log(b.greeting());


b.greeting1=function(){
    console.log( `hello users, ${this.height}`)
}

console.log(b.greeting1());


