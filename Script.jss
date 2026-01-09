<!DOCTYPE html>
<html>
<head>
    <title>Body Care Companion</title>
</head>
<body>

<h2>🧍 Body Care Companion</h2>
<p>Taking care of our body is important for a healthy life.</p>

<button onclick="bodyCare()">Get Body Care Tips</button>

<p id="output"></p>

<script>
function bodyCare() {
    let name = prompt("Enter your name:");
    let activity = prompt(
        "Choose one option:\n" +
        "1. Exercise\n" +
        "2. Diet\n" +
        "3. Sleep\n" +
        "4. Hygiene"
    ).toLowerCase();

    let tip = "";

    if (activity === "exercise") {
        tip = "Do daily exercise or walking for at least 30 minutes.";
    }
    else if (activity === "diet") {
        tip = "Eat balanced food with fruits, vegetables, and enough water.";
    }
    else if (activity === "sleep") {
        tip = "Sleep 7–8 hours daily for proper body recovery.";
    }
    else if (activity === "hygiene") {
        tip = "Maintain personal hygiene to stay fresh and avoid illness.";
    }
    else {
        tip = "Please select a valid body care option.";
    }

    document.getElementById("output").innerHTML =
        "<b>Name:</b> " + name + "<br>" +
        "<b>Body Care Area:</b> " + activity + "<br>" +
        "<b>Tip:</b> " + tip;
}
</script>

</body>
</html>
