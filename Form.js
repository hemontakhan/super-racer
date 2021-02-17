class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('RESET');
  }
  hide(){
    this.greeting.hide();
   
    this.title.hide();
  }

  display(){
   
    this.title.html("Super Racing");
    this.title.position(displayWidth/2-50, 0);


    this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2+30, displayHeight/2);
    this.button.style('colour','lavender');

    this.reset.position(200,50);
    this.reset.style('width','100px');
    this.reset.style('height','30px');
    this.reset.style('background','yellow');


    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Namaste  " + player.name)
      this.greeting.position(displayWidth/2-70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      this.reset.hide()
      player.updateCount(0);
      game.update(0);
  })       

  }
}