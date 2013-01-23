window.onload = function() {
	
	window.addEventListener('keydown',doKeyDown,true); //слушаем нажатие клавиш
	
	var drawingCanvas = document.getElementById('smile');
	context = drawingCanvas.getContext('2d');
     // Рисуем землю
     context.moveTo(0.5,590);
     context.lineTo(890,590);
     context.strokeStyle = "#000";
     context.stroke();
     
     //рисуем игрока
     player = new rect(1,560,10,9);
     player.draw();
         	
     	setInterval(function(){player.draw()}, 16);
    	setInterval(function(){gravity()}, 100 );
    	
}


function rect(x, y, width, height)
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.draw = function()
	{
		
		context.fillRect(this.x, this.y, this.width, this.height);
	}
}

function gravity()
{
	if ( player.y <= 560 )
		{
			context.clearRect(player.x, player.y, 10, 9);
			player.y += 20;
		}

}

function movePlayer(y, z) //передвижение игрока
{
	context.clearRect(player.x + z, player.y, 10, 9); //если от оси Х не отнять (прибавить в случае движения другую сторону) единицу остаются полосы на экране
	player.x = player.x + y;
}

function jumpPlayer()
{
	context.clearRect(player.x, player.y, 10, 9);
	player.y -= 20;
}

function doKeyDown(event)
{
	if(event.keyCode == 39) //вперед
		{
			movePlayer(5, -1);
		}
	else if(event.keyCode == 37) //назад
		{
			movePlayer(-5, +1);
		}
	else if(event.keyCode == 38) //прыжок
		{
			jumpPlayer();
		}
	else if(event.keyCode == 40) //присед
		{
			downPlayer();
		}
	else if( event.keyCode == 39 && event.keyCode == 38 ) //прыжок со смещением вперед
		{
			jumpPlayer();
			movePlayer(5, -1);
		}
	else if( event.keyCode == 37 && event.keyCode == 38 ) //прыжок со смещением назад
	{
		jumpPlayer();
		movePlayer(-5, -1);
	}
}