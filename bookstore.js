// Object to store information about a book.

var book={
    authorname:"mamta bhatnagar",
    price:250,
    Qty:10,
    title:"english world",
    course:"Btech"

}
var book1={
    authorname:"ved bhatnagar",
    price:2500,
    Qty:310,
    title:"english language",
    course:"Btech"

}
var book2={
    authorname:"jaya bhatnagar",
    price:2590,
    Qty:190,
    title:"english ocean",
    course:"Btech"

}


// array to store all th books

var bookshell=[book ,book1,book2,]

// function to add new book in shell

function addbooktoshell(newbook){
    bookshell.push(newbook);
}


// function to update stock of book


function updatestock(book,soldbook){
    book.Qty-=soldbook;
}






  addbooktoshell(book1);
  updatestock(book1,45);
 console.log(book1);