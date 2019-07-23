const button1 = document.querySelector('#button1');
const highlight = document.querySelector('#highlight');
const button2 = document.querySelector('#button2');
const gridColor = document.querySelector('#gridColor');

var colorPicker1 = new iro.ColorPicker(highlight, {
		color: '#f00'
	});;

var colorPicker2 = new iro.ColorPicker(gridColor, {
		color: '#f00'
	});;

button1.addEventListener('click', (e) => {
	 if(highlight.style.display === "none"){
	 	highlight.style.display = "grid"
	 } else {
	 	highlight.style.display = "none"
	 }
	function onColorChange(color, changes) {
		let pickedColor = color.hexString;
 		$(".div").hover(function(){
  			$(this).css("background-color", pickedColor);
  		}, function(){
  			$(this).css("background-color", pickedColor); 
		});
	}
	// listen to a color picker's color:change event
	colorPicker1.on('color:change', onColorChange);	
})

button2.addEventListener('click', (e) => {
	 if(gridColor.style.display === "none"){
	 	gridColor.style.display = "grid"
	 } else {
	 	gridColor.style.display = "none"
	 }
	 function onColorChange(color, changes) {
	 	let newColor = color.hexString;
	 	$('.div').css('border', '1px solid' + newColor);
	 	$('.container').css('outline', '1px solid' + newColor);
	 }
	 // listen to a color picker's color:change event
	colorPicker2.on('color:change', onColorChange);	
})


const button3 = document.querySelector('#button3');
button3.addEventListener('click', (e) => {
	let answer = prompt('Enter a number between 1 and 100');
	const con = document.querySelector('.container');
	document.querySelector('.container').innerHTML = " ";
	for(let i = 0; i < answer; i++) {
		for(let j = 0; j < answer; j++) {
			let div = document.createElement('div');
			div.classList.add("div");
			con.append(div);
		}
	}
	con.style.gridTemplateColumns = `repeat(${answer}, 1fr)`
	con.style.gridTemplateRows = `repeat(${answer}, 1fr)` 
	$(".div").hover(function(){
		$(this).css("background-color", "#E76C67");
	  	}, function(){
	  	$(this).css("background-color", "#E76C67"); 
	});
})

for(let i = 0; i < 16; i++) {
	for(let j = 0; j < 16; j++) {
		let div = document.createElement('div');
		div.classList.add("div");
		document.querySelector('.container').append(div);
	}
}

$(".div").hover(function(){
  $(this).css("background-color", "#E76C67");
  }, function(){
  $(this).css("background-color", "#E76C67"); 
});
