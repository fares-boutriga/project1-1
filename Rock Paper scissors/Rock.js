function Game(){
	var game={}
	game.chose=Math.floor(Math.random()*2),
	game.pcScore=0,
	game.playerScore=0
	game.theScore=round
	return game
}
var playerChose=function{
    var id="gfs"
  
    $("#rock").on("click",function(event){
        id =event.target.id
        return id 
    })
    $("#paper").on("click",function(event){
        id =event.target.id
        return id 
    })
    $("#cissors").on("click",function(event){
        id =event.target.id
        return id 
    })
  
}


var pcChose=function(){

if (chose===0){
	return "rock"
}if (chose===1){
	return "rock"
}if (chose===2){
	return "scissor"
}

}


var round= function(){
	if(pcChose()===playerChose()){
		alarte("Draw")
	}
	if (pcChose()==="rock" && playerChose()==="scissor"){
		this.pcScore++
	}else{
		this.playerScore++
	}if (pcChose()==="rock" && playerChose()==="paper") {
		this.playerScore++
	}else{
		this.pcScore++
	}if (pcChose()==="paper" && playerChose()==="scissor") {
		this.playerScore++
	}else{
		this.pcScore++
	}
	console.log("the pc score: "+this.pcScore+" and your score is "+this.playerScore)
}
