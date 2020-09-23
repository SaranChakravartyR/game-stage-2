class Form{
    constructor(){
        this.enterbutton=createButton("ENTER");
    }

    displayenterbutton(){
        this.enterbutton.position(displayWidth/2 , displayHeight/2+100)
        this.enterbutton.style('width',"200px");
        this.enterbutton.style('height',"50px");
        this.enterbutton.style('font-size',"22px");
        this.enterbutton.style('font-family',"cursive"); 
        
        this.enterbutton.mousePressed(()=>{
                gamestate=1;
        })
    }
}