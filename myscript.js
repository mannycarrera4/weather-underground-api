// console.log("This is my javascript file");

// $(document).ready(function($) {
//     var test = $("#test");
//     console.log("TEST ",test);
//     $.ajax({
//         url : "http://api.wunderground.com/api/27712612aaec568a/forecast/q/CA/San_Francisco.json",
//         dataType : "jsonp",
//     }).done(function(response) {
//         var forcastDays = response.forecast.simpleforecast.forecastday;

//         // Loop through each day and grab the conditions plus temp in celsius 
//         for (var i=0; i < forcastDays.length; i++) {
//             var thisDaysForecast = forcastDays[i];
//             var example = $('<div class="example">'+thisDaysForecast.high.celsius+' '+thisDaysForecast.conditions+'</div>');
//             test.append(example);
//         }

//         // var datePretty = response.forecast.simpleforecast.forecastday[0].date.pretty;
//         // console.log("data: ",datePretty);
//         // inserts text into an existing html element
//         // test.text(datePretty);
//         console.log(response);

//         // Added html element using jquery 
//         // var example = $('<div class="example">'+datePretty+' This is my example</div>');
//         // test.append(example);
//     });
// });



/* Gives me the temperature in farenheit of a city */
// jQuery(document).ready(function($) {
//     $.ajax({
//     url : "http://api.wunderground.com/api/27712612aaec568a/geolookup/conditions/q/TN/Nashville.json",
//     dataType : "jsonp",

//   }).done(function(response) {
//     var location = response.location.city;
//     var temp_f = response.current_observation.temp_f;
//     var test = $('#test');
//     test.text(location +": " + temp_f);
  
//   });
// });

jQuery(document).ready(function($) {
    $.ajax({
    url : "http://api.wunderground.com/api/27712612aaec568a/webcams/q/NW/Sydney.json",
    dataType : "jsonp",

  }).done(function(response) {
    var webcams = response.webcams;
    var test = $("#test");
    for ( var i=0; i < webcams.length; i ++ ) {
        var individualWebcam = webcams[i];
        var example = $('<img src="'+webcams[i].CURRENTIMAGEURL+'">');
        test.append(example);
    }
    // var image = $('<img src="'+response.webcams[2].CURRENTIMAGEURL+'">')
    // var test = $('#test');
    // test.html(image);

    console.log(response);
    // var location = response.location.city;
    // var temp_f = response.current_observation.temp_f;
    // var test = $('#test');
    // test.text(location +": " + temp_f);
  
  });
});



















