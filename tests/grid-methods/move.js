(function (window) {

  var Muuri = window.Muuri;

  QUnit.module('Grid methods');

  QUnit.test('move: Muuri instance should have a move method', function (assert) {
    assert.expect(1);
    assert.strictEqual(typeof Muuri.prototype.move, 'function');
  });

})(this);