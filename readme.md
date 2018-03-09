# Speedlanes

Speedlanes is a progressive web app (PWA) that generates a QR code from a number and stores it on the device for later retrieval.  This was built as a one click way to display a QR code from a mobile device.  It also uses a service worker to store resource files so the application can be used offline.

Speedlanes is built to be hosted on Firebase Cloud Hosting. If you want to see a running example of this then head to [Speedlanes](https://speedlanes.jameshale.me.uk).

The application can be added to the homescreen of an Android device by selecting "Add to home screen" from the Chrome menu (untested on Firefox).

## Pre-requisites
1. Firebase Account

## Installation
1. Clone this repo
2. Install the [Firebase CLI](https://firebase.google.com/docs/cli/)
3. Create a Firebase project in the Firebase web console
4. Navigate to the repo directory in a terminal/CMD window, and run the command `firebase init`
5. Follow the prompts to initialise the project created in the web console in step 3.

## Running the project locally
1. Navigate to the repo directory in a terminal/CMD window, and run the command `firebase serve`.
2. Open a Chrome browser tab and navigate to `localhost:5000` or whatever port you have set Firebase to run on

## Deploying the project to Firebase Hosting
1.  Navigate to the repo directory in a terminal/CMD window, and run the command `firebase deploy`.
2. Open a Chrome browser tab and head to the link specified in the terminal/CMD window