
function Game(){
	var game={}
     game.arr=["rock","paper","scissor"]
	game.randomChose=this.arr[randomChose()] 
	game.pcScore=0
    // parseInt($(".pc-score").text())
	game.playerScore="6564"
    // parseInt($(".player-score").text())
	game.theScore=round
	return game
}

var game=new Game()
$(".game").on("click",function(e){
    console.log(e.target.id)
    var randomChose=function(){
        return [Math.floor(Math.random()*3)] 
    }
    console.log(randomChose())
    if(e.target.id==="rock"&&game.randomChose()==="rock"){
        alarte("draw")
    $("#player").attr('src', './imgs/rock.png')  
    $("#pc").attr('src', './imgs/rock.png')
      }
     if(e.target.id==="rock"&&game.randomChose()==="paper"){
    $("#player").attr('src', './imgs/rock.png')  
    $("#pc").attr('src', './imgs/paper.png')
    this.pcScore=  this.pcScore+1
    }
    if(e.target.id==="rock"&&game.randomChose()==="scissor"){
        $("#player").attr('src', './imgs/rock.png')  
        $("#pc").attr('src', './imgs/scissor.png')
        this.playerScore=  this.playerScore+1
        }

    if(e.target.id==="paper"&&game.randomChose()==="rock"){
        $("#player").attr('src', './imgs/paper.png')
        $("#pc").attr('src', './imgs/rock.png')
        this.playerScore=  this.playerScore+1
    }
    if(e.target.id==="paper"&&game.randomChose()==="scissor"){
        $("#player").attr('src', './imgs/paper.png')
        $("#pc").attr('src', './imgs/cissors.png')
        this.pcScore=  this.pcScore+1
        }
    if(e.target.id==="paper"&&game.randomChose()==="paper"){
        $("#player").attr('src', './imgs/paper.png')
        $("#pc").attr('src', './imgs/paper.png')
       alert("drow")
        }
        if(e.target.id==="scissor"&&game.randomChose()==="paper"){
            $("#player").attr('src', './imgs/scissor.png')
            $("#pc").attr('src', './imgs/paper.png')
            this.playerScore=  this.playerScore+1
            }
            if(e.target.id==="scissor"&&game.randomChose()==="rock"){
                $("#player").attr('src', './imgs/scissor.png')
                $("#pc").attr('src', './imgs/rock.png')
                this.playerScore=  this.playerScore+1
                }
                if(e.target.id==="scissor"&&game.randomChose()==="scissor"){
                    $("#player").attr('src', './imgs/scissor.png')
                    $("#pc").attr('src', './imgs/scissor.png')
                    alert("drow")
                    }
                    console.log($(".player-score").val(this.playerScore.toString()))
})


// var playerChose=function(){
//     var res=""
  
//     $("#rock").on("click",function(){
//         res="rock" 
//         $("#player").attr('src', './imgs/rock.png')
//     })
//     $("#paper").on("click",function(){
//        res="paper"
//        $("#player").attr('src', './imgs/paper.png')
//     })
//     $("#scissor").on("click",function(){
//        res="scissor"
//        $("#player").attr('src', './imgs/cissors.png')
//     })
//   return res 
// }
// var pcChose=function(){
// var res=""
// if (this.chose===0){
// 	res= "rock"
//     $("#pc").attr('src', './imgs/rock.png')
// }if (this.chose===1){
// 	res= "paper"
//     $("#pc").attr('src', './imgs/paper.png')
// }if (this.chose===2){
// 	res= "scissor"
//     $("#pc").attr('src', './imgs/cissors.png')
// }
// return res
// }
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
    alarte("klnlk")
	return $("#a1").text("the pc score: "+this.pcScore+" and your score is "+this.playerScore)
}













