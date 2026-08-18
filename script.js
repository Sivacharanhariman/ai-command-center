const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const clearButton = document.getElementById("clear-button");

const responseText = document.getElementById("response-text");
const responseStatus = document.getElementById("response-status");
const characterCount = document.getElementById("character-count");


function updateCharacterCount() {

    const currentLength = userInput.value.length;

    characterCount.textContent = `${currentLength} / 1000`;
}


function sendCommand() {

    const message = userInput.value.trim();

    if (message === "") {

        responseStatus.textContent = "Input Required";

        responseText.textContent =
            "Please enter a command before pressing Send.";

        return;
    }


    responseStatus.textContent = "Processing...";

    responseText.textContent =
        "Processing command...";


    /*
        Temporary frontend simulation.

        Later this section will be replaced
        with a real HTTP request to our
        FastAPI backend.
    */

    setTimeout(() => {

        responseStatus.textContent = "Completed";

        responseText.textContent =
            `Command received:\n\n"${message}"\n\n` +
            `The frontend is working correctly.\n` +
            `Backend integration is coming next.`;

    }, 500);
}


function clearCommand() {

    userInput.value = "";

    responseText.textContent =
        "Waiting for your command...";

    responseStatus.textContent =
        "Ready";

    updateCharacterCount();

    userInput.focus();
}


/* Character counter */

userInput.addEventListener(
    "input",
    updateCharacterCount
);


/* Send button */

sendButton.addEventListener(
    "click",
    sendCommand
);


/* Clear button */

clearButton.addEventListener(
    "click",
    clearCommand
);


/*
    Keyboard shortcut:

    Ctrl + Enter
    or
    Command + Enter
*/

userInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" &&
            (event.ctrlKey || event.metaKey)
        ) {

            sendCommand();

        }
    }
);


updateCharacterCount();