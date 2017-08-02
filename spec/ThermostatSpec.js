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
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it('decreases the temperature', function() {
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it('has minimum 10 degrees', function() {
    for (var i = 0; i < 11; i++){
        thermostat.down();
    }
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it('has power saving mode', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch off the thermostat', function() {
    thermostat.switchPowerSavingOff()
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingOn()
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('has maximum temperature 25 degrees when saving mode is on', function() {
    thermostat.switchPowerSavingOn()
    for (var i = 0; i < 6; i++){
        thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(25);
  });

  it('has maximum temperature 32 degrees when saving mode is off', function() {
    thermostat.switchPowerSavingOff()
    for (var i = 0; i < 13; i++){
        thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(32);
  });

  it('starts with power saving mode on', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can reset the temperature to 20 degrees', function() {
    for (var i = 0; i < 5; i++) {
      thermostat.up();
    }
    thermostat.reset()
    expect(thermostat.currentTemperature()).toBe(20);
  });

    describe('displaying usage levels', function() {
      it('is considered low usage when temperature is below 18 degrees', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low usage')
      });

      it('is considered medium usage when temperature is below 25 degrees', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('medium usage')
      });

      it('is considered high usage when temperature is over 25 degrees', function() {
        thermostat.switchPowerSavingOff()
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high usage')
      });
    });
});
