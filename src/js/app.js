var map,
    infowindow,
    places,
    markers = [],
    infowindows = [],
    viewModel;

// Gym locations
var locations = [
    {
        name: "Planet Granite San Francisco",
        placeId: "ChIJYR3cR92GhYAReMwzpHwVcI8",
        position: {lat: 37.8041267, lng: -122.4685219}
    },
    {
        name: "Dogpatch Boulders",
        placeId: "ChIJ2xYuRrp_j4ARU9Lx0LBnqrY",
        position: {lat: 37.7566538, lng: -122.389994}
    },
    {
        name: "Mission Cliffs",
        placeId: "ChIJQ2qEqDB-j4ARfAbDE0-IWvo",
        position: {lat: 37.7610241, lng: -122.4147971}
    },
    {
        name: "Great Western Power Company",
        placeId: "ChIJiZODxK2Aj4ARTMot5wllmGU",
        position: {lat: 37.8255233, lng: -122.2887678}
    },
    {
        name: "Berkeley Ironworks",
        placeId: "ChIJzXxD1PV-hYAR4VEMx86aHVw",
        position: {lat: 37.8508457, lng: -122.2947798}
    }
];

// Gym class for each location to be displayed
class Gym {
    constructor (gi, marker, infowindow) {
        var self = this;
        this.uberEstimate = null;
        this.generalInfo = gi;
        this.marker = marker;
        this.details = null;
        this.content = "";
        this.infowindow = infowindow;

        this.marker.addListener("click", function() {
            infowindows.forEach(function(item){
                item.close();
            });

            self.updateSelected();
        });
    }

    updateSelected() {
        var self = this;
        // Animate marker
        self.marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){
            self.marker.setAnimation(null);
        }, 750);

        // Get Uber data and update infowindow
        if(!self.uberEstimate) {
            getUberInfo(self.generalInfo.position,
            {
                onsuccess:  function(result) {
                    self.uberEstimate = result.prices[0].estimate;
                    self.content = generateContent(self.details, self.uberEstimate);
                    self.infowindow.setContent(self.content);
                },
                onerror: function(result) {
                    self.content = generateContent(self.details, "No data");
                    self.infowindow.setContent(self.content);
                }
            });
        }

        // Populate Google Maps Data and open infowindow if model data has not be retrieved yet
        if(!self.details) {
            places.getDetails({"placeId": self.generalInfo.placeId}, function(place, status) {
                if(status == google.maps.places.PlacesServiceStatus.OK) {
                    self.details = place;
                    self.content = generateContent(self.details, (self.uberEstimate) ? self.uberEstimate: "Loading...");
                    self.infowindow.setContent(self.content);
                    self.infowindow.open(map, self.marker);
                }
            });
        }else{
            self.infowindow.setContent(self.content);
            self.infowindow.open(map, self.marker);
        }
    }
}

// Knockout ViewModel
var ViewModel = function(dataList) {
    var self = this;
    this.searchFocused = ko.observable(true);
    this.listVisible = ko.observable(true);
    this.currentLocation = ko.observable(null);
    this.query = ko.observable("");
    this.gymList = ko.observableArray(dataList);
    this.buttonClass = ko.observable("search");

    // Show only the locations that contain the query
    this.filterLocations =  ko.computed(function () {
        var filter = self.query().toLowerCase();
        if (!filter) {
            self.gymList().forEach(function(item) {
                item.marker.setVisible(true);
            });
            self.listVisible(true);
            return self.gymList();
        } else {
            self.currentLocation().infowindow.close();
            return ko.utils.arrayFilter(self.gymList(), function (item) {
                var shown = item.generalInfo.name.toLowerCase().indexOf(filter) !== -1;
                item.marker.setVisible(shown);
                return shown;
            });
        }
    });

    this.submitForm = function() {
        self.selectFirstLocation();
    };

    this.listItemClicked = function() {
        self.selectLocation(this);
    };

    this.inputClicked = function() {
        self.searchFocused(true);
    };

    this.mapClicked = function() {
        self.searchFocused(false);
    };

    this.selectLocation = function(loc) {
        infowindows.forEach(function(item){
            item.close();
        });
        self.currentLocation(loc);
        self.query(loc.generalInfo.name);
        loc.updateSelected();
    };

    this.selectFirstLocation = function() {
        var filteredLocations = self.filterLocations();
        if(filteredLocations.length > 0 && self.query().length > 0) {
            self.selectLocation(filteredLocations[0]);
        }
    };

    this.clearSearch = function() {
        self.currentLocation(null);
        self.query("");
        self.searchFocused(true);
    };

    this.query.subscribe(function(val) {
        if(val === "") {
            self.buttonClass("search");
        }else {
            self.buttonClass("close");
        }
    });

    this.searchFocused.subscribe(function(val) {
        if(!val) {
            // Hacky solution to deal with knockout js binding hiding the ul before triggering its click event
            setTimeout(function() { self.listVisible(false); }, 100);
        }else {
            self.listVisible(true);
        }
    });
};

// Get user location data
var userPosition = {lat: "", lng: ""};

navigator.geolocation.watchPosition(function(position) {
    // Update latitude and longitude
    userPosition.lat = position.coords.latitude;
    userPosition.lng = position.coords.longitude;
});

// Generate Markup for infowindow
function generateContent(details, uberMsg) {
    return  "<div class='iw-container'><h3 class='iw-title'>" + details.name + "</h3>" +
            "<div class='iw-section'><i class='material-icons'>place</i><span class='iw-info'>" +
                    formatAddress(details.formatted_address) + "</span></div>" +
            "<div class='iw-section'><i class='material-icons'>local_phone</i><span class='iw-info'>" +
                    details.formatted_phone_number + "</span></div>" +
            "<div class='iw-section'><i class='material-icons'>favorite</i><span class='iw-info'>" +
                    details.rating + "</span></div>" +
            "<div class='iw-section'><i class='material-icons'>public</i><span class='iw-info'><a class='iw-link' href='" +
                    details.website + "' target='blank'>" + formatUrl(details.website) + "</a></span></div>" +
            "<div class='uber-info'><img src='img/uber_rides_api_icon.svg'><div class='uber-estimate'>" + uberMsg + "</div></div></div>";
}


// Strips url to only domain
function formatUrl(url) {
    url = url.replace(/((https)|(http)):\/\//g, "");
    url = url.substr(0, url.indexOf("/"));
    return url;
}

// Format address for infowindow
function formatAddress(addr) {
    return addr.replace(",", "<br>");
}

// Get Uber price info
function getUberInfo(endPosition, callbacks) {
    return $.ajax({
        url: "https://api.uber.com/v1/estimates/price",
        method: "GET",
        data: {
            "server_token": "5GZQyy22lia0d4g1CqXr8OWLqhDE3M6MguQ14KQw",
            "start_latitude": userPosition.lat,
            "start_longitude": userPosition.lng,
            "end_latitude": endPosition.lat,
            "end_longitude": endPosition.lng
        },
        success: callbacks.onsuccess,
        error: callbacks.onerror
    });
}

// Google Maps
function initMap() {
    if(!google)
        alert("asdaosd");
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.6419628, lng: -122.5127333},
        zoom: 10
    });

    infowindow = new google.maps.InfoWindow;
    places = new google.maps.places.PlacesService(map);

    //https://www.sitepoint.com/animated-google-map-markers-css-javascript/
    var myoverlay = new google.maps.OverlayView();
    myoverlay.draw = function () {
        this.getPanes().markerLayer.className='markerLayer';
    };
    myoverlay.setMap(map);

    var bounds = new google.maps.LatLngBounds();

    // Populate map and extend bounds
    for(var i = 0, len = locations.length, marker; i < len; i++) {
        marker = new google.maps.Marker({
            position: locations[i].position,
            map: map,
            name: locations[i].name,
            id: locations[i].placeId,
            animation: google.maps.Animation.DROP
        });
        markers.push(marker);
        infowindows.push(new google.maps.InfoWindow);
        bounds.extend(marker.position);
    }

    map.fitBounds(bounds);

    var data = [];
    for(var i = 0, len = locations.length; i < len; i++) {
        data.push(new Gym(locations[i], markers[i], infowindows[i]));
    }
    viewModel = new ViewModel(data);
    ko.applyBindings(viewModel);
}

function googleError() {
    alert("Google Maps could not be loaded");
}