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

	if(keyPressed == '72') // add appropriate keycode
	{
		block_x = 0;
		new_image('hp.png')
		console.log("Harry Potter")
	}
	if(keyPressed == '82')
	{
		block_x = 200;
		new_image('ron.png')
		console.log("Ron Weasley")
	}
	
	if(keyPressed == '68')
	{
		block_x =490;
		new_image('dumbledor.png')
		console.log("Professor Dumbledore")
	}
	if(keyPressed == '77')
	{
		block_x = 850;
		new_image('hermoine.png')
		console.log("Hermione Granger")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png')
		console.log("Aman - Blue Ranger")
	}
	
}

