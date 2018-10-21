let today = new Date();
let hourNow = today.getHours();
let mood;
let greeting = document.getElementById("greet");
let body = document.getElementById("body");

if(hourNow >= 0 && hourNow < 12){
	mood = "Morning !";
	greeting.dataset.text = `Good ${mood}`;
	body.style.background = "linear-gradient(90deg,#FF512F,#F09819)";// Sunrise
}

else if (hourNow >= 12 && hourNow < 18){
	mood = "Afternoon !";
	greeting.style.fontSize = "4em";
	greeting.dataset.text = `Good ${mood}`;
	body.style.background = "linear-gradient(90deg,#AA076B,#61045F)";// Aubergine
}

else if (hourNow >= 18 && hourNow < 22){
	mood = "Evening !";
	greeting.dataset.text = `Good ${mood}`;
	body.style.background = "linear-gradient(90deg,#EB3349,#F45C43)";// Cherry
}

else {
	mood = "Night !";
	greeting.dataset.text = `Good ${mood}`;
	body.style.background = "linear-gradient(90deg,#403B4A,#E7E9BB)";// Frozen
}

// console.log(today);
// console.log(hourNow);
// console.log(mood);
// console.log(body);

greeting.innerHTML = 'Good ' + mood ;