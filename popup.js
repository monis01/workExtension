//on-document ready
$(document).ready(function() {
    var storageValue;

    //@ message passing
    /*chrome.runtime.sendMessage("Hello world", function(response) {
        alert(response.temp);
    });*/



    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        console.log(tabs[0].url);

        chrome.storage.local.get("temp", function(val) {
            storageValue = val.temp;
            if (storageValue) {
                $('#awesomeCheckbox').prop('checked', true);
            } else {
                $('#awesomeCheckbox').prop('checked', false);

            }
        })

        //disabeling checkbox [will use later]
        if (tabs[0].url != 'http://workroom.finoit.com/' && !storageValue) {
            debugger;
            $('#awesomeCheckbox').attr("disabled", true);
            $("#showlink").append("<p><a id='openLink' href='' target='_blank'>click here</a> to start the awesomeness</p>");
            document.getElementById('openLink').onclick = openMe;

        }
    });

    document.getElementById('awesomeCheckbox').onclick = testMe;

    function openMe() {
        // chrome.tabs.create({ url: 'www.google.com' });
        window.open('www.google.com', '_blank');
    }



    function testMe() {
        var obj1 = {
            actualVal: true
        }
        if ($(this).is(':checked')) {

            chrome.storage.local.set({ "temp": true }, function() {

            })


        } else {
            /*obj1["actualVal"] = false;
            chrome.storage.sync.set(obj1, function() {
                // Notify that we saved.
                console.log('Settings set false');
            });
        
*/

            chrome.storage.local.set({ "temp": false }, function() {

            })

        }
    }




});
