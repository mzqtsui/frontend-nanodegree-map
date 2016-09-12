((function () {
    "use strict";

    class Gym {
        constructor (gi) {
            this.uberInfo = {};
            this.generalInfo = gi;

        }
    }

    var ViewModel = function (dataList) {
        var self = this;
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
    };

    //TODO: Google Maps API
    function getData () {
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

    function parseData (dataList) {
        var ret = [];
        for(var i = 0, len = dataList.length; i < len; i++) {
            ret.push(new Gym(dataList[i]));
        }
        return ret;
    }

    ko.applyBindings(new ViewModel(parseData(getData())));


    //TODO: Uber API

})());