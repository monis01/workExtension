//@ for present all is in content script, have to send to background

$(document).ready(function() {

    var time, x = [];
    var pageInfo = {};
    var allIssues = [];

    //@ estimated time
    if ($('.estimated-hours:last-child').text() != '') {
        time = parseFloat($('.estimated-hours:last-child').text().substr(0, 4));
    }
    //@ other issue related info
    pageInfo["estimatedTime"] = time;
    pageInfo["author"] = $('.author>a:first-child').text();
    pageInfo["status"] = 'Active';
    pageInfo['startDate'] = $('.start-date:last-child').text();
    pageInfo['startDate'] = $('.due-date:last-child').text();
    pageInfo['priority'] = $('.priority:last-child').text();
    pageInfo["issueName"] = $('.subject>div>h3').text();
    //temporary
    pageInfo["bugNumber"] = $('h2').text();

    /* $('[name="commit"]').each(function() {
        x.push($(this).val());
    })*/

    $('[name="commit"]').click(function() {
        alert($(this).val());
        //when any new issue is added
        if ($(this).val() == "Add") {
             //@ checking whether new isse exists (in case of reopening )
            if (allIssues.indexOf(pageInfo["bugNumber"]) != -1) {
                allIssues.push(pageInfo["bugNumber"]);
                chrome.storage.local.set({ "issueList": allIssues }, function() {
                    console.log('New entry in Issue List ');
                })
            }
            //@ new issue created
            var newIssue = new issueTemplate(pageInfo);
        }
        // when issue is paused
        if ($(this).val() == "Pause") {
            console.log("I am paused");
            //@ sample example of message passing
            var port = chrome.runtime.connect({ name: "knockknock" });
            port.postMessage({ joke: "Knock knock" });
            port.onMessage.addListener(function(msg) {
            if (msg.question == "Who's there?")
                port.postMessage({ answer: "Madame" });
            else if (msg.question == "Madame who?")
                port.postMessage({ answer: "Madame... Bovary" });
            });

        }
        
        //@ when issue is resume
        if ($(this).val() == "Resume") {
            console.log("I am resumed");
        }
        //@ when issue is resolved            
        if ($(this).val() == "Resolve to Review") {
        
        }

        if ($(this).val() == "Submit") {

            }
    }

//@ template for issues
function issueTemplate(activeIssue) {
    activeIssue.bugNumber = {
        this.author: activeIssue.author,
        this.status: activeIssue.status,
        this.startDate: activeIssue.startDate,
        this.priority: activeIssue.priority,
        this.issueName: activeIssue.issueName,
        this.estimatedTime: activeIssue.estimatedTime
    }
}

})
