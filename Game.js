class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    racer1 = createSprite(10,200);
    racer1.addImage(rac1Img);
    racer1.scale = 0.2;
    racer2 = createSprite(10,300);
    racer2.addImage(rac2Img);
    racer2.scale = 0.2
    racers =[racer1,racer2];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();

    if(allracers !== undefined){
      background(204,67,255);
      var index = 0;
      var x 
      var y =0
    
      for(var plr in allracers){
          index = index+1;
          x = displayHeight-allracers[plr].distance;
          y = y+200
          racers[index -1].x = x
          racers[index -1].y = y
        if (index===player.index){
            racers[index -1].shapeColor = "red";
            camera.position.x = racers[index-1].x
            camera.position.y = displayWidth/2
        }
        
      
      }
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=5
      player.update();
    }

    drawSprites();
  }
}
