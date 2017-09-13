#! /bin/bash

cd /var/www/
sudo rm -rf /var/www/employ.jobsaustralia.tech/
git clone https://github.com/jobsaustralia/employ.jobsaustralia.tech.git
cd employ.jobsaustralia.tech/
composer install
chmod -R 777 storage/
cp /var/www/.env .env
php artisan cache:clear
composer dump-autoload


cd /var/www/
sudo rm -rf /var/www/html/
git clone https://github.com/jobsaustralia/jobsaustralia.tech.git html
cd html/
composer install
chmod -R 777 storage/
cp /var/www/.env .env
php artisan cache:clear
composer dump-autoload
php artisan migrate --force --seed
