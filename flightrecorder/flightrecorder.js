﻿
!function () {
    var messages = [];
    var am_enabled = false;

    function createSettingsProvider() {
        let sp = new SettingsProvider({ enabled: false }, function (values) {
            am_enabled = values.enabled;

            if (values.enabled === false) {
                messages = []
            }
        });

        let section = sp.addSection("Flight Recorder");

        section.addBoolean(
            "enabled",
            "Whether the flight recorder is recording data.",
            { useToggle: false });

        return sp;
    }

    function displayDownloadLink() {
        var blob = new Blob(messages);
        UI.addChatLine(Players.getMe().id, URL.createObjectURL(blob), 1);
    }

    SWAM.on("extensionsLoaded", function () {
        const WebSocketOld = WebSocket;
        WebSocket = function (url) {
            var ws = new WebSocket(url);

            oldSend = ws.send;
            ws.send = function (msg) {
                if (am_enabled) {
                    messages.push(msg);
                }

                return oldSend(msg);
            }

            return ws;
        };
    });
    
    SWAM.registerExtension({
        name: "Airmash Flight Recorder",
        id: "FlightRecorder",
        description: "An extension to record what the client sees and allow it to be replayed at a later time.",
        author: "STEAMROLLER",
        version: "0.1",
        settingsProvider: createSettingsProvider()
    });
}();
