$(document).ready(function() {

    var Chrono = function(currentTime) {
        this.time = currentTime;
        this.start = function() {
            start();
        }
        this.pause = function() {
            pause();
        }
        this.stop = function() {
            stop();
        }
    }

    var chronometre = new Chrono(-1);
    var compteur;

    $("#start").click(function() {
        compteur = setInterval(start, 1000);
        start();
    });

    $("#pause").click(function() {
        pause();
    });

    $("#stop").click(function() {
        stop();
    });

    $("#reset").click(function() {
        reset();
    });


    function start() {
        chronometre.time += 1;
        var heure = Math.floor(chronometre.time / 3600);
        var minute = Math.floor((chronometre.time - heure * 3600) / 60);
        var seconde = chronometre.time - (heure * 3600 + minute * 60);
        if (heure < 10) {
            heure = "0" + heure;
        } else {
            heure = heure;
        }
        if (minute < 10) {
            minute = "0" + minute;
        } else {
            minute = minute;
        }
        if (seconde < 10) {
            seconde = "0" + seconde;
        } else {
            seconde = seconde;
        }
        $(".timer").html(heure + ":" + minute + ":" + seconde);

    }

    function pause() {
        clearInterval(compteur);
    }

    function stop() {
        clearInterval(compteur);
        chronometre.time = -1;
    }

    function reset() {
        chronometre.time = -1;
        $(".timer").html("00:00:00");
    }

});