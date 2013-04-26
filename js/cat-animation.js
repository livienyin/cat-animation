var img = document.getElementById('kitty');
img.style.position = 'absolute';
img.style.left = '0px';
var docwidth = document.width;
var start = document.getElementById('start');
var faster = document.getElementById('faster');
var slower = document.getElementById('slower');
var stop = document.getElementById('stop');
var timerId;
var speed = 10;

function walkForward(){
  var max = docwidth - img.width;
  if (parseInt(img.style.left, 10) <= max) {
    img.style.left = parseInt(img.style.left, 10) + speed + 'px';
  } else {
    clearInterval(timerId);
    timerId = setInterval(walkBackward, 41.67);
  }
}

function walkBackward(){
  if (parseInt(img.style.left, 10) >= 0) {
    img.style.left = parseInt(img.style.left, 10) - speed + 'px';
  } else {
    clearInterval(timerId);
    timerId = setInterval(walkForward, 41.67);
  }
}

start.onclick = function() { timerId = setInterval(walkForward, 41.67); };
stop.onclick = function() { clearInterval(timerId); };
faster.onclick = function() { speed += 5; };
slower.onclick = function() { speed -= 5; };
