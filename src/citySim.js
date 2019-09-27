
var startWebsocket = function () {

    var ws = new WebSocket("ws://localhost:9000/city")

    ws.onopen = function(evt) {
        console.log("OPEN");
        ws.send("just sent some messageeeee")
    }
    ws.onclose = function(evt) {
        console.log("CLOSE");
        ws = null;
    }
    ws.onmessage = function(evt) {
        console.log(`RESPONSE: from ${evt.origin}: ${evt.data}`);
    }
    ws.onerror = function(evt) {
        console.log("ERROR: " + evt.data);
    }
}

export default startWebsocket
