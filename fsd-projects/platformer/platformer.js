$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(150, 630, 300, 20, "red");
    createPlatform(350, 500, 150, 30, "orange");
    createPlatform(550, 400, 100, 20, "yellow");
    createPlatform(860, 450, 150, 30, "lime");
    createPlatform(1150, 370, 300, 20, "aquamarine");
    createPlatform(750, 280, 150, 30, "violet");




    // TODO 3 - Create Collectables
    createCollectable("database" , 250, 450, 0, 0.7);
    createCollectable("database" , 500, 280, 0, 0);
    createCollectable("database" , 850, 90, 0, 0);
    createCollectable("database" , 1010, 370, 0, 0.5);
    createCollectable("database" , 1310, 200, 0, 0);



    
    // TODO 4 - Create Cannons
    createCannon("top", 500, 800);
    createCannon("right", 750, 1500);
    createCannon("bottom", 700, 1000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
