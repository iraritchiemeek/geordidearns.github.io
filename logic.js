function start(){
// get a refrence to the canvas and its context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// newly spawned objects start at Y=25
var spawnLineY = -1;

// spawn a new object every 1500ms
var spawnRate = 300;

// set how fast the objects will fall
var spawnRateOfDescent = 5;

// when was the last object spawned
var lastSpawn = -1;

// this array holds all spawned object
var objects = [];

// save the starting time (used to calc elapsed time)
var startTime = Date.now();

var img1 = new Image();
img1.src = "http://icons.iconarchive.com/icons/etherbrian/bit-eat/32/Bacon-icon.png";


// Our images array
var images = [img1];

// start animating
// window.onload=function(){
animate();
// };


function spawnRandomObject() {

    // select a random type for this new object
    var t;


    // create the new object
    var object = {
        // set this objects type
        type: t,
        // set x randomly but at least 15px off the canvas edges
        x: Math.random() * (canvas.width - 30) + 15,
        // set y to start on the line where objects are spawned
        y: spawnLineY,
        // give random image
        image: images[Math.floor(Math.random()*images.length)]
    };
    // add the new object to the objects[] array
    objects.push(object);
}




function animate() {


    // get the elapsed time
    var time = Date.now();

    // see if its time to spawn a new object
    if (time > (lastSpawn + spawnRate)) {
        lastSpawn = time;
        spawnRandomObject();
    }

    // request another animation frame
    requestAnimationFrame(animate);

    // clear the canvas so all objects can be
    // redrawn in new positions
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw the line where new objects are spawned
    ctx.beginPath();
    ctx.moveTo(0, spawnLineY);
    ctx.lineTo(canvas.width, spawnLineY);
    ctx.stroke();

    // move each object down the canvas
    for (var i = 0; i < objects.length; i++) {
        destroyBacon(objects, i)
        var object = objects[i];
        object.y += spawnRateOfDescent;
        if(baconIsInBound(object)){
            checkCollision(object);
        }
        if (i === 0){
            checkCollision(object);
        }
        ctx.drawImage(object.image, object.x, object.y, 30, 30);
    }

}

function returnCatPosition (){
    var top = Math.round($('.follower').offset().top);
    var left = Math.round($('.follower').offset().left);
    var right = Math.round(left + 50);
    var down = Math.round(top + 80) ;
    var centerX = Math.round((left + right) / 2);

    return [top,right, down,left, centerX];
}

// $(follower).offset().left < (x + 10) && $(follower).offset().left > (x - 10)


function baconBound(bacon){
    var top =  bacon.y;
    var left = Math.round(bacon.x);
    var right = Math.round(bacon.x + 32);
    var down = bacon.y + 32 ;
    var centerX = Math.round((left + right) / 2);
    return [top,right, down,left, centerX];
};


function checkCollision(bacon){
    var cat = returnCatPosition();
    var bacon = baconBound(bacon);
    // check left and right
    if ( (bacon[3] > cat[3] && bacon[3] < cat[1])  ||  (bacon[1] > cat[3] && bacon[1] < cat[1])   ) {
        //check top and bottom
        if ( (bacon[2] < cat[2] && bacon[2] > cat[0]) || (bacon[0] < cat[2] && bacon[0] > cat[0])   ) {
             location.reload();
        }
    } 

};

function destroyBacon(bacons, index){
    if(bacons[index].y > 585){
        bacons.splice(index,1);
    }
};

function baconIsInBound(bacon){
    var bacon = baconBound(bacon);
    var cat = returnCatPosition();
    if( (cat[3] - 20) < bacon[4] ||  (cat[1] + 20) > bacon[4]){
        return true;
    }else{
        return false;
    }

};

};




// && bacon.y - 50 < cat[1] && bacon.x > cat[0] + 50 &&  bacon.y > cat[1] + 80








