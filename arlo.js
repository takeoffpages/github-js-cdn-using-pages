document.addEventListener("arlojscontrolsloaded", function () {
    var upcomingEventsControl = {
        moduleType: "UpcomingEvents",
        targetElement: "#upcoming-events-control1",                        
        template: "#1-test-event-1",
        customUrls: {
            eventtemplate: "https://arlo-integration.webflow.io/event-template"
        }
    };
    new ArloWebControls().start({
       "platformID": "takeoffpages.arlo.co",
        "modules": [
            upcomingEventsControl
    ]});
 });
