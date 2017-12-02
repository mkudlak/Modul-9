var list = document.getElementById('list');
var add = document.getElementById('addElem');
var number = document.getElementsByTagName('li');


add.addEventListener('click', function() {
    var element = document.createElement('li');
    element.innerHTML = 'podpunkt ' + number.length;
    list.appendChild(element);
});


/*
var button = document.getElementById('addElem');
var list = document.getElementById('list');

var podpunkt = document.createElement('li');

var i;
*/


/*Moja proba zrobienia sama 1*/
/*
button.addEventListener('click', buttonOnClick );

        function buttonOnClick() {

                list.appendChild(podpunkt);
                podpunkt.innerHTML = 'item ' + 1;

        }
 */

 /*Moja proba zrobienia sama 2*/
/*
function addPodpunkt (param) {
     console.log(param);
 }

    button.addEventListener('click', buttonOnClick);
   
    function buttonOnClick () {

        addPodpunkt('button was clicked');
        list.appendChild(podpunkt);
        podpunkt.innerHTML = 'item ' + 1;
        i++;
    }

*/






