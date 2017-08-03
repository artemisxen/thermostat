'use strict';

function Thermostat() {
  this.temperature = 20
  this.DEFAULT_TEMPERATURE = 20
  this.MINIMUM_TEMPERATURE = 10
  this.powerSavingMode = true;
  this.MAX_PSM_ON = 25
  this.MAX_PSM_OFF = 32
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18
};

  Thermostat.prototype.currentTemperature = function () {
    return this.temperature;
  };

  Thermostat.prototype.up = function() {
    if (this.isMaximumTemperature()) {
      return;
    }
    return this.temperature += 1
  };

  Thermostat.prototype.down = function() {
    if (this.isMinimumTemperature()) {
      return;
    }
    return this.temperature -= 1
  };

  Thermostat.prototype.isMinimumTemperature = function () {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };

  Thermostat.prototype.isPowerSavingModeOn = function () {
    return this.powerSavingMode === true;
  };

  Thermostat.prototype.switchPowerSavingOff = function () {
    return this.powerSavingMode = false;
  };

  Thermostat.prototype.switchPowerSavingOn = function () {
    return this.powerSavingMode = true;
  };

  Thermostat.prototype.isMaximumTemperature = function () {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_PSM_OFF
    }
    return this.temperature === this.MAX_PSM_ON
  };

  Thermostat.prototype.reset = function () {
    return this.temperature = this.DEFAULT_TEMPERATURE
  };

  Thermostat.prototype.energyUsage = function () {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage'
    }
    else if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_PSM_ON ) {
      console.log(this.temperature);
      return 'medium-usage'
    }
    else {
      return 'high-usage'
    }
  };
