((function () {
    "use strict";

    class Gym {
        constructor (gi) {
            this.uberInfo = {};
            this.generalInfo = gi;

        }
    }

    var ViewModel = function (dataList) {
        this.gymList = ko.observableArray(dataList);
        console.log(this.gymList());
    };




    //TODO: Google Maps API
    function getData () {
        return [
            {
                name: "Planet Granite San Francisco 0",
                address: "924 Old Mason St, San Francisco, CA 94129, United States",
                location: [37.6419628, -122.5127333],
                url: "planetgranite.com",
                phone: "+1 415-692-3434",
                hours: "6AM - 11PM"
            },
            {
                name: "Planet Granite San Francisco 1",
                address: "924 Old Mason St, San Francisco, CA 94129, United States",
                location: [37.6419628, -122.5127333],
                url: "planetgranite.com",
                phone: "+1 415-692-3434",
                hours: "6AM - 11PM"
            },
            {
                name: "Planet Granite San Francisco 2",
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