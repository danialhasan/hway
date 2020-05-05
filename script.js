function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " responsive";


    } else {
        x.className = "nav";

    }
}
var y = 1;

function overlay() {
    if (y = 1) {
        document.getElementById("overlay").style.display = "block";
        y === 0;
    } else {
        document.getElementById("overlay").style.display = "none";
        y === 1;
    }
}
