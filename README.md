[Neighbourhood map project](http://donjosef.github.io/React-neighbourhood-map)

## Brief escription

The project shows a map with markers representing some points of interest in Puglia. The user can click on a marker or on a list item in the left side menu to display an info window with details of that place. A text input is provided to filter the desired places based on a specific query that matches that place.

### Getting Started

To run the project you will need **Node.js** installed on your machine, which comes with **npm** , a node package manager. 
Visit the official page to download it and read more about it [Node.js](https://nodejs.org/it/)
Once you have that you can clone the repo on your machine by typing `git clone https://github.com/donjosef/neighbourhood-app.git` in your terminal or download the zip file directly.

### Installing & running

Go to the directory where you have cloned or download the project and: 

1. run `npm install` in your terminal
2. run `npm start` to start the application
3. A web page will open automatically in your browser at port 3000 with the home page of the application.

### Production mode

* To create a production mode use `npm run build`

As the [create react app documentation](https://github.com/facebook/create-react-app#npm-run-build-or-yarn-build) states *"The build is minified and the filenames include the hashes.
By default, it also includes a service worker so that your app loads from local cache on future visits."*



### Utils

The project makes use of the [Google maps api](https://developers.google.com/maps/documentation/javascript/tutorial) service to display the map of the chosen neighbourhood.
The data retrieved for each place though, are supplied by [FoursquareAPI](https://developer.foursquare.com/) a local search and recommender-system service. Attribution are credited on the left side menu and on each infowindow displayed when the user click on a marker.
In the PlacesDataAPI file in src folder you can find the methods **getPlaces** and **getDetails** which are responsible for the request to the foursquareAPI.

### Dependencies

The project makes use of [react-google-map](https://www.npmjs.com/package/react-google-maps) package to apply a more react logic to the map and all of its components such as marker and info window. Check the above link for more details.

#### Built with

This project was bootstraped with [create react app](https://github.com/facebook/create-react-app)

### Attributions and useful readings

In order to complete this project i've referenced some useful readings and videos:

* [Neighbourhood project walkthrough](https://www.youtube.com/watch?v=Uw5Ij56RhME&t=10296s) gives me some useful ideas to get started
* [How to render google maps with react](https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/) gives me a good understanding of how to implement the map with react, since it makes use of virtual dom and the load of the main script to google api service is disrupted
* [react google maps docs](https://tomchentw.github.io/react-google-maps/#introduction) helps me understand how to get started with this package











