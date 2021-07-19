var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function (img){
        block_image_object = img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block_image_object);
    })
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '73') // add appropriate keycode
	{
		block_x = 0;
		new_image('im.png')
		console.log("Iron Man")
	}
	if(keyPressed == '84')
	{
		block_x = 200;
		new_image('thanos.png')
		console.log("Thor")
	}
	
	if(keyPressed == '72')
	{
		block_x =480;
		new_image('hulk.png')
		console.log("Hulk")
	}
	if(keyPressed == '67')
	{
		block_x = 850;
		new_image('ca.png')
		console.log("Captain America")
	}
	if(keyPressed == '76')
	{
		block_x = 690;
		new_image('loki.png')
		console.log("Loki")
	}
	
}

