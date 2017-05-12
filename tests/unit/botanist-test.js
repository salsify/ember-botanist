import { module, test } from 'qunit';
import { transform, rule, simple } from 'botanist';

module('Unit | botanist');

test('basic transformations work', function(assert) {
  const myTransform = transform([
    rule({ x: simple('x') }, ({ x }) => {
      return `found x: ${x}`;
    }),

    rule({ y: simple('y') }, ({ y }) => {
      return `found y: ${y}`;
    })
  ]);

  const result = myTransform([
    { x: 1 },
    { y: 2 },
    { z: 3 }
  ]);

  assert.deepEqual(result, [
    'found x: 1',
    'found y: 2',
    { z: 3 }
  ]);
});
