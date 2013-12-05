$(document).ready(function() 
{

/**** Global Variables ******/
	$(".closeStatement").hide();
	$(".guesses").hide();
	$(".totalGuesses").hide();
	$(".resetButton").hide();
	var rand = Math.floor(Math.random() * 100); //creates a random # from 1 to 100
	var previousAbs; //creating a variable here to hold the value without changing within checkNumber
	var abs;  //creating a variable here to hold the value without changing within checkNumber() keeps the old number
 	var answer = [];

/***** Function that runs the checkNumber Function when enter is pressed *******/
 $("#listInput").keypress(function(e) 
 	{
      if(e.which == 13) 
       {
        checkNumber();
        $(".guesses").show();       
       }
    });

/****** Input Function that takes the guess and spits out the response *******/
    function checkNumber() 
		{
	previousAbs = abs;   //storing the old value of abs, when new value entered this abs value is replaced by new abs value from line 24
	var textBox = document.getElementById('listInput');  //makes textbox equal to the input ID
	var val = textBox.value;     //grabs the text box value - input
	var diff = (val-rand);       //finds the difference between the random # and the value entered
	abs = Math.abs(diff);    //creates a positive number for the difference
	console.log("this is the number " +rand); //
	$("#listInput").val("");
	$("#GuessNum").append(val + ",");
	answer.push(val); //this pushes the value entered from the input into the var answer array
		if (abs === 0) 
		{
			$(".closeStatement").fadeIn(100);
			$(".closeStatement").css('-webkit-box-shadow' , '0px 20px 60px #FC1501');
			$("p").replaceWith('<p>WooHoo! You guessed the number correctly</p>');
			$("p").css('color','red');
			$("#totGuess").append(answer.length + " Guesses");
			$(".totalGuesses").show();
			$(".resetButton").show();
		}
		else if (val > rand)    //(abs >= 75 && val > rand) 
		{
			$(".closeStatement").fadeIn(100);
			$("p").replaceWith('<p> You need to Guess Lower</p>');
		}
	// else if (abs >= 50 && abs < 75 && val > rand) 
	// {
	// 	$(".closeStatement").fadeIn(1000);
	// 	$(".closeStatement").css('-webkit-box-shadow' , '0px 20px 50px #7f7fff');
	// 	$("p").replaceWith("<p> need to Guess Lower</p>");
	// 	$("p").css('color','blue');
	// }
	// else if (abs >= 25 && abs < 50  && val > rand) 
	// {
	// 	$(".closeStatement").fadeIn(1000);
	// 	$(".closeStatement").css('-webkit-box-shadow' , '0px 20px 50px #ffa500');
	// 	$("p").replaceWith("<p> but still need to Guess Lower</p>");
	// 	$("p").css('color','#CC3232');
	// }
	// else if (abs >= 10 && abs < 25  && val > rand) 
	// {
	// 	$(".closeStatement").fadeIn(1000);
	// 	$(".closeStatement").css('-webkit-box-shadow' , '0px 20px 50px #ff6666');
	// 	$("p").replaceWith("<p> need to guess lower</p>");
	// 	$("p").css('color','red');
	// }
	// else if (abs >= 5 && abs < 10  && val > rand) 
	// {
	// 	$(".closeStatement").fadeIn(1000);
	// 	$(".closeStatement").css('-webkit-box-shadow' , '0px 20px 50px #ff3232');
	// 	$("p").replaceWith("<p> need to guess a little lower</p>");
	// 	$("p").css('color','red');
	// }
	// else if (abs < 5 && abs > 0 && val > rand) 
	// {
	// 	$(".closeStatement").fadeIn(1000);
	// 	$(".closeStatement").css('-webkit-box-shadow' , '0px 20px 50px #FC1501');
	// 	$("p").replaceWith("<p> need to guess a little lower</p>");
	// 	$("p").css('color','#FC1501');
	// }
	else if (val < rand) //(abs >= 75 && val < rand) 
	{
		$(".closeStatement").fadeIn(100);
		//$(".closeStatement").css('-webkit-box-shadow' , '0px 20px 50px #3232ff');
		$("p").replaceWith("<p> You need to Guess Higher</p>");
		//$("p").css('color','blue');
	}
	// else if (abs >= 50 && abs < 75 && val < rand) 
	// {
	// 	$(".closeStatement").fadeIn(1000);
	// 	$(".closeStatement").css('-webkit-box-shadow' , '0px 20px 50px #7f7fff');
	// 	$("p").replaceWith("<p>need to Guess Higher</p>");
	// 	$("p").css('color', 'blue');
	// }
	// else if (abs >= 25 && abs < 50  && val < rand) 
	// {
	// 	$(".closeStatement").fadeIn(1000);
	// 	$(".closeStatement").css('-webkit-box-shadow' , '0px 20px 50px #ffa500');
	// 	$("p").replaceWith("<p> need to Guess Higher</p>");
	// 	$("p").css('color','#CC3232');
	// }
	// else if (abs >= 10 && abs < 25  && val < rand) 
	// {
	// 	$(".closeStatement").fadeIn(1000);
	// 	$(".closeStatement").css('-webkit-box-shadow' , '0px 20px 50px #ff6666');
	// 	$("p").replaceWith("<p> need to guess Higher</p>");
	// 	$("p").css('color','red');
	// }
	// else if (abs >= 5 && abs < 10  && val < rand) 
	// {
	// 	$(".closeStatement").fadeIn(1000);
	// 	$(".closeStatement").css('-webkit-box-shadow' , '0px 20px 50px #ff3232');
	// 	$("p").replaceWith("<p> need to guess a little Higher</p>");
	// 	$("p").css('color','red');
	// }
	// else if (abs < 5 && abs > 0 && val < rand) 
	// {
	// 	$(".closeStatement").fadeIn(1000);
	// 	$(".closeStatement").css('-webkit-box-shadow' , '0px 20px 50px #FC1501');
	// 	$("p").replaceWith("<p> need to guess a little Higher</p>");
	// 	$("p").css('color','#FC1501');
	// }

	if (previousAbs != null)  //if this is not the first guess do what is inside of it
		{
		if (previousAbs > abs && abs != 0)
		{
		$("p").prepend("Your getting hotter but ");
		$("p").css('color','red');
		$(".closeStatement").css('-webkit-box-shadow' , '0px 20px 60px #FC1501');
		}
		else if (previousAbs < abs)
		{
		$("p").prepend("Your getting colder and ");
		$("p").css('color','blue');
		$(".closeStatement").css('-webkit-box-shadow' , '0px 20px 50px #3232ff');
	 	}
		else if (previousAbs == abs && abs != 0)
		{
		$("p").prepend("Your the same distance from the last guess ");
		}
	}
	};

	//////* This Function starts the game over *////
	$("#pageRefresh").click(function() {
		$(".closeStatement").hide();
		$(".guesses").hide();
		$(".totalGuesses").hide();
		$(".resetButton").hide();
		$("#GuessNum").empty();
		$("#totGuess").empty();
		rand = Math.floor(Math.random() * 100); //
		previousAbs = null; //
		abs = null;  //
 		answer = [];

	});
});