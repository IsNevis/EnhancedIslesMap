var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "data/img/markers/overviewer/signpost.png",
            "signMarker": "data/img/markers/overviewer/signpost_icon.png",
            "bedMarker": "data/img/markers/overviewer/bed.png",
            "spawnMarker": "data/img/markers/overviewer/marker_home.png",
            "spawnMarker2x": "data/img/markers/overviewer/marker_home_2x.png",
            "queryMarker": "data/img/markers/overviewer/marker_location.png",
            "queryMarker2x": "data/img/markers/overviewer/marker_location_2x.png",
            "compass": {
                "0": "data/img/gui/compass_upper-left.png",
                "1": "data/img/gui/compass_upper-right.png",
                "2": "data/img/gui/compass_lower-right.png",
                "3": "data/img/gui/compass_lower-left.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Isles"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1642105508",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Isles",
            "zoomLevels": 9,
            // defaultZoom does not do anything(Tested using 1 and 2) for some reason, it just goes to min(url) 
            "defaultZoom": 1,
            // maxzoom is set to 7 to make sure people dont zoom in too much that thers isnt any tile images 
            "maxZoom": 7,
            "path": "./data/renders/Isles/",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Isles",
            "last_rendertime": 1641640000,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            // showlocationmarker was true true in wynn version
            "showlocationmarker": false,
            "showspawn": false,
            "spawn": [
                -636,
                64,
                1246
            ],
            "center": [
                785,
                64,
                -464
            ],
            // changing minZoom to "*" will allow you to go further out(-9 according to url)
            "minZoom": 2,
            "north_direction": 0
        }
    ]
};
