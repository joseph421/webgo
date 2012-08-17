var getAllstarOfBoard = function(width,height){
	var allStar = {};

	//
	return allStar;
}

var showBoard = function(width,height){
	var goboard = document.getElementById('goboard');	
	var context2d=goboard.getContext('2d');	
	
	//draw 19 latitude 
	for (i=1 ; i<=19 ; i++){
		draw(20,(i+1)*40,width,(i+1)*40,context2d);
	}
	
	//draw 19 longitude
	for(j=1 ; j<=19 ; j++){
		draw((j+1)*40,20,(j+1)*40,width,context2d);
	}	
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