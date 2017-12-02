


var click = document.getElementsByClassName('button'); 
var clickLength = click.length;
var text;

var i;


for  (i=0; i < clickLength; i++) {
    text = click[i].innerText;
    console.log(text);
}




/*
console.log(click[0].innerText);
console.log(click[1].innerText);
console.log(click[2].innerText);

console.log(click);
console.log(clickLength);



console.log(text);
*/