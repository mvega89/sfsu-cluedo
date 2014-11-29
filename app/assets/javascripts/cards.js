$(document).ready(function(){

  $("#murderButton").click(function(){
    for(var i=0;i<murderCards.length;i++){
    $("#murder").append(
      '<img class = "images" src=' + murderCards[i] + ' alt="br" width="100" height="167" border = "5 px" border-radius= "15px" > ');
    }

    $("#murder").css("visibility", "visible");
  });

  $("#player1btn").click(function(){
    for(var i=0;i< 5 ;i++){
    $("#player").append(
      '<img class = "images" src=' + player1[i] + ' alt="br" width="100" height="167" border = "5 px" border-radius= "15px" > ');
    }

    $("#player1btn").css("visibility", "collapse");
    $("#player2btn").css("visibility", "collapse");
    $("#player3btn").css("visibility", "collapse");
    $("#murderButton").css("visibility", "visible");


    $("#choosePlayer").css("visibility", "collapse");
    $("#player1").css("visibility", "visible");
    $("#community").css("visibility", "visible");
    $("#notes").css("visibility", "visible");

    $("#weapons").css("visibility", "visible");
    $("#suspects").css("visibility", "visible");
    $("#rooms").css("visibility", "visible");
    $("#notepad").css("visibility", "visible");
    $("#diceRoll").css("visibility", "visible");
    $("#murderTitle").css("visibility", "visible");
    $("#publicChat").css("visibility", "visible");
    $("#privateChat").css("visibility", "visible");


    for(var i=0;i<communityCards.length;i++){
      $("#communityCards").append(
        '<img class = "images" src=' + communityCards[i] + ' alt="br" width="100" height="167" border = "5 px" > ');
      }

  });

  $("#player2btn").click(function(){
    for(var i=0;i<player2.length;i++){
    $("#player").append(
      '<img class = "images" src=' + player2[i] + ' alt="br" width="100" height="167" border = "5 px" > ');
    }

    $("#player1btn").css("visibility", "collapse");
    $("#player2btn").css("visibility", "collapse");
    $("#player3btn").css("visibility", "collapse");
    $("#murderButton").css("visibility", "visible");

    $("#choosePlayer").css("visibility", "collapse");
    $("#player2").css("visibility", "visible");
    $("#community").css("visibility", "visible");
    $("#notes").css("visibility", "visible");

    $("#weapons").css("visibility", "visible");
    $("#suspects").css("visibility", "visible");
    $("#rooms").css("visibility", "visible");
    $("#notepad").css("visibility", "visible");
    $("#diceRoll").css("visibility", "visible");
    $("#murderTitle").css("visibility", "visible");
    $("#publicChat").css("visibility", "visible");
    $("#privateChat").css("visibility", "visible");


    for(var i=0;i<communityCards.length;i++){
      $("#communityCards").append(
        '<img class = "images" src=' + communityCards[i] + ' alt="br" width="100" height="167" border = "5 px" > ');
      }

  });

  $("#player3btn").click(function(){
    for(var i=0;i<player3.length;i++){
    $("#player").append(
      '<img class = "images" src=' + player3[i] + ' alt="br" width="100" height="167" border = "5 px" > ');
    }

    $("#player1btn").css("visibility", "collapse");
    $("#player2btn").css("visibility", "collapse");
    $("#player3btn").css("visibility", "collapse");
    $("#murderButton").css("visibility", "visible");

    $("#choosePlayer").css("visibility", "collapse");
    $("#player3").css("visibility", "visible");
    $("#community").css("visibility", "visible");
    $("#notes").css("visibility", "visible");

    $("#weapons").css("visibility", "visible");
    $("#suspects").css("visibility", "visible");
    $("#rooms").css("visibility", "visible");
    $("#notepad").css("visibility", "visible");
    $("#diceRoll").css("visibility", "visible");
    $("#murderTitle").css("visibility", "visible");
    $("#publicChat").css("visibility", "visible");
    $("#privateChat").css("visibility", "visible");


    for(var i=0;i<communityCards.length;i++){
      $("#communityCards").append(
        '<img class = "images" src=' + communityCards[i] + ' alt="br" width="100" height="167" border = "5 px" > ');
      }

  });

  

});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  //return array;
}

function passCards(array1,array2){
  for(i = 0 ;  i <= 4; i++){
  array1[i] = array2.pop();
  } 
}



var roomCards = ["http://i100.photobucket.com/albums/m10/mvega89/1billiard_zpsf3fb29e7.png",
                 "http://i100.photobucket.com/albums/m10/mvega89/2ballrom_zps77e7833f.png",
                 "http://i100.photobucket.com/albums/m10/mvega89/3kitchen_zps01d352bf.png",
                 "http://i100.photobucket.com/albums/m10/mvega89/4hall_zps301e6933.png",
                 "http://i100.photobucket.com/albums/m10/mvega89/5study_zpsbeeaa345.png",
                 "http://i100.photobucket.com/albums/m10/mvega89/6lounge_zps32c933b3.png",
                 "http://i100.photobucket.com/albums/m10/mvega89/7diningroom_zpse2b2995f.png",
                 "http://i100.photobucket.com/albums/m10/mvega89/8conservatory_zps612e246c.png",
                 "http://i100.photobucket.com/albums/m10/mvega89/9library_zps1a8a1145.png"];

var weaponCards = ["http://i100.photobucket.com/albums/m10/mvega89/10wrench_zpsc0a9cccf.png",
                   "http://i100.photobucket.com/albums/m10/mvega89/11candlestick_zpsfa7c05ad.png",
                   "http://i100.photobucket.com/albums/m10/mvega89/12leadpipe_zpse22a8d42.png",
                   "http://i100.photobucket.com/albums/m10/mvega89/13rope_zps336e0e67.png",
                   "http://i100.photobucket.com/albums/m10/mvega89/14revolver_zpse4c2f33b.png",
                   "http://i100.photobucket.com/albums/m10/mvega89/15knife_zpscb144e53.png"];

var suspectCards = ["http://i100.photobucket.com/albums/m10/mvega89/16scarlet_zps7492641f.png",
                    "http://i100.photobucket.com/albums/m10/mvega89/17white_zpsb3c9c118.png",
                    "http://i100.photobucket.com/albums/m10/mvega89/18peacock_zps3dd02724.png",
                    "http://i100.photobucket.com/albums/m10/mvega89/19mustard_zps21e3e123.png",
                    "http://i100.photobucket.com/albums/m10/mvega89/20plum_zps6e3ec9b1.png",
                    "http://i100.photobucket.com/albums/m10/mvega89/21green_zps0d1f4de8.png"];
var player1 = [];
var player2 = [];
var player3 = [];

shuffle(roomCards);
shuffle(weaponCards);
shuffle(suspectCards);

//create murder

var murderCards = [roomCards.pop(),weaponCards.pop(),suspectCards.pop()];

//create community cards
var tempShuffle = roomCards.concat(weaponCards);
var tempShuffle = tempShuffle.concat(suspectCards);
shuffle(tempShuffle);
var communityCards = [tempShuffle.pop(),tempShuffle.pop(),tempShuffle.pop()];

//pass out player cards 

var playerCards = tempShuffle;

shuffle(playerCards);


passCards(player1,playerCards);
passCards(player2,playerCards);
passCards(player3,playerCards);

