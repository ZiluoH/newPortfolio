var dice_group = [
	{
		nubmer:1,
		img:"img/dice-1.gif"
	},
	{
		nubmer:2,
		img:"img/dice-2.gif"
	},{
		nubmer:3,
		img:"img/dice-3.gif"
	},{
		nubmer:4,
		img:"img/dice-4.gif"
	},{
		nubmer:5,
		img:"img/dice-5.gif"
	},{
		nubmer:6,
		img:"img/dice-6.gif"
	}
]

document.getElementById('dice1').src = dice_group[0].img
document.getElementById('dice2').src = dice_group[1].img
document.getElementById('dice3').src = dice_group[2].img

var yourValue = 0
var win = 0
var SorB = "Small"
var WorL = "Win"

function deposit() {

var deposit_amount = document.getElementById('deposit_amount').value
yourValue = +yourValue + +deposit_amount
document.getElementById('balance').innerHTML = yourValue
}




function play(){

var Big = document.getElementById('Big')
var Small = document.getElementById('Small')
var bet_amount = document.getElementById('bet_amount').value

var dice_1 = Math.floor(Math.random()*6 + 1)
var dice_2 = Math.floor(Math.random()*6 + 1)
var dice_3 = Math.floor(Math.random()*6 + 1)

var sum = dice_1 + dice_2 + dice_3

if (Big.checked && sum > 10) 
	{
     win = +bet_amount
     SorB = "Big" 
     WorL = "Win"
	} 
	else if (Small.checked && sum < 11) 
	{
	  win = +bet_amount
	  SorB = "Small"
	  WorL = "Win"
	} 
	else if (Big.checked && sum < 10) 
	{
	  win = -bet_amount	  
	  SorB = "Small"
	  WorL = "Lose"
	} 
	else if (Small.checked && sum > 10)
	{
	  win = -bet_amount
	  SorB = "Big"
	  WorL = "Lose"
	}


    yourValue = yourValue + win
	console.log("dice roll " + sum)
    console.log("Now you have " + yourValue)
    document.getElementById('balance').innerHTML = yourValue
    document.getElementById('result').innerHTML = "It rolls " + sum + ", " + SorB + ". You " + WorL + " " + bet_amount + "."
    
}


