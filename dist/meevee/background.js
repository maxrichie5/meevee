var audio = null;

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: ''},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.alarms.onAlarm.addListener(function(alarm) {
  console.log("ALARM! " + alarm.name);

  chrome.storage.sync.get({events: []}, function(result) {
      // Get event list and find event with alarm going off
      var eventsList = result.events;
      console.log(result.events);
      var current = eventsList.find(element => element.name+"-#"+element.id == alarm.name);
      if (current == undefined) {
        console.log("TRIED TO FIND NONEXISTANT EVENT");
        return;
      }
      // Create another alarm for reccurance if necc
      var recurrence = current.recurrence;

      if(recurrence == "day") {
        var nextTime = new Date(current.time);
        var alarmMinutesBeforeOpening = current.minutesBeforeOpening;
        nextTime.setMinutes(nextTime.getMinutes() - alarmMinutesBeforeOpening);
        var presentTime = new Date();
        // Get the original alarm time to match current date
        // Check to see if nextTime is an acceptable range (less than a minute away presentTime)
        while(nextTime < presentTime && presentTime - nextTime > 60000) {
          nextTime.setDate(nextTime.getDate() + 1);
        }
        nextTime.setDate(nextTime.getDate() + 1);
        chrome.alarms.create(current.name+"-#"+current.id, {when: Date.parse(nextTime)});
        console.log("Adding next day alarm for event: " + current.name + " at time " + nextTime.toUTCString());
      } else if(recurrence == "week") {
        var nextTime = new Date(current.time);
        var alarmMinutesBeforeOpening = current.minutesBeforeOpening;
        nextTime.setMinutes(nextTime.getMinutes() - alarmMinutesBeforeOpening);
        // Update Time
        var presentTime = new Date();
        while(nextTime < presentTime && presentTime - nextTime > 60000) {
          nextTime.setDate(nextTime.getDate() + 1);
        }
        nextTime.setDate(nextTime.getDate() + 7);
        chrome.alarms.create(current.name+"-#"+current.id, {when: Date.parse(nextTime)});
        console.log("Adding next week alarm for event: " + current.name + " at time " + nextTime.toUTCString());
      } else if(recurrence == "month") {
        var nextTime = new Date(current.time);
        var alarmMinutesBeforeOpening = current.minutesBeforeOpening;
        nextTime.setMinutes(nextTime.getMinutes() - alarmMinutesBeforeOpening);
        // Update Time
        var presentTime = new Date();
        while(nextTime < presentTime && presentTime - nextTime > 60000) {
          nextTime.setDate(nextTime.getDate() + 1);
        }
        nextTime.setMonth(nextTime.getMonth()+1);
        chrome.alarms.create(current.name+"-#"+current.id, {when: Date.parse(nextTime)});
        console.log("Adding next month alarm for event: " + current.name + " at time " + nextTime.toUTCString());
      }

      // check if date and time are correct
      // This is necessary because the Chrome API may fire alarms that were not able to go off after the actual time
      var currentTime = new Date(Date.now());
      var alarmTime = new Date(current.time);
      var alarmMinutesBeforeOpening = current.minutesBeforeOpening;
      alarmTime.setMinutes(alarmTime.getMinutes() - alarmMinutesBeforeOpening);
      if (recurrence == "none" && (!(Math.abs(alarmTime.getTime() - currentTime.getTime()) < 10000))) {
        console.log("ALARM at wrong time: " + alarmTime.getTime() + " vs " + currentTime.getTime());
        return;
      } else if (recurrence == "day" && (!(alarmTime.getHours() == currentTime.getHours()) || alarmTime.getMinutes() != currentTime.getMinutes())) {
        console.log("ALARM at wrong time: " + alarmTime.getTime() + " vs " + currentTime.getTime());
        return;
      } else if (recurrence == "week" && ((alarmTime.getDay() != currentTime.getDay()) || (alarmTime.getHours() != currentTime.getHours() || alarmTime.getMinutes() != currentTime.getMinutes()))) {
        console.log("ALARM at wrong time: " + alarmTime.getTime() + " vs " + currentTime.getTime());
        return;
      } else if (recurrence == "month" && ((alarmTime.getDate() != currentTime.getDate()) || (alarmTime.getHours() != currentTime.getHours() || alarmTime.getMinutes() != currentTime.getMinutes()))) {
        console.log("ALARM at wrong time: " + alarmTime.getTime() + " vs " + currentTime.getTime());
        return;
      }

      console.log("Opening up the alarmed meeting in a new tab with the URL of " + current.link);
      // Open up the new tab/window if event is active
      if (!current.deactivated) {
        chrome.windows.getAll(function(windows) {
          if (windows.length == 0) {
            chrome.windows.create({focused: true, url: current.link}, function(window) {
              console.log("opened window"); 
            }); 
          } else {
            chrome.tabs.create({url: current.link, active: true}, function(tab) {
              console.log("PENDING URL: " + tab.pendingUrl); 
              console.log("TAB URL: " + tab.url); 
               // only do this if the tab has zoom in the url - also stop the while loop if the tab is closed 
               //while(!(tab.url.includes("#success"))) {} 
               //chrome.tabs.remove(tab.id, function() {
               //  console.log("REMOVED TAB"); 
               //}); 
            }); 
          }
        }); 
        playSound();
      }
  });
});

chrome.runtime.onStartup.addListener(function() {
  console.log("RUNTIME STARTED");
  // remove all alarms so we don't create duplicates
  chrome.alarms.clearAll(null);

  // add alarms for all existing events
  chrome.storage.sync.get('events', function (result) {
    console.log("RESULT EVENTS LENGTH: " + result.events.length);
    result.events.forEach(event => addAlarmForEvent(event));
  });
});

function addAlarmForEvent(event) {
  var alertTime = new Date(event.time);
  var recurMins = reccurenceMins(event.recurrance, alertTime);
  var presentTime = new Date();
  while(alertTime < presentTime && presentTime - alertTime > 60000) {
    alertTime.setDate(alertTime.getDate() + 1);
  }
  alertTime.setMinutes(alertTime.getMinutes() - event.minutesBeforeOpening);
  if(recurMins > 0) {
      console.log("Adding alarm for event: " + event.name + " at time " + alertTime.toUTCString() + " with reccurence of " + recurMins + " minutes.");
      chrome.alarms.create(event.name+"-#"+event.id, {when: Date.parse(alertTime), periodInMinutes: recurMins});
  } else if(recurMins == -1) {
      var month = alertTime.getMonth();
      var yearCheck = 0;
      var tmp = alertTime;
      var i;
      // Loop through months
      for(i = 0; i < 12; i++) {
          // setUTCMonth will advance next year if argument is > 12
          // Once we advance the year once, we go back to just month values
          yearCheck == 0 ? tmp.setUTCMonth((i+month)) : tmp.setUTCMonth((i+month)%12);
          if(i+month == 12)
              yearCheck = 1;
          chrome.alarms.create(event.name+"-#"+event.id, {when: Date.parse(tmp)});
          console.log("Adding alarm for event: " + event.name + " at time " + tmp.toUTCString());
      }
  } else {
      chrome.alarms.create(event.name+"-#"+event.id, {when: Date.parse(alertTime)});
      console.log("Adding alarm for event: " + event.name + " at time " + alertTime);
  }
}

function addDesktopNotificationForEvent(event) {
  var options = {
    type: "basic",
    title: event.name+"-#"+event.id,
    message: "Your online meeting is starting!",
    iconUrl: "favicon.ico",
    eventTime: 0,
    buttons: [{ title: "Start meeting" }],
    requireInteraction: true
  }

  var alertTime = new Date(event.time);
  var recurMins = reccurenceMins(event.recurrance, alertTime);
  alertTime.setMinutes(alertTime.getMinutes() - event.notifyTime);
  if(recurMins > 0) {
      console.log("Adding notification for event: " + event.name + " at time " + alertTime.toUTCString() + " with reccurence of " + recurMins + " minutes.");
      options.eventTime = Date.parse(alertTime);
      // TODO: implement recurrance
      chrome.notifications.create(event.name+"-#"+event.id, options, null);
  } else if(recurMins == -1) {
      var month = alertTime.getMonth();
      var yearCheck = 0;
      var tmp = alertTime;
      var i;
      // Loop through the months
      for(i = 0; i < 12; i++) {
          // setUTCMonth will advance next year if argument is > 12
          // Once we advance the year once, we go back to just month values
          yearCheck == 0 ? tmp.setUTCMonth((i+month)) : tmp.setUTCMonth((i+month)%12);
          if(i+month == 12)
              yearCheck = 1;
          options.eventTime = Date.parse(tmp);
          // TODO: implement recurrance
          chrome.notifications.create(event.name+"-#"+event.id, options, null);
          console.log("Adding notification for event: " + event.name + " at time " + tmp.toUTCString());
      }
  } else {
    options.eventTime = Date.parse(alertTime);
    // TODO: implement recurrance
    chrome.notifications.create(event.name+"-#"+event.id, options, null);
    console.log("Adding notification for event: " + event.name + " at time " + alertTime.toUTCString());
  }

}

function reccurenceMins(recurrance, alertTime) {
  if(recurrance == "day") {
      return 60*24;
  } else if(recurrance == "week") {
      return 60*24*7;
  } else if(recurrance == "month") {
      return -1;
  } else {
      return 0;
  }
}

function playSound() {
  if (audio) {
    audio.pause();
    document.body.removeChild(audio);
    audio = null;
  }

  audio = document.createElement('audio');
  audio.addEventListener('ended', function(evt) {
    isPlaying = false;
  });
  document.body.appendChild(audio);
  audio.autoplay = true;

  var src = 'assets/chime.wav';
  audio.volume = 1.0;
  audio.src = src;
  isPlaying = true;
}
