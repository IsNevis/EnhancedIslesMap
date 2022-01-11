var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    var locations = JSON.parse(xhttp.responseText).locations;
    for(var a in locations) {
      var loc = locations[a];
      for(var i in markers.normalrender) {
        var m = markers.normalrender[i];
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
xhttp.open('GET', 'https://raw.githubusercontent.com/IsNevis/SkyBlockIslesMap/master/data/markersDB.json', true);
xhttp.send();

var markersDB = {
  "Armours": {
    "created": true,
    "name": "Armours",
    "raw": []
  },
  "Banks": {
    "created": true,
    "name": "Banks",
    "raw": []
  },
  "BoatMerchants": {
    "created": true,
    "name": "BoatMerchants",
    "raw": []
  },
  "BookStores": {
    "created": true,
    "name": "BookStores",
    "raw": []
  },
  "BowlMerchant": {
    "created": true,
    "name": "BowlMerchant",
    "raw": []
  },
  "BucketMerchant": {
    "created": true,
    "name": "BucketMerchant",
    "raw": []
  },
  "Dungeons": {
    "created": true,
    "name": "Dungeons",
    "raw": []
  },
  "EggMerchant": {
    "created": true,
    "name": "EggMerchant",
    "raw": []
  },
  "FishMerchant": {
    "created": true,
    "name": "FishMerchant",
    "raw": []
  },
  "HorseMerchant": {
    "created": true,
    "name": "HorseMerchant",
    "raw": []
  },
  "Identifier": {
    "created": true,
    "name": "Identifier",
    "raw": []
  },
  "ItemBuyer": {
    "created": true,
    "name": "Item Buyer",
    "raw": []
  },
  "JunkMerchants": {
    "created": true,
    "name": "JunkMerchants",
    "raw": []
  },
  "KeyMerchant": {
    "created": true,
    "name": "KeyMerchant",
    "raw": []
  },
  "LiquidMerchant": {
    "created": true,
    "name": "Identifier",
    "raw": []
  },
  "MushroomMerchant": {
    "created": true,
    "name": "MushroomMerchant",
    "raw": []
  },
  "NetherPortal": {
    "created": true,
    "name": "NetherPortal",
    "raw": []
  },
  "PotatoMerchant": {
    "created": true,
    "name": "PotatoMerchant",
    "raw": []
  },
  "Potions": {
    "created": true,
    "name": "Potions",
    "raw": []
  },
  "Quests": {
    "created": true,
    "name": "Quests",
    "raw": []
  },
  "ScrollMerchant": {
    "created": true,
    "name": "ScrollMerchant",
    "raw": []
  },
  "Weapons": {
    "created": true,
    "name": "Weapons",
    "raw": []
  },
  "WheatMerchant": {
    "created": true,
    "name": "WheatMerchant",
    "raw": []
  },
  "WoolMerchant": {
    "created": true,
    "name": "WoolMerchant",
    "raw": []
  },
  "AccessoryMerchant": {
    "created": true,
    "name": "AccessoryMerchant",
    "raw": []
  },
  "WaterBottleMerchant": {
    "created": true,
    "name": "WaterBottleMerchant",
    "raw": []
  },
  "Seasail Merchant": {
    "created": true,
    "name": "Seasail Merchant",
    "raw": []
  },
  "Cobblestone Merchant": {
    "created": true,
    "name": "Cobblestone Merchant",
    "raw": []
  },
  "Melon Merchant": {
    "created": true,
    "name": "Melon Merchant",
    "raw": []
  },
  "Explosives Merchant": {
    "created": true,
    "name": "Explosives Merchant",
    "raw": []
  },
  "Fabrics Merchant": {
    "created": true,
    "name": "Fabicrs Merchant",
    "raw": []
  },
  "Food Merchant": {
    "created": true,
    "name": "Food Merchant",
    "raw": []
   },
  "Rymek Dealer Merchant": {
    "created": true,
    "name": "Rymek Dealer Merchant",
    "raw": []
   },
  "Feather Merchant": {
    "created": true,
    "name": "Feather Merchant",
    "raw": []
   },
  "Exotic Potions Merchant": {
    "created": true,
    "name": "Exotic Potions Merchant",
    "raw": []
   },
  "Art Merchant": {
    "created": true,
    "name": "Art Merchant",
    "raw": []
   },
  "Scam Merchant": {
    "created": true,
    "name": "Scam Merchnat",
    "raw": []
   },
  "Shears Merchant": {
    "created": true,
    "name": "Shears Merchnat",
    "raw": []
   },
  "Powder Master": {
    "created": true,
    "name": "Powder Master",
    "raw": []
   },
  "Powder Merchant": {
	"created": true,
	"name": "Powder Merchant",
	"raw": []
   },
  "Quartz Merchant": {
    "created": true,
    "name": "Quartz Merchant",
    "raw": []
   },
  "Artefact Merchant": {
    "created": true,
    "name": "Artefact Merchant",
    "raw": []
   },
  "Dungeon Merchant": {
	"created": true,
	"name": "Dungeon Merchant",
	"raw": []
   },
  "Fast Travel": {
	"created": true,
	"name": "Fast Travel",
	"raw": []
   },
  "Uth Shrine": {
	"created": true,
	"name": "Uth Shrine",
	"raw": []
   },
  "Ultimate Discovery": {
	"created": true,
	"name": "Ultimate Discovery",
	"raw": []
   },
  "Light's Realm": {
	"created": true,
	"name": "Light Realm Entrance",
	"raw": []
   },
  "Key Forge Merchant": {
	"created": true,
	"name": "Key Forge Merchant",
	"raw": []
   },
  "Corrupted Dungeons": {
	"created": true,
	"name": "Corrupted Dungeons",
	"raw": []
   },
  "Guild Master": {
	"created": true,
	"name": "Guild Master",
	"raw": []
   },
   "Grind Spot": {
	"created": true,
	"name": "Grind Spot",
	"raw": []
   },
   "Cave": {
	"created": true,
	"name": "Cave",
	"raw": []
   },
   "Mini Quest": {
	"created": true,
	"name": "Mini Quest",
	"raw": []
   },
   "Trade Market": {
	"created": true,
	"name": "Trade Market",
	"raw": []
   },
   "Alchemism Station": {
	"created": true,
	"name": "Alchemism Station",
	"raw": []
   },
   "Armouring Station": {
	"created": true,
	"name": "Armouring Station",
	"raw": []
   },
   "Cooking Station": {
	"created": true,
	"name": "Cooking Station",
	"raw": []
   },
   "Jeweling Station": {
	"created": true,
	"name": "Jeweling Station",
	"raw": []
   },
   "Scribing Station": {
	"created": true,
	"name": "Scribing Station",
	"raw": []
   },
   "Tailoring Station": {
	"created": true,
	"name": "Tailoring Station",
	"raw": []
   },
   "Weaponsmithing Station": {
	"created": true,
	"name": "Weaponsmithing Station",
	"raw": []
   },
   "Woodworking Station": {
	"created": true,
	"name": "Woodworking Station",
	"raw": []
   },
   "Tool Merchant": {
	"created": true,
	"name": "Tool Merchant",
	"raw": []
   },
   "Boss Altar": {
	"created": true,
	"name": "Boss Altar",
	"raw": []
   },
   "Dungeon Merchant": {
	"created": true,
	"name": "Dungeon Merchant",
	"raw": []
   },
  "Raids": {
    "created": true,
    "name": "Raids",
    "raw": []
  },
};
