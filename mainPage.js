
//XO game
$(document).ready(function() {
    var parentDiv = $('<div class="flip-card" >'); // Create the parent div
    var secondDiv= $('<div class="flip-card-inner">')//create the inner side of the card
    var div3 = $('<div class="flip-card-front">'); // Create the front div
    var backDiv = $('<div class="flip-card-back">'); // Create the back-card div
     // Create the button "get stard"  
    var button = $('<button class="button-card">');
    button.text("Get Started")
    // Create the image tag
    var imgTag = $('<img class="img-card"  >');
    imgTag.attr('src', './photo.png');
    // Append the tags
    parentDiv.append(secondDiv);
    secondDiv.append(div3)
    secondDiv.append(backDiv)
    backDiv.append(button)
    div3.append(imgTag);

    // Append the main div to the container div with cladd "card"
    $('.card').append(parentDiv);
  });
  //Rock game
  
  $(document).ready(function() {
    var parentDiv = $('<div class="flip-card" >'); // Create the parent div
    var secondDiv= $('<div class="flip-card-inner">')
    var div3 = $('<div class="flip-card-front">'); // Create the front div
    var backDiv = $('<div class="flip-card-back">'); // Create the back-card div
    // Create the button "get stard"  
    var button = $('<button class="button-card">');
    button.text("Get Started")
    // Create the image tag
    var imgTag = $('<img class="img-card"  >');
    imgTag.attr('src', 'https://images.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png');
    // Append the tags
    parentDiv.append(secondDiv);
    secondDiv.append(div3)
    secondDiv.append(backDiv)
    div3.append(imgTag)
    backDiv.append(button)

    // Append the main div to the container div with cladd "card"
    $('.card').append(parentDiv);
  });

//game thre
$(document).ready(function() {
    var parentDiv = $('<div class="flip-card" >'); // Create the parent div
    var secondDiv= $('<div class="flip-card-inner">')
    var div3 = $('<div class="flip-card-front">'); // Create the front div
    var backDiv = $('<div class="flip-card-back">'); // Create the back-card div
    // Create the button "get stard"  
    var button = $('<button class="button-card">');
    button.text("Get Started")
    // Create the image tag
    var imgTag = $('<img class="img-card"  >');
    imgTag.attr('src', './photo.png');
    // Append the tags
    parentDiv.append(secondDiv);
    secondDiv.append(div3)
    secondDiv.append(backDiv)
    div3.append(imgTag);
    backDiv.append(button)

    // Append the main div to the container div with cladd "card"
    $('.card2').append(parentDiv);
  });







//function Xo(plyaer1,player2){
// // 	var game={}
// // 	game.p1Chose=plyaer1,
// // 	game.p2Chose=player2,
// // 	game.case1=0
// // 	game.case2=0
// // 	game.case3=0
// // 	game.case4=0
// // 	game.case5=0
// // 	game.case6=0
// // 	game.case7=0
// // 	game.case8=0
// // 	game.case9=0
// // 	game.result=res
// // 	return game
// // }

// // var res=function(){
// // if (this.case1===plyaer1&&)
// // }function Xo(plyaer1,player2){
// // 	var game={}
// // 	game.p1Chose=plyaer1,
// // 	game.p2Chose=player2,
// // 	game.case1=0
// // 	game.case2=0
// // 	game.case3=0
// // 	game.case4=0
// // 	game.case5=0
// // 	game.case6=0
// // 	game.case7=0
// // 	game.case8=0
// // 	game.case9=0
// // 	game.result=res
// // 	return game
// // }

// // var res=function(){
// // if ( this.case1===plyaer1&& this.case2===plyaer1&& this.case3===plyaer1)
// // }   