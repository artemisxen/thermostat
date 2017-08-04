$(document).ready(function() {
  var thermostat = new Thermostat();

  weather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#city').val();
    weather(city);
  });

  $('#power-saving-status').text('on')
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function () {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function () {
    thermostat.switchPowerSavingOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  });

  $('#powersaving-off').click(function () {
    thermostat.switchPowerSavingOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature + ' °C');
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function weather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var token = '&appid=cbed1d0b4fe91bd98b15119e571f2102';
    var units = '&units=metric';
    $.get(url + city + token + units, function(data) {
      $('#current-temperature').text(city + ' ' + Math.ceil(data.main.temp));
    });
  };
});
