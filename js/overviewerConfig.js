var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "data/img/markers/overviewer/signpost.png",
            "signMarker": "data/img/markers/overviewer/signpost_icon.png",
            "bedMarker": "data/img/markers/overviewer/bed.png",
            "spawnMarker": "data/img/markers/overviewer/markers/marker_home.png",
            "spawnMarker2x": "data/img/markers/overviewer/markers/marker_home_2x.png",
            "queryMarker": "data/img/markers/overviewer/markers/marker_location.png",
            "queryMarker2x": "data/img/markers/overviewer/marker_location_2x.png",
            "compass": {
                "0": "data/img/nav/compass_upper-left.png",
                "1": "data/img/nav/compass_upper-right.png",
                "3": "data/img/nav/compass_lower-left.png",
                "2": "data/img/nav/compass_lower-right.png"
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
        "debug": false,
        "cacheTag": "1641942840",
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
            "zoomLevels": 7,
            "defaultZoom": 2,
            "maxZoom": 5,
            "path": "data/renders/Isles",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Isles",
            "last_rendertime": 1641640000,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                785,
                64,
                -464
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
