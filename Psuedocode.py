
import random

len_password = int(input('How long do you want your password to be?'))

no_passwords = int(input('How many passwords do you want to produce?'))

# used for testing purposes
# len_password = 12
# no_passwords= 4

chars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

def password_gen(len_pswd):
	password = str()
	for _ in range(len_pswd):
		password += chars[random.randint(0,(len(chars))-1)]

	return password

# print(password_gen(len_password))

def mutiple_pswds(no_pswds,len_pswd):
	passwords = list()

	for _ in range(0,no_pswds):
		passwords.append(password_gen(len_pswd))

	return passwords


if no_passwords > 1: 
	print(mutiple_pswds(no_passwords, len_password))
else: 
	print(password_gen(len_password))




