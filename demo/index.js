import {GBOpcodes} from '../dist/gb-instructions-opcodes.esm';

const containerElement = document.querySelector('#container');

if (containerElement) {
  containerElement.style = 'white-space: pre;';
  containerElement.textContent = JSON.stringify(GBOpcodes, null, 2);
} else {
  console.error('Could not find the container element');
}
