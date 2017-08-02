'use strict';
describe ('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('increases the temperature', function() {
    expect(thermostat.up()).toEqual(21);
  });

  it('decreases the temperature', function() {
    expect(thermostat.down()).toEqual(19);
  });
});
