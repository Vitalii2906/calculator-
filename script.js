


function shield (){
var newProcent = document.getElementById("procent");
var valueProcent = newProcent.options[newProcent.selectedIndex].value;

var newAccount = document.getElementById("account").value;
var newPeople = document.getElementById("people").value;


if(valueProcent == 5){
	var result = (newAccount * 0.05) / newPeople;
	score.innerHTML = "Tip Amount: " + result + "$";
}else if (valueProcent == 10){
	var result = (newAccount * 0.1) / newPeople;
	score.innerHTML = "Tip Amount: " + result + "$";
}else if (valueProcent == 15){
	var result = (newAccount * 0.15) / newPeople;
	score.innerHTML = "Tip Amount: " + result + "$";
}else {
	console.log("Error");
}

}



btn.addEventListener('click', shield, true);






