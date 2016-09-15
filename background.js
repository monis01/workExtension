//@recieveing  message
/*chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
    console.log(response);
    console.log(globaVar);
    if (globFlag) {
        return sendResponse({ temp: globaVar });
    } else {
        startTimer();
    }
});*/


var globFlag = false;
var shouldStart = false;
var globaVar = 0;

function startTimer() {
    if (globFlag) {
        //return globaVar;
    } else {
        shouldStart = true;
        globFlag = true;
        setInterval(function() { globaVar++; }, 1000)
    }
}
