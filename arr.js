arr=[14,52,23,49,15]

console.log(arr)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])

console.log(arr.pop())

console.log(arr.push(768))

console.log(arr.shift())


console.log(arr.unshift(345))


console.log(arr.join(" "))

var ar=[1,2,3,4]
console.log(ar)


var arrr=new Array()
arrr.push(ar)

console.log(arrr)


// const add=(ele) =>{
//     var ad=0;
//     var ad=add+arr[ele];
//     console.log(add)
// }

// add();


br=[23,78,13,90,45]

function check(ele){
    return ele>30;
}

console.log(br.filter(check))


var cr=new Array();
cr[0]=5;
cr[1]=4;
cr[2]=1;
cr[3]=7;
cr[4]=6;

console.log(cr)

var qr=cr.map((x) => 
 x**2);
console.log(qr)