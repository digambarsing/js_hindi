

// primitive datatype



fullName="ved"; // string

roll=23; // number

isTrue=true; // boolean

let undef; // undefined

let age=null; // null

let number=BigInt(123); // bigint  it add "n" after number 


let halfName=Symbol("hello !"); // symbol



console.table([fullName,roll,isTrue,undef,age,number,halfName]);

console.log(typeof(fullName));
console.log(typeof(roll));
console.log(typeof(isTrue));
console.log(typeof(undef));
console.log(typeof(age));
console.log(typeof(number));
console.log(typeof(halfName));


// non primitive datatype:object= it is collection of values or key value pair.


const student={
    fullNamme:"ved",
    roll:87

};

student.fullNamme="dev";
student.roll=56;

console.log(student.fullNamme);
console.log(student.roll);










