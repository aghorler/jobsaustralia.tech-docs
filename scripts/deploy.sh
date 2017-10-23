#! /bin/bash
# WARNING: This script will cause temporary downtime for clients. This script will invalidate active sessions. This script will delete stored resumes.

# Clone and install JobsAustralia.tech Employers from Laravel 5.5 branch.
cd /var/www/
sudo rm -rf /var/www/employ.jobsaustralia.tech/
git clone -b laravel-5.5 https://github.com/jobsaustralia/employ.jobsaustralia.tech.git
cd employ.jobsaustralia.tech/
composer install
chmod -R 777 storage/
cp /var/www/employers.env .env
php artisan cache:clear
composer dump-autoload

# Clone and install JobsAustralia.tech Job Seekers from Laravel 5.5 branch.
cd /var/www/
sudo rm -rf /var/www/html/
git clone -b laravel-5.5 https://github.com/jobsaustralia/jobsaustralia.tech.git html
cd html/
composer install
chmod -R 777 storage/
cp /var/www/jobseekers.env .env
php artisan cache:clear
composer dump-autoload

# Uncomment this to migrate and seed the database. The database should be manually dropped before running this command.
# php artisan migrate --force --seed

# Create a symbolic link for cross-project resume storage.
ln -s /var/www/html/storage/app/public/resumes/ /var/www/employ.jobsaustralia.tech/storage/app/public/
