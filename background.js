//@recieveing  message
/*chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
    console.log(response);

});*/
var time = {
    hours: 0,
    mins: 0,
    sec: 0,
    dn: 'AM'
}
// writing a default timer
function runTimer() {

    var tempTime = new Date();
    time.hours = tempTime.getHours();
    time.mins = tempTime.getMinutes();
    time.sec = tempTime.getSeconds();

    if (time.hours > 12) {
        time.dn = 'PM';
        time.hours = time.hours - 12;
    }

    if (time.hours == 0) {
        time.hours = 12;
    }
    if (time.mins <= 9) {
        time.mins += '0' + time.mins;
    }
    if (time.sec <= 9) {
        time.sec += '0' + time.sec;
    }
    console.log(time);
    setTimeout(function() {
        runTimer();
    }, 1000);
}
runTimer();
