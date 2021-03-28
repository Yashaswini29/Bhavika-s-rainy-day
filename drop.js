class Drop{
    constructor(x,y,radius){
        var options ={
           'friciton':0.1
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        fill("blue")
        circle(this.body.position.x,this.body.position.y,5)
       
    }

    update(){
        if(this.body.position.y>400){
           Matter.Body.setPosition(this.body,{x: random(0,400),
           y: random(-10,0)
           });
         }
      }
   
    }
   
