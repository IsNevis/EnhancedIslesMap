var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    var locations = JSON.parse(xhttp.responseText).locations;
    for(var a in locations) {
      var loc = locations[a];
      for(var i in markers.Isles) {
        var m = markers.Isles[i];
        if(m.icon == loc.icon) {
          if(markersDB[m.groupName]) {
            markersDB[m.groupName].raw.push({
              hovertext: loc.name,
              text: (loc.description ? '<strong>' + loc.name + '</strong>: ' + loc.description : loc.name),
              x: loc.x,
              y: loc.y,
              z: loc.z,
              icon: m.icon
            });
            break;
          }
        }
      }
    }
    overviewer.util.initialize();
  }
};
xhttp.open('GET', 'https://raw.githubusercontent.com/IsNevis/EnhancedIslesMap/main/data/locationsData.json', true);
xhttp.send();

var markersDB = {
  // groupname is used to create a link in markerDB For Example "Armours" : {} is used to create a link in markerDB
  // If icon in database =icon in markers.js then it gets grouped in the groupname
  // Display names dont serve any purpose
  // set createInfoWindow to false just incase
  // checked should be true if you want it displayed in map load

  "Peaceful Quests": {
    created: true,
    name: "Peaceful Quests",
    raw: [],
  },
  "Easy Quests": {
    created: true,
    name: "Easy Quests",
    raw: [],
  },
  "Normal Quests": {
    created: true,
    name: "Normal Quests",
    raw: [],
  },
  "Hard Quests": {
    created: true,
    name: "Hard Quests",
    raw: [],
  },
  "Hardcore Quests": {
    created: true,
    name: "Hardcore Quests",
    raw: [],
  },
  "Shortcuts": {
    created: true,
    name: "Shortcuts",
    raw: [],
  },
  "Cave": {
    created: true,
    name: "Cave",
    raw: [],
  },
  "General Store": {
    created: true,
    name: "General Store",
    raw: [],
  },
  "Boat Merchants": {
    created: true,
    name: "Boat Merchants",
    raw: [],
  },
  "Marketeer": {
    created: true,
    name: "Marketeer",
    raw: [],
  },
  "Alchemy Station": {
    created: true,
    name: "Alchemy Station",
    raw: [],
  },
  "Armouring Station": {
    created: true,
    name: "Armouring Station",
    raw: [],
  },
  "Cooking Station": {
    created: true,
    name: "Cooking Station",
    raw: [],
  },
  "Jeweling Station": {
    created: true,
    name: "Jeweling Station",
    raw: [],
  },
  "Weaponsmithing Station": {
    created: true,
    name: "Weaponsmithing Station",
    raw: [],
  },
  "Woodworking Station": {
    created: true,
    name: "Woodworking Station",
    raw: [],
  },
  "Altars": {
    created: true,
    name: "Altars",
    raw: [],
  },
  "Boss": {
    created: true,
    name: "Boss",
    raw: [],
  },
  "Banks": {
    created: true,
    name: "Banks",
    raw: [],
  },
};
