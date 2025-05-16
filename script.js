document.addEventListener("DOMContentLoaded", () => {
	const dateDiv = document.getElementById("currentDate");
	if (dateDiv) {
		dateDiv.textContent = `Today's date is: ${today.toDateString()}`;
	}

	console.log("Loaded Succuessfully");
});
