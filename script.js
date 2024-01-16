let box = document.querySelector(".box");

let turn = 0;
box.addEventListener("click", () => {
	if (turn === 0) {
		turn = 1;
		box.style.animationPlayState = "running";
	} else {
		turn = 0;
		box.style.animationPlayState = "paused";
	}
});
