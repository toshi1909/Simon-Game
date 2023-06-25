
var gamePattern = [];
// var userSequence = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var buttonColours = ["red", "blue", "green", "yellow"];
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // alert(randomChosenColour);
    return randomChosenColour;
}

function playsound(color){
    $('#'+color).click(function() {
        var audio = new Audio('sounds/'+color+'.mp3');
        audio.play();
    });
}

nextSequence();
// setTimeout(() => {
//     nextSequence();
// }, 1000)

var i=0;
level = 1;
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    //userSequence.push(userChosenColour);
    $('h1').text("Level " + level);
    if(userChosenColour!==gamePattern[i]){
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
        gamePattern=[];
        //nextSequence();
        setTimeout(() => {
            nextSequence();
        }, 1000)
        i=0;
        level=1;
        $('h1').text("New game");
    }
    else{
        var audio = new Audio('sounds/'+userChosenColour+'.mp3');
        audio.play();
        i++;
        if (i === gamePattern.length){
            level++;
            $('h1').text("Level " + level);
            i=0;
            //nextSequence();
            setTimeout(() => {
                nextSequence();
            }, 1000)
        }
    }
})
