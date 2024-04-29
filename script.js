async function shortenURL() {
    var urlInput = document.getElementById("urlInput").value;

    if (!urlInput) {
        alert("Please enter a URL");
        return;
    }

    try {
        var response = await fetch('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(urlInput));
        var shortenedURL = await response.text();

        document.getElementById("shortenedURL").innerHTML = shortenedURL;
        document.getElementById("shortenedURL").href = shortenedURL;
        document.getElementById("result").style.display = "";
    } catch (error) {
        console.error('Error shortening URL:', error);
    }
}

function copyToClipboard() {
    var copyText = document.getElementById("shortenedURL");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.href;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    document.body.removeChild(textArea);
    alert("Copied to clipboard!");
}

function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Result: " + (num1 + num2);
}

function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Result: " + (num1 - num2);
}

function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Result: " + (num1 * num2);
}

function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        document.getElementById("result").innerText = "Result: " + (num1 / num2);
    } else {
        document.getElementById("result").innerText = "Cannot divide by zero!";
    }
}