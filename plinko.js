class Plinko {
    constructor(x,y){
        var options={
            isStatic:true,
            resitution:0,
            friction:1,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = 10
        World.add(world, this.body)
      }
}