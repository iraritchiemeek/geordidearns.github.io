function Logic (argument) {
	this.canvas = document.getElementById("canvas");
	this.ctx = canvas.getContext("2d");

	// newly spawned this.objects start at Y=25
	this.spawnLineY = -1;

	// spawn a new object every 1500ms
	this.spawnRate = 300;

	// set how fast the this.objects will fall
	this.spawnRateOfDescent = 5;

	// when was the last object spawned
	this.lastSpawn = -1;

	// this array holds all spawned object
	this.objects = [];

	// save the starting this.time (used to calc elapsed this.time)
	this.startTime = Date.now();

	this.img1 = new Image();
	this.img1.src = "http://icons.iconarchive.com/icons/etherbrian/bit-eat/32/Bacon-icon.png";

	// Our images array
	this.images = [this.img1];
}

Logic.prototype.spawnBacon = function() {
	this.t;

    // create the new object
    this.object = {
        // set this this.objects type
        type: this.placeholder,
        // set x randomly but at least 15px off the canvas edges
        x: Math.random() * (canvas.width - 30) + 15,
        // set y to start on the line where this.objects are spawned
        y: this.spawnLineY,
        // give random image
        image: this.images[Math.floor(Math.random()*this.images.length)]
    };
    // add the new object to the this.objects[] array
    this.objects.push(this.object);
};

Logic.prototype.animateBacon = function() {
	
    // get the elapsed this.time
    this.time = Date.now();

    // see if its this.time to spawn a new object
    if (this.time > (this.lastSpawn + this.spawnRate)) {
        this.lastSpawn = this.time;
        this.spawnBacon();
    }

    // request another animation frame
    animate()
    function animate() {
    	requestAnimationFrame(animate);
    }

    // clear the canvas so all this.objects can be
    // redrawn in new positions
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw the line where new this.objects are spawned
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.spawnLineY);
    this.ctx.lineTo(canvas.width, this.spawnLineY);
    this.ctx.stroke();

    // move each object down the canvas
    for (this.i = 0; i < this.objects.length; i++) {
        destroyBacon(this.objects, i)
        this.object = this.objects[i];
        object.y += this.spawnRateOfDescent;
        if(baconIsInBound(object)){
            checkCollision(object);
        }
        if (i === 0){
            checkCollision(object);
        }
        this.ctx.drawImage(object.image, object.x, object.y, 30, 30);
    }	
}

Logic.prototype.returnCatDimensions = function() {
	this.top = Math.round($('.follower').offset().top);
    this.left = Math.round($('.follower').offset().left);
    this.right = Math.round(left + 50);
    this.down = Math.round(top + 80) ;
    this.centerX = Math.round((left + right) / 2);

    return [top,right, down,left, centerX];
};

Logic.prototype.returnBaconDimensions = function(bacon) {
	this.top =  bacon.y;
    this.left = Math.round(bacon.x);
    this.right = Math.round(bacon.x + 32);
    this.down = bacon.y + 32 ;
    this.centerX = Math.round((left + right) / 2);
    return [top,right, down,left, centerX];
};

Logic.prototype.checkCollision = function(bacon) {
	this.cat = returnCatPosition();
    this.bacon = baconBound(bacon);
    // check left and right
    if ( (bacon[3] > cat[3] && bacon[3] < cat[1])  ||  (bacon[1] > cat[3] && bacon[1] < cat[1]) ) {
        //check top and bottom
        if ( (bacon[2] < cat[2] && bacon[2] > cat[0]) || (bacon[0] < cat[2] && bacon[0] > cat[0]) ) {
             alert('Game ended');
        }
    } 
};

Logic.prototype.destroyOffscreenBacon = function(bacon, index) {
	if(bacons[index].y > 585){
        bacons.splice(index,1);
    }
};

Logic.prototype.baconIsInBound = function(bacon) {
	this.bacon = baconBound(bacon);
    this.cat = returnCatPosition();
    if( (cat[3] - 20) < bacon[4] ||  (cat[1] + 20) > bacon[4]){
        return true;
    } else {
        return false;
    }
};






