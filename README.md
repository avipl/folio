# Portfolio

This is my portfolio website(webapp). The whole webapp is designed to achieve one goal, show my latest projects with little no future maintainance. 

The VueJS is used primarily to allow rapid development. 

There are two parts to my portfolio web app. This repository contains code for the frontend. For the backend code visit [folio-api](https://github.com/avipl/folio_apis)

# Demo

Visit [https://avi-portfolio.net](https://avi-portfolio.net)

# Fetures

- Always upto date project details. The database is updated automatically whenever new code is pushed to GitHub repository. Thanks to GitHub webhook integration. 
- Changes theme based on user preference settings on the device.
- Spam/bot protection without user interation.

## Spam Protection

As this website doesn't require users to authenticate. Obviously, there was no way to protect backend APIs. Hence, I intgrated the [reCaptcha-v3](https://google.com). However, as downside it increases the data fetch time. I will be working towards improving the load time. 
