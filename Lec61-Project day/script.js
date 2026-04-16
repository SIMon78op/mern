const sessionName = document.getElementById("session-name");
const studyDuration = document.getElementById("study-duration");
const breakDuration = document.getElementById("break-duration");
const noOfCycle = document.getElementById("cycles");
const startBtn = document.getElementById("button");

const sessionState = new Map([
	["validname", false],
	["study", false],
	["validbreak", false],
	["cycle", false],
]);


function buttonEnable() {
	if (validname && study && validbreak && cycle) {
		htmlElements.startSessionButton.disabled = false;
	}
}

