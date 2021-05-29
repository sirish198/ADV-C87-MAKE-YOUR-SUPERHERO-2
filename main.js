var canvas = new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
player_image_width=30;
player_image_height=30;
var player_object="";
function player_update() 
{ fabric.Image.fromURL("player.png", function(Img) 
{ player_object = Img; 
    player_object.scaleToWidth(150); 
    player_object.scaleToHeight(140); 
    player_object.set({ top:player_y, left:player_x });
 canvas.add(player_object);
 });}

 function new_image(get_image) 
 { fabric.Image.fromURL(get_image, function(Img) 
    {player_image_object = Img; 
      player_image_object.scaleToWidth(player_image_width); 
      player_image_object.scaleToHeight(player_image_height); 
      player_image_object.set({ top:player_y, left:player_x });
  canvas.add(player_image_object);})}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
  keyPressed=e.keyCode;
  console.log(keyPressed);
  if(e.shiftKey=true && keyPressed=="80")
  {
    console.log("p and Shift pressed together");
   player_image_width=block_image_width+10;
   player_image_height=block_image_height+10;
  document.getElementById("current_width").innerHTML=player_image_width;
  document.getElementById("current_height").innerHTML=player_image_height;
  }
  if(e.shiftKey=true && keyPressed=="77")
  {
    console.log("m and Shift pressed together");
    player_image_width=player_image_width-10;
    player_image_height=player_image_height-10;
  document.getElementById("current_width").innerHTML=player_image_width;
  document.getElementById("current_height").innerHTML=player_image_height;
  }


      if (keyPressed=="70"){
        new_image("ironman_face(1).png");
        console.log("f");
        };
        if (keyPressed=="82"){
          new_image("thor_right_hand(1).png");
          console.log("r");
          };
          if (keyPressed=="76"){
            new_image("hulk_legs.png");
            console.log("l");
            };
            if (keyPressed=="72"){
              new_image("captain_america_left_hand");
              console.log("h");
              };
              if(keyPressed == '66') 
              { new_image("spiderman_body(1).png");
               console.log("b"); }

               if(keyPressed == "71") 
               { new_image("groot.png"); 
               console.log("g"); }
              
               function up() {
                if (player_y >= 0) {
                    player_y = player_y - block_image_height;
                    console.log("block image height = " + block_image_height);
                    console.log("When Up arrow key is pressed, X = " + player_x + " , Y = " + player_y);
                    canvas.remove(player_object);
                    player_update();
                }
            }
            
            function down() {
                if (player_y <= 500) {
                    player_y = player_y + block_image_height;
                    console.log("block image height = " + block_image_height);
                    console.log("When Down arrow key is pressed, X = " + player_x + " , Y = " + player_y);
                    canvas.remove(player_object);
                    player_update();
                }
            }
            
            function left() {
                if (player_x > 0) {
                    player_x = player_x - block_image_width;
                    console.log("block image width = " + block_image_width);
                    console.log("When Left arrow key is pressed, X = " + player_x + " , Y = " + player_y);
                    canvas.remove(player_object);
                    player_update();
                }
            }
            
            function right() {
                if (player_x <= 850) {
                    player_x = player_x + block_image_width;
                    console.log("block image width = " + block_image_width);
                    console.log("When Right arrow key is pressed, X = " + player_x + " , Y = " + player_y);
                    canvas.remove(player_object);
                    player_update();
                }
            }
            }
            
