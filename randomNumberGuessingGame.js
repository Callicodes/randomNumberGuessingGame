function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1; 
  return randomNumber;
}
/*
console.log( getRandomNumber(6) );
*/

/*multiply the length of a triangle by it's area*/

function getArea(width, length) {
	var area = width * length;
	return area;
}

console.log(getArea(10, 20));


