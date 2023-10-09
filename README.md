# Hello Everyone!

FoodExplorer is a project developed as the final challenge of the RocketSeat platform developed by me.
This application is a complete website for restaurants, where the customer can search for dishes or ingredients, add them to the cart and track their order.
As an administrator, you can also add, edit or remove dishes, upload images, among other features.

As it is not possible to create an administrator user normally, I will pass it below:

*Login*: adm@adm.com

*Password*: admin123

## Let's Start

_Instructions for starting the dev environment._

- Download the project in the github.
- Open the project folder in vsCode by dragging the folder, or, navigate through the terminal with the command "cd *folderpath*"
- Still in the console execute the command "npm install"
- Now whenever you want to start the application just run the command "npm run dev"

**Obs.:**
This project is just the frontend of the project, for the application to work correctly it is necessary to download and run the backend as well, the link is below:

**Backend Link**: https://github.com/Ruan-Lazareti/FoodExplorerBack

## The Website

**Sign In**

First we have the login screen, where the user or administrator can authenticate.


**Sign Up**

Here is where the user can register, just fill in all the fields and click to create field.

*Obs*: The password is saved in encrypted form in the bank, in addition, when logging in, communication is completely secure through a JWT token.

**Home**

This is the main page of our project.
Let's divide this main page into 2 sections, the header and the main.

_Header_

In the header we have the search bar to search for dishes or ingredients, we also have the button to see the orders (It is only possible to see it when you are logged in as a customer), we also have the button to add dishes (It is only possible to see it when you are logged in as admin), and finally the logout button.

_Main_

Here we have the display of all the dishes separated by categories, in addition, the dishes are distributed in the form of a carousel.

**Orders**

Here you can see all orders made, as well as the date and time they were made and their status.

**Add Dishes**

Here is where the administrator can insert new dishes, informing the price, description, ingredients, image.

**Details**

When clicking on any dish on the home screen, you will be redirected to a more detailed page about the dish so that the customer can clearly know what the dish is about.
