Deploy your Node.js application on a Linux VM, set up Nginx as a reverse proxy, secured your app with SSL, and linked it to your custom domain.

NodeJS on Linux
This repository contains a step-by-step guide for deploying a Node.js application on a Linux Virtual Machine (VM) hosted on Google Cloud, with Nginx as a reverse proxy and SSL configuration using Let's Encrypt. The app is secured with HTTPS and accessible via a custom domain.

Prerequisites
A Google Cloud account to create a virtual machine (VM).
A custom domain name (e.g., techtrapture.com) and a subdomain (e.g., myblog.techtrapture.com).
Basic knowledge of Node.js, Linux, and Google Cloud.
SSH key for accessing the Google Cloud VM.
Steps to Deploy
1. Create a Linux Virtual Machine
Create a Linux VM on Google Cloud with Ubuntu 20.04 LTS (or your preferred distribution).
Open firewall rules to allow HTTP and HTTPS traffic.
2. Install Node.js
SSH into the VM and install Node.js using the following commands:
bash
Copy code
sudo apt update
sudo apt install -y nodejs npm
3. Develop the Application
Create a simple Node.js app using the Express.js framework.
Run the app locally on port 3000 and verify it's working by visiting the VM's IP address.
4. Start App with PM2
Install PM2 to manage the app's process and ensure it runs continuously:
bash
Copy code
sudo npm install -g pm2
pm2 start app.js
5. Install and Configure Nginx as a Reverse Proxy
Install Nginx on the VM and configure it to forward requests to your Node.js app running on port 3000.
Update the Nginx configuration file to include the domain and reverse proxy settings.
6. Set Up SSL for HTTPS
Install Certbot and the Nginx plugin to automatically obtain an SSL certificate from Let's Encrypt:
bash
Copy code
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d myblog.techtrapture.com
Set up automatic SSL certificate renewal using cron jobs.
7. Link Domain to the App
Update your DNS settings to point the subdomain myblog.techtrapture.com to the VM's external IP address.
8. Access the App Globally
Once DNS is propagated, you can access your app securely via https://myblog.techtrapture.com.
Conclusion
By following these steps, you will have a secure, production-ready Node.js application deployed on Google Cloud. The app is running on a Linux VM, proxied through Nginx, and secured with SSL. You can now manage and scale your app with ease.


