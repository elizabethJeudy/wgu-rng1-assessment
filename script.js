document.addEventListener("DOMContentLoaded", () => {
	const dateDiv = document.getElementById("currentDate");
	const today = new Date();

	if (dateDiv) {
		dateDiv.textContent = `Today's date is: ${today.toDateString()}`;
	}

	console.log("Loaded Successfully");
});

function playSound() {
	const sound = document.getElementById("woosh-sound");
	sound.currentTime = 0;
	sound.play();
}
