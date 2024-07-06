var flag = false;
var testCenter = "";
var refreshInMs = 21000; //Refresh rate in Milliseconds, change if you want faster refreshes (it might block you earlier)
$(function() {
    if(Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
 
    console.log("Checking for new dates...");
    jQuery(".test-centre-details").each(function() {
        if(jQuery("h5",this).length == 0 || jQuery("h5:contains('available')",this).length > 0) {
 
            flag = true;
            testCenter = jQuery("h4",this).text();
        }
         console.log("Checking for each date");
    });
 
    if(!flag) {
        console.log("nothing found... Refreshing...");
        var timeout = setTimeout(function() {
            jQuery("#test-centres-submit").click();
        },refreshInMs);
    } else {
        if (testCenter == '') {
            notifyMe("No tests at the moment");
            console.log("Test found, clearing refresher");
        }
        else {
            notifyMe("Date found in " + testCenter + '\n' + "Date is" + date);
            notifyMe("Date found in " + testCenter + '\n' + "Date is" + date);
            notifyMe("Date found in " + testCenter + '\n' + "Date is" + date);
            console.log("Test found, clearing refresher");
        }
    }
 
})
 
function notifyMe(title) {
 if (Notification.permission !== 'granted')
  Notification.requestPermission();
 else {
    var notification = new Notification('New date found!', {
        icon: 'https://assets.publishing.service.gov.uk/media/5a6117eced915d7dfea6bf2c/s300_dvsa.jpg',
        body: title,
       });
       notification.onclick = function() {
        window.focus(); this.close();
       };
      }
     }
