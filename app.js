var s;


function Snake() {
	this.x = 0;
	this.y = 0;
	this.x_speed = 1;
	this.y_speed = 0;

	this.update = function(){
		this.x +=this.x_speed;
		this.y +=this.y_speed;
	}
	this.show = function(){
		fill(255);
		rect(this.x,this.y,10,10);
	}
}



function setup() {
	createCanvas(500, 500);
  	s = new Snake();
  	//background(0);
}

function draw() {
	background(51);
	s.update();
	s.show();
}

