// projection

var fingers;
var playing = false;
var button;
var bg;
var minDis = 10;
//The radius of ellipse
var R = 20;


var V1;
var V2;
var V3;
var V4;
var V5;
var V6;
var V7;
var V8;
var V9;

var x1 = 807;
var y1 = 340;

var x2 = 904;
var y2 = 314;


var x3 = 821;
var y3 = 230;

var x4 = 1040;
var y4 = 280;

var x5 = 757;
var y5 = 247;

var x6 = 991;
var y6 = 350;


var x7 = 293;
var y7 = 266;

var x8 = 426;
var y8 = 607;

var x9 = 1200;
var y9 = 300;

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

// socket
var socket;

function setup() {
  createCanvas(1920, 1080);
  // codes for socket communication
  socket = io.connect('http://localhost:8000');
  socket.on ('mouse',playMovie);
  
  // specify multiple formats for different browsers
  
    //Eygpt
    V1 = createVideo(['assets/Back Home by Eman Helal-SD.mp4',
                         'assets/Back Home by Eman Helal-SD.webm']);
    //Iran                    
    V2 = createVideo(['assets/Jesus in Iran by Abbas Hajimohammadi-SD.mp4',
                         'assets/Jesus in Iran by Abbas Hajimohammadi-SD.webm']);
    //Ukraine                    
    V3 = createVideo(['assets/Homeland in Exile by Anastasia Vlasova-SD.mp4',
                         'assets/Homeland in Exile by Anastasia Vlasova-SD.webm']);
    //Xinjiang, China                     
    V4 = createVideo(['assets/On Court Uyghur Dreams Grow by Yuyang Liu-SD.mp4',
                         'assets/On Court Uyghur Dreams Grow by Yuyang Liu-SD.webm']);
    //Slovenia                     
    V5 = createVideo(['assets/Solidarity Not Charity by Manca Juvan-SD.mp4',
                         'assets/Solidarity Not Charity by Manca Juvan-SD.webm']);
    //India                     
    V6 = createVideo(['assets/Kashmiriyat by Poulomi Basu-SD.mp4',
                         'assets/Dysturb_Demo_Projection_Brush.webm']);
    //America                     
    V7 = createVideo(['assets/Talk 2 Muslims by Muyi Xiao-SD.mp4',
                         'assets/Talk 2 Muslims by Muyi Xiao-SD.webm']);
    //Chile                     
    V8 = createVideo(['assets/The Skin of Palestine by Santiago Arcos-SD.mp4',
                         'assets/The Skin of Palestine by Santiago Arcos-SD.webm']);
    //V9 = createVideo(['assets/Dysturb_Demo_Projection_Brush.mov',
                        // 'assets/Dysturb_Demo_Projection_Brush.webm']);
  //Copyright @ Free Vector Maps.com                       
  bg = loadImage("assets/worldmap_Cut.png");
  //fingers.loop(); // set the video to loop and start playing
    V1.hide(); // by default video shows up in separate dom
                  // element. hide it and draw it to the canvas
                  // instead
    V2.hide();
    V3.hide();
    V4.hide();
    V5.hide();
    V6.hide();
    V7.hide();
    V8.hide();
    //V9.hide();
                  
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
    	    image(V1,x1, y1,Vwidth,Vheight);
    }
    
        if (play2 == true){
    	    image(V2,x2, y2,Vwidth,Vheight);
    }
    
        if (play3 == true){
    	    image(V3,x3, y3,Vwidth,Vheight);
    }
    
        if (play4 == true){
    	    image(V4,x4, y4,Vwidth,Vheight);
    }
    
        if (play5 == true){
    	    image(V5,x5, y5,Vwidth,Vheight);
    }
    
        if (play6 == true){
    	    image(V6,x6, y6,Vwidth,Vheight);
    }
    
        if (play7 == true){
    	    image(V7,x7, y7,Vwidth,Vheight);
    }
    
        if (play8 == true){
    	    image(V8,x8, y8,Vwidth,Vheight);
    }
    
        if (play9 == true){
    	    image(V9,x9, y9,Vwidth,Vheight);
    }
    
    

    pop();
    

    


}





function playMovie(data){
		console.log(data.x,data.y);
	var size1 = dist(data.x, data.y, x1, y1);
	var size2 = dist(data.x, data.y, x2, y2);
	var size3 = dist(data.x, data.y, x3, y3);
	var size4 = dist(data.x, data.y, x4, y4);
	var size5 = dist(data.x, data.y, x5, y5);
	var size6 = dist(data.x, data.y, x6, y6);
	var size7 = dist(data.x, data.y, x7, y7);
	var size8 = dist(data.x, data.y, x8, y8);
	var size9 = dist(data.x, data.y, x9, y9);
	if (size1< minDis){
		play1 = true;
		V1.loop();
		Vwidth = 640;
		Vheight = 360;
	}
	
	if (size2< minDis){
		V2.loop();
			play2 = true;
		
	}
	
	if (size3< minDis){
		V3.loop();
			play3 = true;
	}
	if (size4< minDis){
		V4.loop();
			play4 = true;
	}
	
	if (size5< minDis){
		V5.loop();
			play5 = true;
	}
	
	if (size6< minDis){
		V6.loop();
			play6 = true;
	}
	
	if (size7< minDis){
		V7.loop();
			play7 = true;
	}
	
	if (size8< minDis){
		V8.loop();
			play8 = true;
	}
	
	if (size9< minDis){
		V9.loop();
			play9 = true;
	}
	
		  if (data.x > 0 && data.x < 100 && data.y > 0 && data.y < 100) {
    var fs = fullscreen();
    fullscreen(!fs);
  }
	

	
	
}
