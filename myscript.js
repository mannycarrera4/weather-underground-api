console.log("This is my javascript file");

$(document).ready(function($) {
    var test = $("#test");
    console.log("TEST ",test);
    $.ajax({
        url : "http://api.wunderground.com/api/27712612aaec568a/geolookup/conditions/q/TN/Nashville.json",
        dataType : "jsonp",
    }).done(function(response) {
        var location = response.location.city;
        var temp_f = response.current_observation.temp_f;
        
        test.text(location + ": " + temp_f);

        console.log(response);
    });
});
