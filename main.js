// write your code here to make the tests pass
var Library = function() {
  var books = [];

  var addBook = function(book) {
    books.push(book);
  }

  var checkOutBook = function(book) {
    for(i=0; i < books.length; i++) {
      if(book.title === books[i].title) {
        var checkedOut = books[i].getAttribute('checkedOut')
        if(!checkedOut) {
          books[i].setAttribute('checkedOut', true);
        }
        else console.log('error in check out');
      }
    }
  }

  var returnBook = function(book) {
    for(i=0; i < books.length; i++) {
      if(book.title === books[i].title) {
        var checkedOut = books[i].getAttribute('checkedOut');
        if(checkedOut) {
          books[i].setAttribute('checkedOut', false);
        }
        else console.log('error in return');
      }
    }
  }

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  }

}

var Book = function(title, author){

  var attributes = {
    title: title,
    author: author,
    checkedOut: false
  }

  var getAttribute = function(attribute) {
    if (attribute ) {
      return attributes[attribute];
    }
  }

  var setAttribute = function(attribute, value) {
    if (attribute in attributes) {
      attributes[attribute] = value;
    }
  }


  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }
}
