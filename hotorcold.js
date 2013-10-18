// $(document).ready(function() {
//	var rand = Math.floor(Math.random() * 100);
// 		$('#listInput').onKeydown(function() 
//	{
//	var textBox = document.getElementById('listInput');  //makes textbox equal to the input ID
//	var val = textBox.value;     //grabs the text box value - input
//	var diff = (val-rand);       //finds the difference between the random # and the value entered
//	var abs = Math.abs(diff);    //creates a positive number for the difference
//	console.log("this is the number " +rand); //
//	}
// }
$(document).ready(function() 
{
	$(".closeStatement").hide();
});

var rand = Math.floor(Math.random() * 100); //creates a random # from 1 to 100

//$("#listInput").keypress(function(e) 
	// {
 //    if(e.which == 13) 
 //    {
    function checkNumber() 
	{
	var textBox = document.getElementById('listInput');  //makes textbox equal to the input ID
	var val = textBox.value;     //grabs the text box value - input
	var diff = (val-rand);       //finds the difference between the random # and the value entered
	var abs = Math.abs(diff);    //creates a positive number for the difference
	console.log("this is the number " +rand); //

	if (abs === 0) 
	{
		$(".closeStatement").fadeIn(1000);
		$(".closeStatement").css('-webkit-box-shadow' , '0px 0px 20px #FC1501');
		$("p").replaceWith('<p>WooHoo! You guessed the number correctly</p>');
		$("p").css('color','blue');
	}
	else if (abs >= 75 && val > rand) 
	{
		$(".closeStatement").fadeIn(1000);
		$("p").replaceWith('<p>You are really cold and need to Guess Lower</p>');
		$("p").css('color','blue');
	}
	else if (abs >= 50 && abs < 75 && val > rand) 
	{
		$(".closeStatement").fadeIn(1000);
		$("p").replaceWith("<p>You are cold and need to Guess Lower</p>");
		$("p").css('color','blue');
	}
	else if (abs >= 25 && abs < 50  && val > rand) 
	{
		$(".closeStatement").fadeIn(1000);
		$("p").replaceWith("<p>You are warming up,but still need to Guess Lower</p>");
		$("p").css('color','#CC3232');
	}
	else if (abs >= 10 && abs < 25  && val > rand) 
	{
		$(".closeStatement").fadeIn(1000);
		$("p").replaceWith("<p>You are getting hot and need to guess lower</p>");
		$("p").css('color','red');
	}
	else if (abs >= 5 && abs < 10  && val > rand) 
	{
		$(".closeStatement").fadeIn(1000);
		$("p").replaceWith("<p>You are really hot and need to guess a little lower</p>");
		$("p").css('color','red');
	}
	else if (abs < 5 && abs > 0 && val > rand) 
	{
		$(".closeStatement").fadeIn(1000);
		$("p").replaceWith("<p>You are on Fire and need to guess a little lower</p>");
		$("p").css('color','#FC1501');
	}
	else if (abs >= 75 && val < rand) 
	{
		$(".closeStatement").fadeIn(1000);
		$("p").replaceWith("<p>You are really cold and need to Guess Higher</p>");
		$("p").css('color','blue');
	}
	else if (abs >= 50 && abs < 75 && val < rand) 
	{
		$(".closeStatement").fadeIn(1000);
		$("p").replaceWith("<p>You are cold and need to Guess Higher</p>");
		$("p").css('color', 'blue');
	}
	else if (abs >= 25 && abs < 50  && val < rand) 
	{
		$(".closeStatement").fadeIn(1000);
		$("p").replaceWith("<p>You are warming up, but still need to Guess Higher</p>");
		$("p").css('color','#CC3232');
	}
	else if (abs >= 10 && abs < 25  && val < rand) 
	{
		$(".closeStatement").fadeIn(1000);
		$("p").replaceWith("<p>You are getting hot and need to guess Higher</p>");
		$("p").css('color','red');
	}
	else if (abs >= 5 && abs < 10  && val < rand) 
	{
		$(".closeStatement").fadeIn(1000);
		$("p").replaceWith("<p>You are really hot and need to guess a little Higher</p>");
		$("p").css('color','red');
	}
	else if (abs < 5 && abs > 0 && val < rand) 
	{
		$(".closeStatement").fadeIn(1000);
		$("p").replaceWith("<p>You are on Fire and need to guess a little Higher</p>");
		$("p").css('color','#FC1501');
	}
};
