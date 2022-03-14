class Cat {
    element: { [x: string]: any; style: { [x: string]: string; }; };
    constructor( element) {
        this.element = element;
    }

    walk(steps, direction) {
        this.element.style[direction.toLowerCase()] = this.element['offset'+direction] + steps +'px'
    }
}

const cat1 = new Cat(document.getElementsByClassName('cat-img')[0]);


 


document.body.onkeydown=function(e){
   let key= e.keyCode || e.charCode|| e.which; // cross browser complications
    const steps =40;
        switch (key) {
        case 39:
            cat1.walk(steps, 'Left')
            break;
        case 37:
            cat1.walk(-steps, 'Left')
            break;
        case 38:
            cat1.walk(-steps, 'Top')
            break;
        case 40:
            cat1.walk(steps, 'Top')
            break;
    
        default:
            break;
    }
    
    
  }