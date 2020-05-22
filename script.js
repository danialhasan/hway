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
    if (y == 1) {
        document.getElementById("overlay").style.display = "block";
        y = 0;
    } else {
        document.getElementById("overlay").style.display = "none";
        y = 1;
    }
}

function calculateZoomWidth() {
    var widths = [
            2650,
            1920,
            1600,
            1440
        ];
    var zoomLevels = [
            1.1,
            1.25,
            1.5
        ];


    for (var i = 0; i <= widths.length - 1; i++) {
        for (j = 0; j <= zoomLevels.length - 1; j++) {

            var z = widths[i] / zoomLevels[j]; //final result

            console.log(+widths[i] + 'px, zoom ' + zoomLevels[j] + '  = width of ' + z + 'px');


        }
        j = 0;
        console.log(" ");
        //        console.log(widths[i] + 'px at ' + y + ' zoom is equal to a width of ' + z);
        //        console.log("something");
    }


    console.log("Working!")
}
