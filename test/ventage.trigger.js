/*global define, chai, setup, suite, test*/
define(['ventage'], function (Ventage) {
  var assert = chai.assert;

  suite('Ventage#trigger()', function () {
    setup(function (done) {
      done();
    });

    test('triggers a callback when an event is raised', function (done) {
      var events = new Ventage();
      var callback = function () {
        done();
      };
      events.on('foo', callback);
      events.trigger('foo');
    });

    test('triggers a callback with a specified context when an event is raised', function (done) {
      var expectedContext = {};
      var events = new Ventage();
      var callback = function () {
        assert.equal(this, expectedContext);
        done();
      };
      events.on('foo', callback, expectedContext);
      events.trigger('foo');
    });

    test('triggers a callback with data when an event is raised', function (done) {
      var expectedArg1 = {}, expectedArg2 = {};
      var events = new Ventage();
      var callback = function (arg1, arg2) {
        assert.equal(arg1, expectedArg1);
        assert.equal(arg2, expectedArg2);
        done();
      };
      events.on('foo', callback);
      events.trigger('foo', expectedArg1, expectedArg2);
    });
  });
});