!function () {
    const throttle = require('throttle-debounce/throttle');

    const MAPSAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

    function getLatLonStr(x, y) {
        let lat = -(Players.getMe().pos.y - 2370) * (82.2 / 8192);
        let lon = Players.getMe().pos.x * (180 / 16384);

        return lat.toString().substring(0, 10) + "+" + lon.toString().substring(0, 10);
    }
    function getLocation(x, y) {
        throttle(1000, false, function () {
            let loc = getLatLonStr(lat, lon);
            $.getJSON(MAPSAPI + loc, function (data) {
                UI.addChatLine(Players.getMe().id, data, 2);
            });
        }, false);
    }

    SWAM.on("keyup", function (event) {
        // If j
        if (event.keyCode === 74) {
            let pos = Players.getMe().pos;

            getLocation(pos.x, pos.y);
        }
    });

    SWAM.registerExtension({
        name: "Geolocator",
        id: "Geolocator",
        description: "An extension to tell you where you are.",
        author: "STEAMROLLER",
        version: "0.0.1"
    });

}();