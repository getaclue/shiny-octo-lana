#!/bin/bash

echo 'Hello,'
echo '(1) We will be using openssl to encrypt your jpg files.'
echo '(2) We will be decrypting all of the files from the CURRENT directory.'
echo '(3) Decrypted files will be stored in a new (./dec/) directory.'
echo '(4) Suggestion: use a aes-256-cbc cipher.'

# echo 'Please enter the directory to encrypt: '
# read directory

echo 'Please enter the cipher to use: '
read cipher

echo 'Making dec directory'
mkdir dec

echo 'Please enter the password to use: '
read password

echo 'Beginning decryption...'
for file in *.JPG
	do 
		openssl enc -d $cipher -a -in "$file" -out "./dec/$file" -pass pass:$password
done
echo 'Finished.'

