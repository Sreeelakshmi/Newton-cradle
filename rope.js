class Rope{
	constructor(body1,body2,offSetX,offSetY){
		this.offSetX=offSetX
		this.offSetY=offSetY
		var options = {
			bodyA: body1,
			bodyB:body2,
			pointB:{x:this.offSetX,y:this.offSetY}
		}
		
		
		this.sling = Constraint.create(options);
		World.add(world, this.sling);
	}
 
  
	display(){
		
			var pointA = this.sling.bodyA.position;
			var pointB = this.sling.bodyB.position;
		
			
		
				strokeWeight(2);
				var anchor1X=pointA.x;
				var anchor1Y=pointA.y;
				var anchor2X=pointB.x+this.offSetX;
				var anchor2Y=pointB.y+this.offSetY;
			
				line(anchor1X,anchor1Y,anchor2X,anchor2Y);
		
				
	}
	
  }