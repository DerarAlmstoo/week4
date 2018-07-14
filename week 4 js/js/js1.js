console.log("hi");
var root = document.getElementById("app");
console.log(root);

var prog = document.createElement("p"); //لانشاء عنصر جديد
console.log(prog);
prog.innerText="new html";// لادخال نص داخل العنصر 
root.appendChild(prog); // لادخال العنصر دالخ ال html 


//////////////////////// مسالة الوقت

// root.innerHTML="Hallo Html";
var D1 = document.getElementById("date");
var d = new Date();

var n = d.toLocaleDateString();
D1.innerHTML = n;

///////////////////////////////////
//لانشاء زر عن طريق الجافا سكريبت
var but = document.createElement("button");
but.innerHTML="submet";
root.appendChild(but);

// but.onclick= function(){
// prog.innerText="Derar";
// var prog2 = document.createElement("p");
// console.log(prog2);
// prog2.innerText="Almstoo";
// root.appendChild(prog2);
// }

// خواص الزر
// but.onclick= al (); // هذه الطريقة لا تعمل في الجافا سكريبت

//  function(){
//     alert("hi");
// }

// function cli(){
//     alert("hi2");
// }

function createElementApp(x, text, color, fader){
    var elem = document.createElement(x);
    elem.innerText= text;
    elem.style.color= color;
    fader.appendChild(elem);
}


but.onclick= function(){
    createElementApp('p','hi', 'red', root);
    }