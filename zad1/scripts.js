
/*Obliczanie wartosci pola trojkata i  sprawdzenie czy dane sa dodatnie */


function getTriangleArea(a, h) {

    var returnedValue = a * h / 2;

    if (a > 0 && h > 0)  {
        console.log('liczby dodatnie');
    } 
    else {
        console.log('nieprawidlowe dane');
    }
    
    return returnedValue;
}   

console.log(getTriangleArea(10, 6));




/*Druga czesc zadania trzy zmienne dla trojkata*/ 

/*Zmienne dla trojkata 1*/
var triangle1Area = getTriangleArea(15, 20);

console.log(triangle1Area);


/*Zmienne dla trojkata 2*/
var triangle2Area = getTriangleArea(20, 25);

console.log(triangle2Area);


/*Zmienne dla trojkata 3*/
var triangle3Area = getTriangleArea(25, 30);

console.log(triangle3Area);


/*Zmienne dla trojkata 4 - minusowe dane*/
var triangle4Area = getTriangleArea(-25, -30);

console.log(triangle4Area);



