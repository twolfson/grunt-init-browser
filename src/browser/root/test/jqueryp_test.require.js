/*
  ======== A Handy Little QUnit Reference ========
  http://docs.jquery.com/QUnit

  Test methods:
    expect(numAssertions)
    stop(increment)
    start(decrement)
  Test assertions:
    ok(value, [message])
    equal(actual, expected, [message])
    notEqual(actual, expected, [message])
    deepEqual(actual, expected, [message])
    notDeepEqual(actual, expected, [message])
    strictEqual(actual, expected, [message])
    notStrictEqual(actual, expected, [message])
    raises(block, [expected], [message])
*/

module('jQuery#awesome', {
  // This will run before each test in this module.
  setup: function() {
    this.selector = '#qunit-fixture';
  }
});

test('is chainable', function() {
  expect(1);

  // Stop the test while we load jQuery.
  stop();

  // Load jQuery.
  require(['jquery'], function ($) {
    // Continue testing.
    start();

    // Not a bad test to run on collection methods.
    var elems = $(this.selector).children();
    strictEqual(elems.awesome(), elems, 'should be chainable');
  });
});