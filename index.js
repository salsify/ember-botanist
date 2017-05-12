/* eslint-env node, es6 */

'use strict';

module.exports = {
  name: 'ember-botanist',

  options: {
    nodeAssets: {
      botanist: {
        vendor: ['dist/botanist.umd.js'],
      },
    },
  },

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/botanist/dist/botanist.umd.js', {
      using: [{ transformation: 'amd', as: 'botanist' }]
    });
  },
};
