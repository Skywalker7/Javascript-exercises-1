var gotName = false;

while (gotName = false) {
	var userName = prompt("Hey, what's your name?")
    if (confirm("Is " + userName + " your name?") {
      alert("Welcome " + userName + " !");
      gotName = true;
    }
}