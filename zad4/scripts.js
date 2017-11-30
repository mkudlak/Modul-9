var branch = prompt('How many branch should the tree have? Choose from 1 branche to 20 branches');
alert('You have choosen ' + branch + ' branches.');




    var spacje = branch - 1;
    var spaces = spacje;

    
    var i = 1;
    while (i <= branch) { 
        var star = '';
    
        for (var x=0; x < i; x++) { 
            star += ' * ';
            
        }

 

    
        console.log(star);
        i++;
    }