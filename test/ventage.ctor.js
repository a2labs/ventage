/*global define, chai, setup, suite, test*/
define(['ventage'], function (Ventage) {

  suite('Events.ctor()', function () {
    setup(function (done) {
      done();
    });

    test('trigger() is invoked normally by default', function (done) {
      var events = new Ventage();
      events.trigger = function () {
        done();
      };
      events.trigger('foo');
    });

    test('trigger() is invoked normally when specified', function (done) {
      var events = new Ventage(false);
      events.trigger = function () {
        done();
      };
      events.trigger('foo');
    });

    test('trigger() forwards calls to triggerAsync()', function (done) {
      var events = new Ventage(true);
      events.triggerAsync = function () {
        done();
      };
      events.trigger('foo');
    });

  });
});