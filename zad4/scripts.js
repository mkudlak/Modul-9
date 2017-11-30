



function drawTree() {
    let poziom = 5;
    let tree = '';

    for(var i = 1; i <= poziom; i++ ) {
        let stars = '';

        for(let k = 1; k <= (poziom - 1 ); k++) {
            stars += ' + ';
        }
        
        for(let j = 1; j <= i; j++) {
            stars += ' * ';
        }
        
        
        console.log(stars);
    }
}  


drawTree();