console.log("This is my javascript file");

$(document).ready(function($) {
    var test = $("#test");
    console.log("TEST ",test);
    $.ajax({
        url : "http://api.wunderground.com/api/27712612aaec568a/forecast/q/CA/San_Francisco.json",
        dataType : "jsonp",
    }).done(function(response) {
        var forcastDays = response.forecast.simpleforecast.forecastday;

        // Loop through each day and grab the conditions plus temp in celsius 
        for (var i=0; i < forcastDays.length; i++) {
            var thisDaysForecast = forcastDays[i];
            var example = $('<div class="example">'+thisDaysForecast.high.celsius+' '+thisDaysForecast.conditions+'</div>');
            test.append(example);
        }

        // var datePretty = response.forecast.simpleforecast.forecastday[0].date.pretty;
        // console.log("data: ",datePretty);
        // inserts text into an existing html element
        // test.text(datePretty);
        console.log(response);

        // Added html element using jquery 
        // var example = $('<div class="example">'+datePretty+' This is my example</div>');
        // test.append(example);
    });
});
