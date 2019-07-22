const button = document.querySelector('#button');
button.addEventListener('click', (e) => {
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
		$(this).css("background-color", "yellow");
	  	}, function(){
	  	$(this).css("background-color", "pink"); 
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
  $(this).css("background-color", "yellow");
  }, function(){
  $(this).css("background-color", "pink"); 
});