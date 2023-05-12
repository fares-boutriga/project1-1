
//Rock game
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
    imgTag.attr('src', './Rock Paper scissors/imgs/all.png');
    // Append the tags
    parentDiv.append(secondDiv);
    secondDiv.append(div3)
    secondDiv.append(backDiv)
    // backDiv.append(button)
    div3.append(imgTag);
    backDiv.append( "<a href='./Rock Paper scissors/Rock.html'> <button class='button-card'>Get Stard</button></a>")
    // Append the main div to the container div with cladd "card"
    $('.card').append(parentDiv);
  });
  //Xo game
  
  $(document).ready(function() {
    var parentDiv = $('<div class="flip-card" >'); // Create the parent div
    var secondDiv= $('<div class="flip-card-inner">')
    var div3 = $('<div class="flip-card-front">'); // Create the front div
    var backDiv = $('<div class="flip-card-back">'); // Create the back-card div
    // Create the button "get stard"  
    // var button = $('<button class="button-card">');
    // button.text("Get Started")
    // Create the image tag
    var imgTag = $('<img class="img-card"  >');
    imgTag.attr('src', './Xo.png');
    // Append the tags
    parentDiv.append(secondDiv);
    secondDiv.append(div3)
    secondDiv.append(backDiv)
    div3.append(imgTag)
    // backDiv.append(button)
     backDiv.append( "<a href='./XO/XO.html'> <button class='button-card'>Get Stard</button></a>")
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
    imgTag.attr('src', './snac.png');
    // Append the tags
    parentDiv.append(secondDiv);
    secondDiv.append(div3)
    secondDiv.append(backDiv)
    div3.append(imgTag);
    backDiv.append(button)
   
    // Append the main div to the container div with cladd "card"
    $('.card2').append(parentDiv);
  });

  $(".pc-score").on("click",function(){

  }
  )
 