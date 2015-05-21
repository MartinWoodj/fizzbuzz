$(document).ready(function(){
	for (var i=1; i<=100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
			$('#list').append('<li>'+"FizzBuzz"+'</li>');
		}
		else if (i % 3 === 0) {
			console.log("Fizz");
			$('#list').append('<li>'+"Fizz"+'</li>');
		}
		else if (i % 5 === 0) {
			console.log("Buzz");
			$('#list').append('<li>'+"Buzz"+'</li>');
		}
		else {
			console.log(i);
			$('#list').append('<li>'+i+'</li>');
		}
	}
	
})