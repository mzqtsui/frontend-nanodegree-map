(function() {
    "use strict";

    class Gym {
        constructor (gi) {
            this.uberInfo = {};
            this.generalInfo = gi;
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
                return self.gymList();
            } else {
                return ko.utils.arrayFilter(self.gymList(), function (item) {
                    return item.generalInfo.name.toLowerCase().indexOf(filter) !== -1;
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



    function getData() {
        return [
            {
                name: "Planet Granite San Francisco",
                address: "924 Old Mason St, San Francisco, CA 94129, United States",
                location: [37.6419628, -122.5127333],
                url: "planetgranite.com",
                phone: "+1 415-692-3434",
                hours: "6AM - 11PM"
            },
            {
                name: "Dogpatch Boulders",
                address: "924 Old Mason St, San Francisco, CA 94129, United States",
                location: [37.6419628, -122.5127333],
                url: "planetgranite.com",
                phone: "+1 415-692-3434",
                hours: "6AM - 11PM"
            },
            {
                name: "Mission Cliffs",
                address: "924 Old Mason St, San Francisco, CA 94129, United States",
                location: [37.6419628, -122.5127333],
                url: "planetgranite.com",
                phone: "+1 415-692-3434",
                hours: "6AM - 11PM"
            },
            {
                name: "Great Western Power Company",
                address: "924 Old Mason St, San Francisco, CA 94129, United States",
                location: [37.6419628, -122.5127333],
                url: "planetgranite.com",
                phone: "+1 415-692-3434",
                hours: "6AM - 11PM"
            },
            {
                name: "Berkeley Ironworks",
                address: "924 Old Mason St, San Francisco, CA 94129, United States",
                location: [37.6419628, -122.5127333],
                url: "planetgranite.com",
                phone: "+1 415-692-3434",
                hours: "6AM - 11PM"
            }
        ];
    }

    function parseData(dataList) {
        var ret = [];
        for(var i = 0, len = dataList.length; i < len; i++) {
            ret.push(new Gym(dataList[i]));
        }
        return ret;
    }

    ko.applyBindings(new ViewModel(parseData(getData())));


    //TODO: Uber API

})();

var markers = [];

function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.6419628, lng: -122.5127333},
        zoom: 10
    });

    var locations = [
        {
            title: "Planet Granite San Francisco",
            position: {lat: 37.8041267, lng: -122.4685219}
        },
        {
            title: "Dogpatch Boulders",
            position: {lat: 37.7566538, lng: -122.389994}
        },
        {
            title: "Mission Cliffs",
            position: {lat: 37.7610241, lng: -122.4147971}
        },
        {
            title: "Great Western Power Company",
            position: {lat: 37.8255233, lng: -122.2887678}
        },
        {
            title: "Berkeley Ironworks",
            position: {lat: 37.8508457, lng: -122.2947798}
        }
    ];

    var bounds = new google.maps.LatLngBounds();

    for(var i = 0, len = locations.length, marker; i < len; i++) {
        marker = new google.maps.Marker({
            position: locations[i].position,
            map: map,
            title: locations[i].title,
            id: i
        });
        markers.push(marker);

        bounds.extend(marker.position);
    }

    map.fitBounds(bounds);

}