document.addEventListener("arlojscontrolsloaded", function () {
    var upcomingEventsControl = {
        moduleType: "UpcomingEvents",
        targetElement: "#upcoming-events-control1",                        
        template: "#upcoming-events-control1-template",
        customUrls: {
            eventtemplate: "https://arlo-integration.webflow.io/event-template"
        },
        top: 5
    };
    new ArloWebControls().start({
       "platformID": "demo.arlo.co",
        "modules": [
            upcomingEventsControl
    ]});
 });
