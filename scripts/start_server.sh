#!/bin/bash
# sudo chmod 755 /var/www/server.js # optional
# this will restart app/server on instance reboot
crontab -l | { cat; echo "@reboot pm2 start /var/www/node-npm-test/server.js -i 0 --name \"node-app-npm\""; } | crontab -
sudo pm2 stop node-app-npm
# actually start the server
sudo pm2 start /var/www/node-npm-test/server.js -i 0 --name "node-app-npm"

