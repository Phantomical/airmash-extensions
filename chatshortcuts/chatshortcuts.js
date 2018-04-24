
(function () {
    var shortcuts = {
        "/shrug": "¯\_(ツ)_/¯",
        "/tableflip": "(╯°□°)╯︵ ┻━┻",
        "/bear": "ʕ •ᴥ•ʔ",
        "/disapproval": "ಠ_ಠ",
        "/lenny": "( ͡° ͜ʖ ͡°)",
        "/guns": "̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿"
    };

    function replaceChat(text) {
        for (var cmd in shortcuts) {
            text = text.split(cmd).join(shortcuts[cmd]);
        }
        return text;
    }

    SWAM.on("gameRunning", function () {
        let oldSendChat = Network.sendChat;
        let oldSendTeam = Network.sendTeam;
        let oldSendSay  = Network.sendSay;
        let oldSendWhisper = Network.sendWhisper;

        Network.sendChat = function(message) {
            oldSendChat(replaceChat(message));
        };

        Network.sendTeam = function(message) {
            oldSendTeam(replaceChat(message));
        };

        Network.sendSay = function(message) {
            oldSendSay(replaceChat(message));
        };

        Network.sendWhisper = function(message) {
            oldSendWhisper(replaceChat(message));
        };
    });

    var obj = {
        name: "Chat Shortcuts",
        id: "steamroller-chatshortcuts",
        description: "Adds some chat shortcuts.",
        version: "0.0.1",
    };

    /* jshint ignore:start */
    obj["author"] = "STEAMROLLER";
    /* jshint ignore:end */

    SWAM.registerExtension(obj);
}());
