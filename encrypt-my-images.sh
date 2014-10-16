#!/bin/bash

echo 'Hello,'
echo '(1) We will be using openssl to encrypt your files.'
echo '(2) We will be encrypting all of the files in the CURRENT directory.'
echo '(3) Encrypted files will be stored in the subdirectory (./enc/)'
echo '(4) Suggestion: use aes-256-cbc cipher.'

# echo 'Please enter the directory to encrypt: '
# read directory

echo 'Please enter the cipher to use: '
read cipher

echo 'Making enc directory'
mkdir enc

echo 'Please enter the password to use: '
read password

echo 'Beginning encryption...'
for file in *.JPG
	do 
		openssl enc $cipher -a -salt -in "$file" -out "./enc/$file" -pass pass:$password
done

echo 'Finished.'
