



function drawTree() {
    let poziom = 5;
    let tree = '';

    for(var i = 1; i <= poziom; i++ ) {
        let stars = '';

        for (j = i; j < poziom; j++) {
            stars += ' ';
          }
        
        for (k = 0; k < (i * 2) - 1; k++) {
            stars += '*';
        
        
        
        }
        console.log(stars);  
    } 
    
}
drawTree();



