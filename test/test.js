
const {GBOpcodes} = require('../dist/gb-instructions-opcodes.cjs');

const missingHexIndexes = [0xD3, 0xE3, 0xE4, 0xF4, 0xDB, 0xEB, 0xEC, 0xFC, 0xDD, 0xED, 0xFD, 0xCB];

var assert = require('assert');
describe('GB Instructions Opcodes', function() {

  it('should get generated', () => {
    assert.equal(!!GBOpcodes.opcodes, true);
    assert.equal(!!GBOpcodes.cbOpcodes, true);
  });

  it('should only be missing some specified hex indexes', () => {

    const checkAllValues = (opcodeCollection, missingIndexes, messageHeader) => {
      for (let i = 0; i <= 0xFF; i++) {
        if (!missingIndexes.includes(i)) {
          assert.equal(
            !!opcodeCollection[GBOpcodes.getNumberAsOpcodeHex(i)], 
            true, 
            `${messageHeader} ${GBOpcodes.getNumberAsOpcodeHex(i)} does not exist`
          );
        }
      }
    }

    checkAllValues(GBOpcodes.opcodes, missingHexIndexes, 'Opcodes:');
    checkAllValues(GBOpcodes.cbOpcodes, [], 'CB Opcodes:');
  });
});
