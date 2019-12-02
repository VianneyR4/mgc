    /* ==============================================
                MAP -->
                =============================================== */
    (function($) {
        "use strict";
        var locations = [
            ['<div class="infobox"><h3 class="title"><a href="#">NTRE BUREAU AU CONGO</a></h3><span>N-K GOMA TOWN 2045 / 65</span><span>+243 840 566 004</span></div>', -1.647826,
                29.186436,
                2
            ]
        ];
        var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                scrollwheel: false,
                navigationControl: true,
                mapTypeControl: false,
                scaleControl: false,
                draggable: true,
                styles: [{
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#444444"
                        }]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#f2f2f2"
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [{
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "simplified"
                        }]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{
                                "color": "#3ac5c8"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ],
                center: new google.maps.LatLng(-1.647826, 29.186436),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

        );
        var infowindow = new google.maps.InfoWindow();
        var marker,
            i;
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: 'images/apple-touch-icon.png'
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    })(jQuery);