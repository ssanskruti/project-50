class Game{
    constructor(){
        
    }
    getState(){
        database.ref("gameState").on("value",data=>{
          gameState=data.val()
        })
      }
    update(state){
       database.ref("/").update({
         gameState:state
       })
      }
    start(){
        player=new Player()
        playerCount=player.getCount()

        form=new Form();
        form.display()
        
        pokemon1=createSprite(width/2-50,height-100)
        pokemon1.addImage("pokemon1",p1)
        pokemon1.scale=0.6

        pokemon2=createSprite(width/2+100,height-100)
        pokemon2.addImage("pokemon2",p2)
        pokemon2.scale=0.6

        pokemons=[pokemon1,pokemon2]

        stars=new Group()
        fuels=new Group()
        this.addSprites(fuels,4,f,0.02)
        this.addSprites(stars,18,s,0.09)
    }

    handleElements(){
        form.hide()
        form.titleImg.position(40,50)
    }
    addSprites(spriteGroup,numberOfSprites,spriteImage,scale){
      for(var i=0;i<numberOfSprites;i++){
        var x,y
        x=random(width/2+150,width/2-150)
        y=random(-height*4.5,height-200)
        var sprite=createSprite(x,y)
        sprite.addImage(spriteImage)
        sprite.scale=scale
        spriteGroup.add(sprite)
      }
    }
    play(){
        this.handleElements()
        Player.getPlayersInfo()
        if(allPlayers!==undefined){
         image(track,0,-height*5,width,height*6)
         var index=0
         for(var plr in allPlayers){
          var x=allPlayers[plr].positionX
          var y=height-allPlayers[plr].positionY

          pokemons[index-1].position.x=x
          pokemons[index-1].position.y=y 
          index=index+1
         }
         if(keyIsDown(UP_ARROW)){
          player.positionY+=10
          player.update()
         }
         drawSprites()
        }
       
    }
}