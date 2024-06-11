// it is all abouty function in javascript.


function add(a,b) {
    console.log(a+b);
    
}

// add(2,34);



// arrow function of add two numbers.


let sum=(a,b)=>{
    console.log(a+b);
}


// arrow function is call with help of variable namey.

// sum(2,3);


// in arrow function if we not write return it means it is implicit return

// in case of single statemnet we can remove parantheses 

let mul=(a,b)=>{
     return a*b;
};

 // implicit arrow function
let mul2=(a,b)=>{
     a*b;
};



// simple function.


function print() {
    console.log("hello world!");
    
}


for (let index = 0; index < 5; index++) {
  //  print();
    
}


// function take string and print no. of vowels


function strreturn(a) {
    count=0;
   for (const ch of a) {
    if (ch=="a" || ch=="e" || ch=="i" || ch=="U" || ch=="o") {
        count++;
        
    }
    
   }
   console.log(count);
    
}


strreturn('apna love');








