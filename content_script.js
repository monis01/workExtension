$(document).ready(function() {

    var time, x = [];
    if ($('.estimated-hours:last-child').text() != '') {
        time = parseFloat($('.estimated-hours:last-child').text().substr(0, 4));
    }
    var pageInfo = {}


    var x = 1;
    var y = 0;

    /* $('[name="commit"]').each(function() {
         x.push($(this).val());
     })*/

    $('[name="commit"]').click(function() {
        alert($(this).val());
        if ($(this).val() == "Add") {
            //when any new issue is added

        }
        if ($(this).val() == "Pause") {
            //when issue is paused
            console.log("I am paused");
            var port = chrome.runtime.connect({ name: "knockknock" });
            port.postMessage({ joke: "Knock knock" });
            port.onMessage.addListener(function(msg) {
                if (msg.question == "Who's there?")
                    port.postMessage({ answer: "Madame" });
                else if (msg.question == "Madame who?")
                    port.postMessage({ answer: "Madame... Bovary" });
            });

        }
        if ($(this).val() == "Resume") {
            //when issue is resume
            console.log("I am resumed");
        }
        if ($(this).val() == "Resolve to Review") {
            //when issue is Resolved
        }

        if ($(this).val() == "Submit") {

        }
    })
    pageInfo["estimatedTime"] = time;
    pageInfo["author"] = $('.author>a:first-child').text();
    pageInfo["status"] = 'Active';
    pageInfo['startDate'] = $('.start-date:last-child').text();
    pageInfo['startDate'] = $('.due-date:last-child').text();
    pageInfo['priority'] = $('.priority:last-child').text();
    pageInfo["issueName"] = $('.subject>div>h3').text();
    //temporary
    pageInfo["bugNumber"] = $('h2').text();

    // console.log(pageInfo);
    /* while (true) {
         x++;

         if (x == 9000) {
             chrome.runtime.sendMessage({ Message: x})
             y++;
         }
         if(y==20){
             break;
         }
     }*/


})
