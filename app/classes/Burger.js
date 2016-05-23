var _forEach = require('lodash').forEach;

function Burger(size, stuff, top) {

  this.components = {
    size: null,
    stuff: null,
    top: null
  };

  !!size ? this.setSize(size) : false;
  !!stuff ? this.setStuff(stuff) : false;
  !!top ? this.setTop(top) : false;
}

Burger.prototype.setItem = function (item, type) {
  if (!item || item.indexOf(type.toUpperCase()) < 0 || !this.menu[item]) {
    return false;
  }
  this.components[type] = item;
};

Burger.prototype.sumComponents = function (key) {
  var value = 0;

  _forEach(this.components, function (el) {
    value += this.menu[el][key];
  }.bind(this));

  return value;
};

Burger.prototype.setSize = function (size) {
  this.setItem(size, 'size');
};

Burger.prototype.setStuff = function (stuff) {
  this.setItem(stuff, 'stuff');
};

Burger.prototype.setTop = function (top) {
  this.setItem(top, 'top');
};

Burger.prototype.getPrice = function () {
  return this.sumComponents('cost');
};

Burger.prototype.getCalories = function () {
  return this.sumComponents('cal');
};

module.exports = Burger;
