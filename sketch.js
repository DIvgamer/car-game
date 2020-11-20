var ball;
var db,position
function setup(){
db = firebase.database();

    createCanvas(500,500);

    

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition=db.ref("ball/position")
    ballPosition.on("value",readPosition,showErorr)

}

function draw(){
   
    background("white");
    if(position!==undefined){


    
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}
function writePosition(x,y){
   
    db.ref("ball/position").set({
        x:position.x+x,
        
        y:position.y+y});
   
   
    
}
 
function readPosition(data){
position = data.val();
ball.x=position.x;
ball.y=position.y;




}
function showErorr(){
console.log("showErorr")

}