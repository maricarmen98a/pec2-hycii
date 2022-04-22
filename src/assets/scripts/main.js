/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
import * as bootstrap from 'bootstrap';
 
function showAlert() {
    alert ("Mensaje correctamente enviado");
  }
  document.getElementById("form-submit").addEventListener("click", showAlert);