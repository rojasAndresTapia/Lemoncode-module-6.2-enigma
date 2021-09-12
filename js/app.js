// Global vars
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";



const inputEncryptElementId = document.getElementById('encrypt');
const encryptButtonId = document.getElementById('encryptButton');
const inputDecryptElementId = document.getElementById('decrypt');
const decryptButtonId = document.getElementById('decryptButton');


// handle functions
const handleEncryptButton = (ev) => {
  encrypt();
};

const handleDecryptButton = (ev) => {
decrypt();
};

// functions
let encrypt = () => {
  let inputArray = inputEncryptElementId.value;

  for (j = 0; j <= inputArray.length - 1; j++) {
    inputArrayCaracters = inputArray[j];

    for (i = 0; i <= plainAlphabet.length - 1; i++) {

      if (inputArrayCaracters === plainAlphabet[i]) {
      
        console.log('carácteres encriptados : ' + encryptedAlphabet[i]);
        encryptedAlphabetCharacter = encryptedAlphabet[i];
        inputDecryptElementId.innerHTML += encryptedAlphabet[i];
      }
    }
  }
};

let decrypt = () => {
  let inputArray = inputDecryptElementId.value;
  for (j = 0; j <= inputArray.length - 1; j++) {
    inputArrayCaracters = inputArray[j];
   
    for (i = 0; i <= encryptedAlphabet.length - 1; i++) {
     
      if (inputArrayCaracters === encryptedAlphabet[i]) {
        decryptedAlphabetPosition = i;
        
        console.log('carácteres desencriptados: ' + plainAlphabet[i]);
        decryptedAlphabetPosition = plainAlphabet[i];
        inputEncryptElementId.innerHTML += decryptedAlphabetPosition;
      }
    }
  }
};

// EVENTS
decryptButtonId.addEventListener('click', handleDecryptButton);
encryptButtonId.addEventListener('click', handleEncryptButton);