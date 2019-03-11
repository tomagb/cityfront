
var startWebsocket = function () {

    var ws = new WebSocket("ws://localhost:9000/city")

    ws.onopen = function(evt) {
        console.log("OPEN");
    }
    ws.onclose = function(evt) {
        console.log("CLOSE");
        ws = null;
    }
    ws.onmessage = function(evt) {
        console.log("RESPONSE: " + evt.data);
    }
    ws.onerror = function(evt) {
        console.log("ERROR: " + evt.data);
    }
}

export default startWebsocket
