class Wall{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.height = height;
        this.width = width;
        Matter.Body.setAngle(this.body,angle);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
        noStroke();
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
}