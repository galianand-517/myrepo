const crypto = require('crypto');

// Generate a 32-byte key (256 bits) for AES-256
const secretKey = crypto.randomBytes(32); // <-- Run this once and store securely
console.log("Secret Key (Base64):", secretKey.toString('base64'));

// Simulate a saved secret key
const key = Buffer.from('0123456789abcdef0123456789abcdef', 'utf-8'); // 32-byte key

// Initialization vector (should be random for each encryption)
const iv = crypto.randomBytes(16);

// Sensitive data
const sensitiveData = "my_api_key_123456789";

// Encrypt function
function encrypt(data, key, iv) {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return {
        iv: iv.toString('base64'),
        encryptedData: encrypted
    };
}

// Decrypt function
function decrypt(encryptedData, key, iv) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedData, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Encrypt
const encrypted = encrypt(sensitiveData, key, iv);
console.log("Encrypted:", encrypted.encryptedData);

// Decrypt
const decrypted = decrypt(encrypted.encryptedData, key, Buffer.from(encrypted.iv, 'base64'));
console.log("Decrypted:", decrypted);
