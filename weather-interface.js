$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6bae413a0dca3d1bf1c2de372588a226`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);  
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
        $('.showSpeed').text(`The wind speed is ${response.wind.speed}.`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
