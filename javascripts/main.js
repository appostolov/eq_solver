var can = document.getElementById("can");
var c = can.getContext("2d");

c.fillStyle = "white";
c.fillRect(0,0,can.width,can.height);

c.fillStyle = "#555";
c.lineWidth=0.3;
	for(var g = 0; g < can.width; g++){
		if(g%10 == 0){
			c.beginPath();
			c.moveTo(g,0);
			c.lineTo(g,can.width);
			c.stroke();
			
			c.beginPath();
			c.moveTo(0,g);
			c.lineTo(can.width,g);
			c.stroke();
			
			
			
			}
			if(g%50 == 0){
				c.font = "15px Arial";
				c.fillStyle = "#003";
				c.fillText(g - can.height/2,can.width/2,g);
				
				c.font = "15px Arial";
				c.fillStyle = "#003";
				c.fillText(g - can.width/2,g,can.height/2);
			}
			
			
		}
		
		c.fillStyle = "black";
		c.beginPath();
		c.moveTo(can.width/2,0);
		c.lineTo(can.width/2,can.height);
		c.stroke();
		
		c.beginPath();
		c.moveTo(0,can.height/2);
		c.lineTo(can.width,can.height/2);
		c.stroke();

var solve = function(){
	
	c.fillStyle = "white";
	c.fillRect(0,0,can.width,can.height);
	
	
	if(isNaN(document.getElementById("a_f").value) == true ){
		document.getElementById("a_f").value = "0";
		alert("РЎР°РјРѕ С†РёС„СЂРё");
	}else if( isNaN(document.getElementById("b_f").value) == true ){
		document.getElementById("b_f").value = "0";
		alert("РЎР°РјРѕ С†РёС„СЂРё");
	}else if( isNaN(document.getElementById("c_f").value) == true ){
		document.getElementById("c_f").value = "0";
		alert("РЎР°РјРѕ С†РёС„СЂРё");
	}

var val_a = document.getElementById("a_f").value - 0;
var val_b = document.getElementById("b_f").value - 0;
var val_c = document.getElementById("c_f").value - 0;

var D = Math.pow(val_b,2)-4*val_a*val_c;

var b1=(-val_b+Math.sqrt(D))/2;

var b2=(-val_b-Math.sqrt(D))/2;

document.getElementById("det").innerHTML = "D="+D;
document.getElementById("b1").innerHTML = "b1="+b1;
document.getElementById("b2").innerHTML = "b2="+b2;

c.fillStyle = "#555";
c.lineWidth=0.3;
	for(var g = 0; g < can.width; g++){
		if(g%10 == 0){
			c.beginPath();
			c.moveTo(g,0);
			c.lineTo(g,can.width);
			c.stroke();
			
			c.beginPath();
			c.moveTo(0,g);
			c.lineTo(can.width,g);
			c.stroke();
			
			
			
			}
			if(g%50 == 0){
				
				if(g != can.height/2){
					
					c.font = "25px Arial";
					c.fillStyle = "#003";
					c.fillText(g-val_c/val_b-can.height/2,can.width/2,g);
					
				}else{
					c.font = "25px Arial";
					c.fillText(g-val_c/val_b-can.height/2,can.width/2-270,g+25);
				}
					
					c.font = "15px Arial";
					c.fillStyle = "#003";
					c.fillText(g-can.width/2,g,can.height/2);
			}
			
			
		}
		
		c.fillStyle = "black";
		c.beginPath();
		c.moveTo(can.width/2,0);
		c.lineTo(can.width/2,can.height);
		c.stroke();
		
		c.beginPath();
		c.moveTo(0,can.height/2);
		c.lineTo(can.width,can.height/2);
		c.stroke();

	if(D>=0){
	
		for(var a = 0; a<can.width; a++){
		
		var x = a-can.width/2;
		var y = (can.width/2)-((Math.pow(x,2)+val_c)/val_b)+val_c/val_b;
		
		var y_true = (can.width/2)-(Math.pow(x,2)+val_c)/val_b;
		
		c.fillStyle = "#090";
		c.fillRect(a,y,3,3);
		}
	}else{
		
		c.font = "30px Arial";
		c.fillStyle = "#003";
		c.fillText("D<0",50,50);
	
		for(var a = 0; a<can.width; a++){
		
		var x = a-can.width/2;
		var y = (can.width/2)-((Math.pow(x,2)+val_c)/val_b)+val_c/val_b;
		
		c.fillStyle = "red";
		c.fillRect(a,y,3,3);
		}
	}
};

var red = 0;
var red_step = 1;
setInterval(function(){
	
	document.getElementById("site_title").style.color = "rgb("+red.toString()+",0,0)";
	red += red_step;
	if(red >= 255 || red <= 0){
		red_step = -red_step;
	}
	
},17);


