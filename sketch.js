var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
    console.log(database);
    var positionref=database.ref('ball/position');
    positionref.on("value",readdata);

}

function draw(){

    background("white");
    if(keyDown(LEFT_ARROW)){
        writedata(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writedata(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writedata(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writedata(0,+1);
    }
    drawSprites();
}

function writedata(x,y){
   database.ref('ball/position').set({
       'x':position.x+x,
       'y':position.y+y
    });
   
}

function readdata(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}
