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