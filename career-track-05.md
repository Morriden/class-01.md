# User Auth

1. Plain text passwords: Uses plain letters.
2. One way hash: password has a hashing algorithm applied to it to make it more secure.
3. ‘Salting’ the password: Adds a very long string of bytes to the password.
4.  Random ‘salt’ for each user: A random ‘salt’ string could be added for each user, created on the generation of the user account.
5. The BCrypt Solution: Using a Key Factor, BCrypt is able to adjust the cost of hashing. With Key Factor changes, the hash output can be influenced. In this way, BCrypt remains extremely resistant to hacks, especially a type of password cracking called rainbow table.

1. The Blowfish cipher is a fast block cipher except when changing keys, the parameters that establish the functional output of a cryptographic algorithm: each new key requires the pre-processing equivalent to encrypting about 4 kilobytes of text, which is considered very slow compared to other block ciphers. This slow key changing is beneficial to password hashing methods such as bcrypt since the extra computational demand helps protect against dictionary and brute force attacks by slowing down the attack.
2. First phase is to promote key strengthening to slow down calculations which in turn also slow down attackers.
3. The resulting hash is prefixed with $2a$, $2y$, or $2b$. The prefixes are added to indicate usage of bcrypt and its version.
4. If your app is using a sign in scenario that doesn't require API calls, only an ID Token is required. There is no need to store it. You can validate it and get the data from it that you required.
