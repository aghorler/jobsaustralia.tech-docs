#! /bin/bash

# Stop Apache.
service apache2 stop

cd /etc/letsencrypt/ecdsa/


# Remove old credentials.
rm -f ./jobsaustralia.tech/*

# Generate new private key.
openssl ecparam -genkey -name secp384r1 > ./jobsaustralia.tech/privkey.pem

# Generate CSR.
openssl req -new -sha256 -key ./jobsaustralia.tech/privkey.pem -subj "/C=AU/ST=VIC/O=RMIT/CN=jobsaustralia.tech" -reqexts SAN -config <(cat /etc/ssl/openssl.cnf <(printf "[SAN]\nsubjectAltName=DNS:jobsaustralia.tech,DNS:www.jobsaustralia.tech\n1.3.6.1.5.5.7.1.24=DER:30:03:02:01:05")) -out ./jobsaustralia.tech/jobsaustralia.tech.csr


# Remove old credentials.
rm -f ./employ.jobsaustralia.tech/*

# Generate new private key.
openssl ecparam -genkey -name secp384r1 > ./employ.jobsaustralia.tech/privkey.pem

# Generate CSR.
openssl req -new -sha256 -key ./employ.jobsaustralia.tech/privkey.pem -subj "/C=AU/ST=VIC/O=RMIT/CN=employ.jobsaustralia.tech" -reqexts SAN -config <(cat /etc/ssl/openssl.cnf <(printf "[SAN]\nsubjectAltName=DNS:employ.jobsaustralia.tech,DNS:www.employ.jobsaustralia.tech\n1.3.6.1.5.5.7.1.24=DER:30:03:02:01:05")) -out ./employ.jobsaustralia.tech/employ.jobsaustralia.tech.csr


cd jobsaustralia.tech

# Request certificate.
letsencrypt certonly --standalone --csr jobsaustralia.tech.csr

cd ..

cd employ.jobsaustralia.tech

# Request certificate.
letsencrypt certonly --standalone --csr employ.jobsaustralia.tech.csr

# Start Apache.
service apache2 start
