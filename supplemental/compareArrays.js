compArr = ['g', 'b', 'r', 'y', 'b', 'r', 'y'];
userArr = ['g', 'y', 'r'];

function compareArrays(){
	console.log(userArr);
	console.log(compArr.slice(0,userArr.length));
	return compArr.slice(0,userArr.length).toString() == userArr.toString();					
}

console.log(compareArrays());