<script>
    document.addEventListener("arlojscontrolsloaded", function () {
        var upcomingEventsControl = {
            moduleType: "UpcomingEvents",
            targetElement: "#upcoming-events-control1",                        
            template: "#upcoming-events-control1-template",
            customUrls: {
                eventtemplate: "http://example.com/eventtemplatepage.html",
                venue: "http://example.com/venue.html",
                presenter: "http://example.com/presenter.html"
            },
            top: 5
        };
        var upcomingEventsControl2 = {
            moduleType: "UpcomingEvents",
            targetElement: "#upcoming-events-control2",                        
            template: "#upcoming-events-control2-template",
            customUrls: {
                eventtemplate: "http://example.com/eventtemplatepage.html",
                venue: "http://example.com/venue.html",
                presenter: "http://example.com/presenter.html"
            },
            top: 10
        };
        new ArloWebControls().start({
           "platformID": "demo.arlo.co",
            "modules": [
                upcomingEventsControl, 
                upcomingEventsControl2
        ]});
     });
</script>
