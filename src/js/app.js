var map;


class Gym {
    constructor (gi, marker) {
        this.uberInfo = {};
        this.generalInfo = gi;
        this.marker = marker;
        //TODO: add rates manually

    }
}

var ViewModel = function(dataList) {
    var self = this;
    this.searchFocused = ko.observable(false);
    this.currentLocation = ko.observable(null);
    this.query = ko.observable("");
    this.gymList = ko.observableArray(dataList);

    this.filterLocations =  ko.computed(function () {
        var filter = self.query().toLowerCase();
        if (!filter) {
            self.gymList().forEach(function(item) {
                item.marker.setVisible(true);
            });
            return self.gymList();
        } else {
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

    this.selectLocation = function() {
        self.currentLocation(this);
        self.query(this.generalInfo.name);
        self.searchFocused(true);
        console.log(self.searchFocused());
    };

    this.selectFirstLocation = function() {
        if(self.filterLocations().length > 0 && self.query().length > 0) {
            self.currentLocation(self.filterLocations()[0]);
            self.query(self.currentLocation().generalInfo.name);
            console.log("select");
        }
        //TODO show error not found


    };

    this.clearSearch = function() {
        self.currentLocation(null);
        self.query("");
        self.searchFocused(true);
    };
};

//TODO: Google Maps API


//TODO: Uber API

var markers = [];

function initMap() {
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.6419628, lng: -122.5127333},
        zoom: 10
    });

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

    var bounds = new google.maps.LatLngBounds();

    for(var i = 0, len = locations.length, marker; i < len; i++) {
        marker = new google.maps.Marker({
            position: locations[i].position,
            map: map,
            name: locations[i].name,
            id: i
        });
        markers.push(marker);

        bounds.extend(marker.position);
    }

    map.fitBounds(bounds);


    var data = [];
    for(var i = 0, len = locations.length; i < len; i++) {
        data.push(new Gym(locations[i], markers[i]));
    }

    ko.applyBindings(new ViewModel(data));


}