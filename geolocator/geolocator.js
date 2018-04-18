(function () {
    const findCountry = require('which-country');
    const countries = require('i18n-iso-countries');

    const lang = "en";

    function getCountryName(countryCode) {
        if (!countryCode)
            return null;

        return countries.getName(countryCode, lang);
    }

    function getLatLonStr(x, y) {
        let lat = -(Players.getMe().pos.y - 2370) * (82.2 / 8192);
        let lon = Players.getMe().pos.x * (180 / 16384);

        return getCountryName(findCountry([lon, lat]));
    }
    function getLocation(x, y) {
        if (x == 0 && y == 0) {
            UI.addChatMessage("You are in space", true);
            return;
        }
        
        let name = getLatLonStr(x, y);
        var message = '';
        if (!!name) {
            message = 'You are in ' + name;
        }
        else {
            message = 'No country found for your current location';
        }

        UI.addChatMessage(message, true);
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
        version: "0.0.12"
    });

})();