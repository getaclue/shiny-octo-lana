#!/bin/bash

echo 'Hello,'
echo '(1) We will be using openssl to encrypt your jpg files.'
echo '(2) We will be encrypting individual files in a directory.'
echo '(3) Encrypted files will be stored in the subdirectory (./enc/)'
echo '(4) Using aes-256-cbc'

echo 'Please enter the directory to encrypt: '
read directory

echo 'Please enter the cypher to use: '
read cypher

echo 'Making enc directory'
mkdir "$directory/enc"

echo 'Please enter the password to use: '
read password

echo 'Beginning encryption...'
for file in "$directory/*.JPG"
	do 
		openssl enc $cyper -a -salt -in "$file" -out "$directory/enc/$file" -pass pass:$password
done
echo 'Finished.'

