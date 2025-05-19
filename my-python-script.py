from cryptography.fernet import Fernet

# Generate a new secret key (run this only once and save the key securely)
# key = Fernet.generate_key()
# print("Save this secret key:", key.decode())

# Saved secret key (for reuse)
secret_key = b'P2RzdkfH8fEqkaBwnE4qxw2ON4H4HPC4QYYSE1jqOfw='  # <- keep this secure!

# Create a Fernet object
cipher = Fernet(secret_key)

# Sensitive data to encrypt
sensitive_data = "my_api_key_123456789"

# Encrypt the data
encrypted_data = cipher.encrypt(sensitive_data.encode())
print("Encrypted:", encrypted_data.decode())

# Decrypt the data
decrypted_data = cipher.decrypt(encrypted_data).decode()
print("Decrypted:", decrypted_data)
