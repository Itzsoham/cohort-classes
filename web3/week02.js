// UInt8Array to ascii

function bytesToAscii(byteArray) {
  return new TextDecoder().decode(byteArray);
}

// Example usage:
const bytes = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const asciiString = bytesToAscii(bytes);
console.log(asciiString); // Output: "Hello"

// Ascii to UInt8Array

function asciiToBytes(asciiString) {
  //   return new Uint8Array([...asciiString].map((char) => char.charCodeAt(0)));
  let arr = [];
  for (let i = 0; i < asciiString.length; i++) {
    const element = asciiString[i];
    arr.push(element.charCodeAt(0));
  }
  return new Uint8Array(arr);
}

// Example usage:
const ascii = "Hello world";
const byteArray = asciiToBytes(ascii);
console.log(byteArray); // Output: Uint8Array(5) [72, 101, 108, 108, 111]


// Base64 1 character = 6 bits
// Base64 encoding uses 64 different characters (A-Z, a-z, 0-9, +, /), which means each character can represent one of 64 possible values.

const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoded);

// Base58
// It is similar to Base64 but uses a different set of characters to avoid visually similar characters and to make the encoded output more user-friendly
// Base58 uses 58 different characters: Uppercase letters: A-Z (excluding I and O) Lowercase letters: a-z (excluding l) Numbers: 1-9 (excluding 0)

const bs58 = require('bs58');

function uint8ArrayToBase58(uint8Array) {
  return bs58.encode(uint8Array);
}

// Example usage:
const byteArrayS = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const base58String = uint8ArrayToBase58(byteArrayS);
console.log(base58String); // Output: Base58 encoded string