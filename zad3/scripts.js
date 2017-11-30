

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
    dinosaur = 'triceratops'.toUpperCase();
    dinosChange = text.replace('Velociraptor', dinosaur);

/* Takie tam dla mnie :P
console.log(dinosChange);

console.log(dinosChange.length/2);
*/

console.log(dinosChange.substr(0, dinosChange.length/2));

