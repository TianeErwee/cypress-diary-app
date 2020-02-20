FROM centos/httpd-24-centos7
 
COPY ./dist/cypress-diary-app /opt/rh/httpd24/root/var/www/html