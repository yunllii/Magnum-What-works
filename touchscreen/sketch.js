var fingers;
var playing = false;
var button;
var bg;
var minDis = 10;
//The radius of ellipse
var R = 20;
//Eygpt
var x1 = 1077;
var y1 = 398;
//Iran
var x2 = 1223;
var y2 = 384;

//Ukraine
var x3 = 1102;
var y3 = 262;

//Xinjiang, China
var x4 = 1400;
var y4 = 343;

//Slovenia
var x5 = 1019;
var y5 = 295;

//India
var x6 = 1326;
var y6 = 426;

//America
var x7 = 579;
var y7 = 314;

//Chile
var x8 = 573;
var y8 = 705;

//Philippines
var x9 = 1548;
var y9 = 471;

var Vwidth = 0;
var Vheight = 0;

var play1 = false;
var play2 = false;
var play3 = false;
var play4 = false;
var play5 = false;
var play6 = false;
var play7 = false;
var play8 = false;
var play9 = false;


// This is for websocket
var socket;



function setup() {
  createCanvas(1920, 1080);
  
  socket = io.connect('http://localhost:8000');

  // specify multiple formats for different browsers
  

  //Copyright @ Free Vector Maps.com                       
  bg = loadImage("assets/worldmap_Cut.png");

}

function sendMouse(){
	
	
}

function draw() {
	
	
    background(bg);// draw the video frame to canvas
    
        fill(145,40,61);
    noStroke();
    
    ellipse(x1,y1,R,R);
    ellipse(x2, y2,R,R);
    ellipse(x3, y3,R,R);
    ellipse(x4, y4,R,R);
    ellipse(x5, y5,R,R);
    ellipse(x6, y6,R,R);
    ellipse(x7, y7,R,R);
    ellipse(x8, y8,R,R);
    ellipse(x9, y9,R,R);
    push();
    imageMode(CENTER);
    
    if (play1 == true){
 
    }
    
        if (play2 == true){

    }
    
        if (play3 == true){

    }
    
        if (play4 == true){

    }
    
        if (play5 == true){

    }
    
        if (play6 == true){

    }
    
        if (play7 == true){

    }
    
        if (play8 == true){

    }
    
        if (play9 == true){

    }
    
    

    pop();
    
}



function mousePressed() {
	
	
	//Send the mouseX, mouseY to the [projection sketch]
		var data = {
		x : mouseX,
		y : mouseY
	}
	
	socket.emit ('mouse', data);
	
	// Determine which dot is hit
	console.log(mouseX,mouseY);
	var size1 = dist(mouseX, mouseY, x1, y1);
	var size2 = dist(mouseX, mouseY, x2, y2);
	var size3 = dist(mouseX, mouseY, x3, y3);
	var size4 = dist(mouseX, mouseY, x4, y4);
	var size5 = dist(mouseX, mouseY, x5, y5);
	var size6 = dist(mouseX, mouseY, x6, y6);
	var size7 = dist(mouseX, mouseY, x7, y7);
	var size8 = dist(mouseX, mouseY, x8, y8);
	var size9 = dist(mouseX, mouseY, x9, y9);
	if (size1< minDis){

	}
	
	if (size2< minDis){

		
	}
	
	if (size3< minDis){

	}
	
	if (size4< minDis){

	}
	
	if (size5< minDis){

	}
	
	if (size6< minDis){

	}
	
	if (size7< minDis){

	}
	
	if (size8< minDis){

	}
	
	if (size9< minDis){

	}
	

}
