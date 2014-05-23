var can = document.getElementById("can");
var c = can.getContext("2d");

c.fillStyle = "white";
c.fillRect(0,0,can.width,can.height);

var solve = function(){
	
	c.fillStyle = "white";
	c.fillRect(0,0,can.width,can.height);
	
	if(isNaN(document.getElementById("a_f").value) == true ){
		document.getElementById("a_f").value = "0";
		alert("Само цифри");
	}else if( isNaN(document.getElementById("b_f").value) == true ){
		document.getElementById("b_f").value = "0";
		alert("Само цифри");
	}else if( isNaN(document.getElementById("c_f").value) == true ){
		document.getElementById("c_f").value = "0";
		alert("Само цифри");
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

	if(D>=0){
		c.fillStyle = "rgba(0,255,0,0.5)";
		c.fillRect(0,0,can.width,can.height);
	
		for(var a = 0; a<can.width; a++){
		
		var x = a-can.width/2;
		var y = (can.width/2)-(Math.pow(x,2)+val_c)/val_b;
		
		c.fillStyle = "black";
		c.fillRect(a,y,3,3);
		}
	}else{
		c.fillStyle = "rgba(255,0,0,0.5)";
		c.fillRect(0,0,can.width,can.height);
		
		c.font = "30px Arial";
		c.fillStyle = "#003";
		c.fillText("D<0",50,50);
	
		for(var a = 0; a<can.width; a++){
		
		var x = a-can.width/2;
		var y = (can.width/2)-(Math.pow(x,2)+val_c)/val_b;
		
		c.fillStyle = "white";
		c.fillRect(a,y,3,3);
		}
	}
}
