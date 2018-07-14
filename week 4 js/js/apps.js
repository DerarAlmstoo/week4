var myArray = ["this_is _holland","this_is _syria","this_is _iraq","this_is _aleppo","this_is _idleb","this_is _lebanon","this_is _rotterdam","this_is _holland2","this_is _holland4","this_is _holland5"];
// console.log(myArray);

//////////////////

function myList() {

var root = document.getElementById("app");
var prog = document.createElement("ul");
root.appendChild(prog);


for (var i = 0; i < myArray.length; i++){

    var listItem = document.createElement("li");
    listItem.innerHTML = myArray[i];
    listItem.appendChild(prog);
}

}
console.log(myList());

myList();

///////////////////////////////
var book_title;
var book_language;
var book_author;

var book = {
    title:book_title,
    language:book_language,
    author:book_author,
};

///////////////////////////////////////////////

function myList() {

    var root = document.getElementById("app");
    var prog = document.createElement("ul");
    root.appendChild(prog);
    
    
    for (var i = 0; i < myArray.length; i++){
    
        var listItem = document.createElement("li");
        var listItem2 = document.createElement("h1");
        var listItem3 = document.createElement("h2");
        var listItem4 = document.createElement("h3");
        listItem.innerHTML = myArray[i];
        listItem.appendChild(prog);
        listItem2.innerHTML = myArray[i].book_title;
        listItem2.appendChild(prog);
        listItem3.innerHTML = myArray[i].book_language;
        listItem3.appendChild(prog);
        listItem4.innerHTML = myArray[i].book_author;
        listItem4.appendChild(prog);
    }
    
    }

 ///////////////////////////