!function () {
    //const throttle = require('throttle-debounce/throttle');

    const MAPSAPI = "https://secure.geonames.org/countrySubdivisionJSON?username=geolocatorairmash&maxRows=1&";

    function getLatLonStr(x, y) {
        let lat = -(Players.getMe().pos.y - 2370) * (82.2 / 8192);
        let lon = Players.getMe().pos.x * (180 / 16384);

        return 'lat=' + lat.toString().substring(0, 10) +
            "&lng=" + lon.toString().substring(0, 10);
    }
    function getLocation(x, y) {
        // throttle(1000, false, function () {
        let loc = getLatLonStr(x, y);
        $.getJSON(MAPSAPI + loc, function (data) {

            console.log(data);
            let response = JSON.parse(data);

            let message = '';

            if (!!response.countryName) {
                message = 'You are in ' + response.countryName;
            }
            else {
                message = 'No country found for your current location';
            }

            UI.addChatLine(Players.getMe().id, message, 2);
        });
        //}, false);
    }

    SWAM.on("keyup", function (event) {
        // If j
        if (event.keyCode === 74) {
            let pos = Players.getMe().pos;

            console.log(pos);

            getLocation(pos.x, pos.y);
        }
    });

    SWAM.registerExtension({
        name: "Geolocator",
        id: "Geolocator",
        description: "An extension to tell you where you are.",
        author: "STEAMROLLER",
        version: "0.0.8"
    });

}();