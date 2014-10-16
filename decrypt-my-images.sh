#!/bin/bash

echo 'Hello,'
echo '(1) We will be using openssl to encrypt your jpg files.'
echo '(2) We will be decrypting individual files from the /enc/ directory.'
echo '(3) Decrypted files will be stored in a new (./dec/) directory'
echo '(4) Using aes-256-cbc'

# echo 'Please enter the directory to encrypt: '
# read directory

echo 'Please enter the cypher to use: '
read cypher

echo 'Making dec directory'
mkdir dec

echo 'Please enter the password to use: '
read password

echo 'Beginning decryption...'
for file in *.JPG
	do 
		openssl enc -d $cyper -a -in "$file" -out "./dec/$file" -pass pass:$password
done
echo 'Finished.'

