class Man {
    constructor(x,y,radius){
        var options = {
            isStatic:true
        }
         
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
    }
    }
    
    
    
    