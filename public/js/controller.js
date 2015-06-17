$(window).load(function(){
	
	var mouse = new Mouse()
	var view = new View()
	var logic = new Logic()

	logic.spawnBacon()
	logic.animateBacon()
	logic.returnCatDimensions()
	logic.returnBaconDimensions()
	logic.checkCollision()
	logic.destroyOffscreenBacon()
	logic.baconIsInBound()
})