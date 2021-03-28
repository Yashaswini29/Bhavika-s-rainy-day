class Umbrella{
    constructor(x,y,radius){
        options ={
           'static':true
        }
        this.body = Bodies(x,y,radius,options)
        this.radius = radius;
        World.add(world,this.body);

    }
    display(){
        circle(this.body.position.x,this.body.position.y,5)
       

    }

   
    }
   
