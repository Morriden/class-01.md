# User Models

Web applications need to keep secret information about there users for there safety. USER MODELS THAT HAVE SENSITIVE INFORMATION should NEVER be sent to user Models.

# Cryptography

Cryptography is coding and decoding messages. Very famous in my larp games (took 5 hours once to decode a letter jeez)

# Hash Algorithms

A Hash Algorithm is used in cryptography and makes a piece of data very hard to decode. If that data is identical it will unlock stuff.

# Cypher Algorithms

A Cryptographic Cypher Algorithm is my favorite. Having a key used to decipher the information. 

"User tokens can be created by associated a random unique string (tokenSeed) with a user account and, in turn, encrypting the tokenSeed with a secret key that only the server knows. We can then send the encrypted token to a client application. When the client makes a future request they send back the token. The server can reverse the token into the tokenSeed by decrypting it with the secret key. This is because the tokenSeed was unique to the database and can be queried to produce the user who made the request."

# Basic Authorization

This is the method that saves the username and password in the search bar using a basic coding system.