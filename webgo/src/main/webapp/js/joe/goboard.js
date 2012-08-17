var getAllstarOfBoard = function(width,height){
	var allStar = {};

	//
	return allStar;
}

var showBoard = function(beginX , beginY , width , height){
	var goboard = document.getElementById('goboard');	
	var context2d = goboard.getContext('2d');	
	
	//draw 19 latitude 
	for (i=1 ; i<=19 ; i++){
		draw(beginX , (i+1)*40 , width , (i+1)*40 , context2d);
	}
	
	//draw 19 longitude
	for(j=1 ; j<=19 ; j++){
		draw((j+1)*40 , beginY , (j+1)*40 , width , context2d);
	}	
	
	//draw 9 star
	setStar(beginX , beginY , width , height , context2d);
}

var draw = function(x1,y1,x2,y2,context2d){
	//set line smooth 
	context2d.lineJoin = 'round';
	
	context2d.save();
	context2d.beginPath();
	context2d.moveTo(x1,y1);
	context2d.lineTo(x2,y2);
	context2d.stroke();
	
	//set line-color 
	context2d.strokeStyle = '#663300';
}


var drawPoint = function(context2d,P){
	context2d.beginPath();
	
	context2d.arc(P[0],P[1],3,0,Math.PI * 2,true);
	context2d.closePath();
	context2d.fill();

	context2d.stroke();
}

var setStar = function(beginX , beginY , endX , endY , context2d){	
	var p = new Array(2);
	//left top star
	p[0] = (beginX + 120);
	p[1] = (beginY + 120);	
	drawPoint(context2d,p);
	
	//middle top star
	p[0] = (beginX + 360);
	p[1] = (beginY + 120);	
	drawPoint(context2d,p);
	
	//right top star
	p[0] = (beginX + 600);
	p[1] = (beginY + 120);	
	drawPoint(context2d,p);
	
	//left middle star
	p[0] = (beginX + 120);
	p[1] = (beginY + 360);
	drawPoint(context2d,p);
	
	//tianyuan
	p[0] = (beginX + 360);
	p[1] = (beginY + 360);
	drawPoint(context2d,p);
	
	//middle right star
	p[0] = (beginX + 600);
	p[1] = (beginY + 360);
	drawPoint(context2d,p);
	
	//left bottom star
	p[0] = (beginX + 120);
	p[1] = (beginY + 600);
	drawPoint(context2d,p);
	
	//middle bottom star
	p[0] = (beginX + 360);
	p[1] = (beginY + 600);
	drawPoint(context2d,p);
	
	p[0] = (beginX + 600);
	p[1] = (beginY + 600);
	drawPoint(context2d,p);
}
