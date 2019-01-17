
const {GBOpcodes} = require('../dist/gb-instructions-opcodes.cjs');

var assert = require('assert');
describe('GB Instructions Opcodes', function() {
  it('should get generated', () => {
    assert.equal(!!GBOpcodes.opcodes, true);
    assert.equal(!!GBOpcodes.cbOpcodes, true);
  });
});
