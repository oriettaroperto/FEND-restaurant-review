# Restaurant Review App (stage 1) - FEND

## Project Instructions
In this project, a static webpage that lacks accessibility is given to be converted into a mobile-ready web application. 
The design must be responsive on different sized displays and accessible for screen reader use. It will also be added a 
service worker to begin the process of creating a seamless offline experience for the users.

### What do I do from here?

1. Clone or download this repository

2. In this folder, start up a simple HTTP server to serve up the site files on your local computer. 
Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` 
(or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, 
navigate to Python's [website](https://www.python.org/) to download and install the software.

3. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.

- Try it yourself! You can clone the starter code [here](https://github.com/udacity/mws-restaurant-stage-1), explore the code and 
start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` 
with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing 
JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write. 

## License
The content of this repository is licensed under [MIT.](https://choosealicense.com/licenses/mit/)