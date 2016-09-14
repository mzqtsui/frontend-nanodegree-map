var map;
var infowindow;
var places;

//https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=YOUR_API_KEY
//https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photoreference=CoQBdwAAAAxh2r8y0L0hZV5U2C2gRlyahgd_fSINh3RRo0PZZgX5xFxkegU5tP6yNghE0c9aZ17khJkSJkrh799IqIKQS_73uZBZpwzzKKW2sTZeGHkNVrnSfC03OhAHgtG7oaAOU1Mw6nzMqt3pM-WsTzxGn8P6hpBaMi-uB3f7RLz20MQ_EhDs_w4kY3e-pTW3e03h7hOJGhS-cGyQFP7GphVCHymm5L1ERg-bjQ&key=AIzaSyBP-CUa9ZmcC4gUEC3idcvHBaUE3dKODBY

var planetGraniteData = {
   "html_attributions" : [],
   "result" : {
      "address_components" : [
         {
            "long_name" : "924",
            "short_name" : "924",
            "types" : [ "street_number" ]
         },
         {
            "long_name" : "Mason Street",
            "short_name" : "Old Mason St",
            "types" : [ "route" ]
         },
         {
            "long_name" : "Presidio",
            "short_name" : "Presidio",
            "types" : [ "neighborhood", "political" ]
         },
         {
            "long_name" : "San Francisco",
            "short_name" : "SF",
            "types" : [ "locality", "political" ]
         },
         {
            "long_name" : "San Francisco County",
            "short_name" : "San Francisco County",
            "types" : [ "administrative_area_level_2", "political" ]
         },
         {
            "long_name" : "California",
            "short_name" : "CA",
            "types" : [ "administrative_area_level_1", "political" ]
         },
         {
            "long_name" : "United States",
            "short_name" : "US",
            "types" : [ "country", "political" ]
         },
         {
            "long_name" : "94129",
            "short_name" : "94129",
            "types" : [ "postal_code" ]
         },
         {
            "long_name" : "1602",
            "short_name" : "1602",
            "types" : [ "postal_code_suffix" ]
         }
      ],
      "adr_address" : "\u003cspan class=\"street-address\"\u003e924 Old Mason St\u003c/span\u003e, \u003cspan class=\"locality\"\u003eSan Francisco\u003c/span\u003e, \u003cspan class=\"region\"\u003eCA\u003c/span\u003e \u003cspan class=\"postal-code\"\u003e94129-1602\u003c/span\u003e, \u003cspan class=\"country-name\"\u003eUSA\u003c/span\u003e",
      "formatted_address" : "924 Old Mason St, San Francisco, CA 94129, USA",
      "formatted_phone_number" : "(415) 692-3434",
      "geometry" : {
         "location" : {
            "lat" : 37.8041834,
            "lng" : -122.4680738
         },
         "viewport" : {
            "northeast" : {
               "lat" : 37.8045617,
               "lng" : -122.46803465
            },
            "southwest" : {
               "lat" : 37.8040573,
               "lng" : -122.46819125
            }
         }
      },
      "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
      "id" : "b87c0c956c57068754a5e45b6ffb2f0cfef03b05",
      "international_phone_number" : "+1 415-692-3434",
      "name" : "Planet Granite San Francisco",
      "opening_hours" : {
         "open_now" : true,
         "periods" : [
            {
               "close" : {
                  "day" : 0,
                  "time" : "1800"
               },
               "open" : {
                  "day" : 0,
                  "time" : "0800"
               }
            },
            {
               "close" : {
                  "day" : 1,
                  "time" : "2300"
               },
               "open" : {
                  "day" : 1,
                  "time" : "0600"
               }
            },
            {
               "close" : {
                  "day" : 2,
                  "time" : "2300"
               },
               "open" : {
                  "day" : 2,
                  "time" : "0600"
               }
            },
            {
               "close" : {
                  "day" : 3,
                  "time" : "2300"
               },
               "open" : {
                  "day" : 3,
                  "time" : "0600"
               }
            },
            {
               "close" : {
                  "day" : 4,
                  "time" : "2300"
               },
               "open" : {
                  "day" : 4,
                  "time" : "0600"
               }
            },
            {
               "close" : {
                  "day" : 5,
                  "time" : "2300"
               },
               "open" : {
                  "day" : 5,
                  "time" : "0600"
               }
            },
            {
               "close" : {
                  "day" : 6,
                  "time" : "2000"
               },
               "open" : {
                  "day" : 6,
                  "time" : "0800"
               }
            }
         ],
         "weekday_text" : [
            "Monday: 6:00 AM – 11:00 PM",
            "Tuesday: 6:00 AM – 11:00 PM",
            "Wednesday: 6:00 AM – 11:00 PM",
            "Thursday: 6:00 AM – 11:00 PM",
            "Friday: 6:00 AM – 11:00 PM",
            "Saturday: 8:00 AM – 8:00 PM",
            "Sunday: 8:00 AM – 6:00 PM"
         ]
      },
      "photos" : [
         {
            "height" : 3264,
            "html_attributions" : [
               "\u003ca href=\"https://maps.google.com/maps/contrib/118355865630073247957/photos\"\u003eChase Hunter\u003c/a\u003e"
            ],
            "photo_reference" : "CoQBdwAAAAxh2r8y0L0hZV5U2C2gRlyahgd_fSINh3RRo0PZZgX5xFxkegU5tP6yNghE0c9aZ17khJkSJkrh799IqIKQS_73uZBZpwzzKKW2sTZeGHkNVrnSfC03OhAHgtG7oaAOU1Mw6nzMqt3pM-WsTzxGn8P6hpBaMi-uB3f7RLz20MQ_EhDs_w4kY3e-pTW3e03h7hOJGhS-cGyQFP7GphVCHymm5L1ERg-bjQ",
            "width" : 2448
         },
         {
            "height" : 3024,
            "html_attributions" : [
               "\u003ca href=\"https://maps.google.com/maps/contrib/116036279464096788637/photos\"\u003eNathan Gildart\u003c/a\u003e"
            ],
            "photo_reference" : "CoQBdwAAAKW0rs_m2rUPQoYtvhj9_vVJB_0BbLn_M8quCgQ3cwLxfQw0aUNuuUD_s-G1hbnB4TyJIJp5TRRMkVbe1GEa5taUVfY64Jkhcsk_Wz7dxoLLkX7Vc1-vMqYo2y_BDdXOwQ1yGF-hRaKIJ-HJq05V50YsQb_3Vso4hanIKueroRIOEhBTXoYYQTsDM7F6hNi5V1aGGhT7PCNGEclQYQMIF1phsOJWNKpDnw",
            "width" : 4032
         },
         {
            "height" : 3264,
            "html_attributions" : [
               "\u003ca href=\"https://maps.google.com/maps/contrib/109776618474634873591/photos\"\u003eNha Ha\u003c/a\u003e"
            ],
            "photo_reference" : "CoQBcwAAABqk-kTB12_XnIN1qJx2g-B4V15-EZ9sCHNhQ-MGJ9ejKYrxKC9yiuHQvA9q2XQX9T-4Ro15V0sy0GvBywNl5zfjVtdj06_M71rYoHlTckYsRABSRoMuz9-09XlLpcV-9LCUwHlFjQw6c4zX1xLuqQ-LWWSoqSuoSTVlz6Rp6WOkEhAZaY5bEkeTwPKalA4epgBuGhTqdjiLrlyJ8-qJF034w-jRKkVDWQ",
            "width" : 2448
         },
         {
            "height" : 846,
            "html_attributions" : [
               "\u003ca href=\"https://maps.google.com/maps/contrib/103569855394497320613/photos\"\u003ePlanet Granite San Francisco\u003c/a\u003e"
            ],
            "photo_reference" : "CoQBcwAAACe_FsztdTpe4RDm9rlZozdVb2F97wcSU8EpcbQFawkz9ejypihGplJeG97KQd_gdyp1dzZodFcsa9H8J1mtsTzt784ex1l_irK4tx2JpxnAq0vEIwvpMV3p99uoaopmYlEoKS9IqGnrmOAQqAV_J1o4tlWKz0w5JPorIK1i5zsLEhBUU1ANoK1EoVHpwOb5DOjvGhTNY7801CaWSHN2oKRpDESImgMwPw",
            "width" : 846
         },
         {
            "height" : 960,
            "html_attributions" : [
               "\u003ca href=\"https://maps.google.com/maps/contrib/103569855394497320613/photos\"\u003ePlanet Granite San Francisco\u003c/a\u003e"
            ],
            "photo_reference" : "CoQBcwAAACx5uI1Iz5EbgVbrHVBjDXtO1NKUWlXDyK-GIz8eyogafoWNuykrQhofw5wa18Nr-1yVEzN16HV_vBFFjFm86fLybdnh4bRt8ZsmmDiWYdJXkyENLX6SxOzpK4DlT86Ge99g-sBLnTjh7KmZsFoGyR2i6uyZptq1fkj7MMKIJpFuEhAkYxfzEcelA_Eyv9tYbCNDGhQyYeXwdSakFtzFlnWRF7lLn1jtyQ",
            "width" : 1280
         },
         {
            "height" : 3264,
            "html_attributions" : [
               "\u003ca href=\"https://maps.google.com/maps/contrib/109383364523945736298/photos\"\u003eKathleen S\u003c/a\u003e"
            ],
            "photo_reference" : "CoQBcwAAAAUx4oX0Q8fDDjZMbINWyrRaHAD4j7RZpnghWY62CUWzS8ZjBZZc8Sx5uVI-aqTiUz_nxXnYdIcPbdfe4FwxyGsSoWHC6XmRI_Rde63qCiDpoZcedJJJ_duHQx91hfaKe3yjVtaNO0yNsDHSlc_f8W0XX-0v1umENtO4mR2IRN17EhBBqBA-fYq-If5Tl7DtjB38GhRA-rWX3qEhXxtNiHSVCXnHKV36NQ",
            "width" : 2448
         },
         {
            "height" : 1670,
            "html_attributions" : [
               "\u003ca href=\"https://maps.google.com/maps/contrib/103569855394497320613/photos\"\u003ePlanet Granite San Francisco\u003c/a\u003e"
            ],
            "photo_reference" : "CoQBcwAAADnhseXrqcLf5Vxl7phIW32gY1Y-mHpxohVObT5heVUo5u8W_t_J0LrHfArjhD6WhBDNqvS-OX__0I6CmsmZRVm77S87tNQQEkWPDLfIAtkOTcMhpEPTnX0sH9BmXxXyfvHppr-OeSvmYdvEvkMhjURNO-O18awzva4HR1yRKVp6EhAiE99sswe74nTkdHiPNchiGhQKkdCMess0XKTZj2s5LF6Y7j4X6Q",
            "width" : 2048
         },
         {
            "height" : 3264,
            "html_attributions" : [
               "\u003ca href=\"https://maps.google.com/maps/contrib/109776618474634873591/photos\"\u003eNha Ha\u003c/a\u003e"
            ],
            "photo_reference" : "CoQBcwAAAKpr9xmYE0Be_MrpvWwAHfF7dmFRjtAL-6Vwrsw5QlhDiOlJE97pjio9G6s4qLIBroRGG8b_J7bqZRC_6wlIHArbJ576D3rs3JS0bxMKHyKbqbgFTq8Dyhq8pOcHsQqvUjIo0eg3r1Q4g6DaNvbczR-hS92SGYz5CNTFA5PHTF5NEhCHqnMZf6veZtATOcKuKbC4GhQc-Hk96HESPcMX65OMsL5-GsBtOw",
            "width" : 2448
         },
         {
            "height" : 3264,
            "html_attributions" : [
               "\u003ca href=\"https://maps.google.com/maps/contrib/109776618474634873591/photos\"\u003eNha Ha\u003c/a\u003e"
            ],
            "photo_reference" : "CoQBcwAAACgqwQBLhDu-BwCwvChk1w7FbQ7N7Jk1UViM7MqENJ767g_xH_3-0wbjbNPNV7oO6_Ij49z5kTKoF6cJ14YYzM0gahofzbPj_gPan9_NFNNamfWP2Nc0w33P8QbvW_94_85hY7VMcE-rp5Bt6YuhymfZ715O4Z-nnfaIqL1ir74bEhCORT3Gsl2FoA-nIljznUBwGhTGuWjHBuvkWdhU6JeHKWLWxCWIAQ",
            "width" : 2448
         },
         {
            "height" : 2048,
            "html_attributions" : [
               "\u003ca href=\"https://maps.google.com/maps/contrib/103569855394497320613/photos\"\u003ePlanet Granite San Francisco\u003c/a\u003e"
            ],
            "photo_reference" : "CoQBcwAAAHB5_YLT8xze5SZrTyeNOke_xeq0z-fa16Qldt-w6l0xwfk9nbkFdsDiVmf8TXWDao2vCaW_NG0q1psqE2ShJQrL7Ne8IFMcgpu7Sx4ve-uQumhCRM2xN4_YX2YfCiMpehNQ8RU4Yg5l8XBrf5koxr6GBaPvruXwvU5QhYc0wZGCEhDaL-qn3ewxjDw2gJwNJL0BGhSXkX60IPTTaIqbNVObxPTsXzVsIw",
            "width" : 1313
         }
      ],
      "place_id" : "ChIJYR3cR92GhYAReMwzpHwVcI8",
      "rating" : 4.5,
      "reference" : "CnRwAAAABMKCwMhheVq-H7Ayv9qE8ENpAVBzkCNPADGv6L1Sl3hVevHGrfOPScFzEPW7QKLXnaOOLtk6iAeIVD3vQjt1lX-vCNF4REawwNtzB80INM6M5vQgcFcc5iHGU3xF3gq7-Adj1D1YrNVoY0d0iItwtBIQMne0RLY2I_SWMloODzIZYBoUTLcHczCbdBqL9vPz0xbg7Xz9UFY",
      "reviews" : [
         {
            "aspects" : [
               {
                  "rating" : 2,
                  "type" : "overall"
               }
            ],
            "author_name" : "Aimee Roseborrough",
            "author_url" : "https://plus.google.com/100985895961058087430",
            "language" : "en",
            "profile_photo_url" : "//lh5.googleusercontent.com/-3x1NEZVyb84/AAAAAAAAAAI/AAAAAAAAAiU/tL8JLTpPJ74/photo.jpg",
            "rating" : 4,
            "text" : "This is a review for people who already climb.  First, if you want to lead, be sure to bring a rope (some gyms lend lead ropes now, if you think that comment sound stupid).  Second, the route setting is not as good as the Planet Granite in Portland.  Also, you're supposed to be 14 to boulder.  WTF?!?  If Ashima had walked in a couple years ago, you going to tell me that you're not going to let her boulder?!?  Thankfully they didn't seem to enforce this rule and our 9 year old did her first V3 here!  \n\nFinally, the employees seem super jaded.  Especially the gal with blue hair.  She seemed like we were bothering her when we checked in.  Thank goodness we didn't have to take a belay test since we'd already taken one at the Portland Planet Granite.  I'm pretty sure she would have failed us just to be a jerk.  \n\nAnyways, we've climbed at 9 gyms this summer and I'd say this one was #5 in terms of ranking.  Not the best, but not the worst either.",
            "time" : 1472686243
         },
         {
            "aspects" : [
               {
                  "rating" : 3,
                  "type" : "overall"
               }
            ],
            "author_name" : "Margaret Tides",
            "author_url" : "https://plus.google.com/117727455387398577466",
            "language" : "en",
            "profile_photo_url" : "//lh3.googleusercontent.com/-XCXIwMU9Jww/AAAAAAAAAAI/AAAAAAAAAwg/YbEETEgvqhU/photo.jpg",
            "rating" : 5,
            "text" : "Great place! Plenty of space to boulder. Great yoga classes (wish they had a few more \"Yin\" options - but can't complain). And the locker room/shower areas are clean with plenty of room.",
            "time" : 1462907603
         },
         {
            "aspects" : [
               {
                  "rating" : 2,
                  "type" : "overall"
               }
            ],
            "author_name" : "Robert Boscacci",
            "author_url" : "https://plus.google.com/110824386276513312580",
            "language" : "en",
            "profile_photo_url" : "//lh4.googleusercontent.com/-XQb8z3wofMQ/AAAAAAAAAAI/AAAAAAAACes/CKohopk6ZCw/photo.jpg",
            "rating" : 4,
            "text" : "Excellent route-setting, great place to learn to climb, with a commanding view of the golden gate bridge. Not too crowded, probably because of the less accessible location. Not a lot of parking available, so bike or uber in.",
            "time" : 1465589358
         },
         {
            "aspects" : [
               {
                  "rating" : 3,
                  "type" : "overall"
               }
            ],
            "author_name" : "Beatriz Sousa",
            "author_url" : "https://plus.google.com/102497625937786230033",
            "language" : "en",
            "profile_photo_url" : "//lh3.googleusercontent.com/-5ojQ7TE-5CE/AAAAAAAAAAI/AAAAAAAAFz0/lJdTFAcCLRw/photo.jpg",
            "rating" : 5,
            "text" : "Absolutely love this gym.\n\nPeople that attend this gym range from just families and their kids and babies to full blown climbing muscle machines.\n\nIt has an amazing set of walls for both bouldering and top rope.\n\nThe staff is very chill and the gym is kept impeccable.\n\nYou have beautiful views of Crissy fields and quite a decent free weights area. I wish they could encroach a little bit into the open spaces around it for more gym space, or at least some outdoor stuff like tire flipping :)\n\nLove this place",
            "time" : 1459827899
         },
         {
            "aspects" : [
               {
                  "rating" : 2,
                  "type" : "overall"
               }
            ],
            "author_name" : "John Gelb",
            "author_url" : "https://plus.google.com/111717262311636103965",
            "language" : "en",
            "profile_photo_url" : "//lh3.googleusercontent.com/-Bgy0aBKYJHs/AAAAAAAAAAI/AAAAAAAAJ-M/eu9sbyaIgn0/photo.jpg",
            "rating" : 4,
            "text" : "Great bouldering and top roping. Rented decent shoes for cheap and they were nice enough to comp me a chalk bag for the day. Plenty of space and the changing rooms are way better than you'd expect. Great to have some sauna time here after bouldering as well. ",
            "time" : 1451463133
         }
      ],
      "scope" : "GOOGLE",
      "types" : [ "gym", "health", "point_of_interest", "establishment" ],
      "url" : "https://maps.google.com/?cid=10335784769890274424",
      "utc_offset" : -420,
      "vicinity" : "924 Mason Street, San Francisco",
      "website" : "http://planetgranite.com/locations/sanfrancisco/sf_faq.php"
   },
   "status" : "OK"
};


class Gym {
    constructor (gi, marker) {
        var self = this;
        this.uberInfo = {};
        this.generalInfo = gi;
        this.marker = marker;
        this.details = null;
        this.content = "";

        this.marker.addListener("click", function() {
            if(!self.details) {
                places.getDetails({"placeId": self.generalInfo.placeId}, function(place, status) {
                    if(status == google.maps.places.PlacesServiceStatus.OK) {
                        self.details = place;
                        console.log(place);
                        self.content += "<h3>" + self.generalInfo.name + "</h3>";

                        self.content += "<div>Rating: " + self.details.rating + "</div>";

                        self.content += "<a href='" + self.details.website + "' target='blank'>Website</a>";

                        infowindow.setContent(self.content);
                        infowindow.open(map, marker);
                    }
                });
            }else{
                infowindow.setContent(self.content);
                infowindow.open(map, marker);
            }
        });
        //TODO: add rates manually

    }
}

var ViewModel = function(dataList) {
    var self = this;
    this.searchFocused = ko.observable(false);
    this.currentLocation = ko.observable(null);
    this.query = ko.observable("");
    this.gymList = ko.observableArray(dataList);

    // Show only the locations that contain the query
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

    this.listItemClicked = function() {
        self.selectLocation(this);
        self.searchFocused(true);
    };

    this.selectLocation = function(loc) {
        self.currentLocation(loc);
        self.query(loc.generalInfo.name);
    };

    this.selectFirstLocation = function() {
        var filteredLocations = self.filterLocations();
        if(filteredLocations.length > 0 && self.query().length > 0) {
            self.selectLocation(filteredLocations[0])
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

    infowindow = new google.maps.InfoWindow;
    places = new google.maps.places.PlacesService(map);

    var locations = [
        {
            name: "Planet Granite San Francisco",
            placeId: "ChIJYR3cR92GhYAReMwzpHwVcI8",
            position: {lat: 37.8041267, lng: -122.4685219},
            address: "924 Old Mason St, San Francisco, CA 94129, USA"
        },
        {
            name: "Dogpatch Boulders",
            placeId: "ChIJ2xYuRrp_j4ARU9Lx0LBnqrY",
            position: {lat: 37.7566538, lng: -122.389994},
            address: "2573 3rd St, San Francisco, CA 94107, USA"
        },
        {
            name: "Mission Cliffs",
            placeId: "ChIJQ2qEqDB-j4ARfAbDE0-IWvo",
            position: {lat: 37.7610241, lng: -122.4147971},
            address: "2295 Harrison St, San Francisco, CA 94110, USA"
        },
        {
            name: "Great Western Power Company",
            placeId: "ChIJiZODxK2Aj4ARTMot5wllmGU",
            position: {lat: 37.8255233, lng: -122.2887678},
            address: "520 20th St, Oakland, CA 94612, USA"
        },
        {
            name: "Berkeley Ironworks",
            placeId: "ChIJzXxD1PV-hYAR4VEMx86aHVw",
            position: {lat: 37.8508457, lng: -122.2947798},
            address: "800 Potter St, Berkeley, CA 94710, USA"
        }
    ];

    var bounds = new google.maps.LatLngBounds();

    for(var i = 0, len = locations.length, marker; i < len; i++) {
        marker = new google.maps.Marker({
            position: locations[i].position,
            map: map,
            name: locations[i].name,
            id: locations[i].placeId
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

// Google Maps API: https://developers.google.com/maps/documentation/javascript/geocoding#reverse-geocoding-by-place-id
// This function is called when the user clicks the UI button requesting
// a reverse geocode.
function geocodePlaceId(geocoder, map, infowindow) {
  var placeId = document.getElementById('place-id').value;
  geocoder.geocode({'placeId': placeId}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        map.setZoom(11);
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
        infowindow.setContent(results[0].formatted_address);
        infowindow.open(map, marker);
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}


