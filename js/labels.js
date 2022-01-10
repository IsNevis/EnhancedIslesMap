var locationLabels = [];
overviewer.util.ready(function () {
	initLocationLabels();
});

function loadLocationLabels() {
	for (var l in locationLabels) {
		locationLabels[l].addTo(overviewer.map);
	}
	console.log('Sucessfully loaded location labels!');
}

function removeLocationLabels() {
	for (var l in locationLabels) {
		locationLabels[l].remove();
	}
	console.log('Sucessfully removed location labels!');
}

function initLocationLabels() {
  setTimeout(function() {
	var ovconf = overviewer.current_layer[overviewer.current_world].tileSetConfig;
    
    function labelHtml(title, fontsize, color) {
		var t = '<div style="text-align:center; z-index:203; position: absolute; left: -40px; top:-10px;">';
		t += '<span style="position: relative;';
		t += 'white-space: nowrap; font-weight: bold;';
		t += 'font-family: \'Titillium Web\', sans-serif; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 3px 3px 3px #000;';
		t += 'text-align: center; color:' + color + ';font-size:' + fontsize + 'px;"';
		t += '>' + title + '</span></div>';
		return t;
    }

    // Ragni
    var latLng = overviewer.util.fromWorldToLatLng(-819, 64, -1581, ovconf)
    var label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
		html: labelHtml('Ragni<div class="level">[Lv. 1]</div>', '16', '#ffffff') 
    });
    var l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Alumj
    latLng = overviewer.util.fromWorldToLatLng(970, 64, -1983, ovconf)
	label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
		html: labelHtml('Almuj<div class="level">[Lv. 30]</div>', '16', '#ffffff') 
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Detlas
    latLng = overviewer.util.fromWorldToLatLng(477, 64, -1590, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Detlas<div class="level">[Lv. 10]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Nemract
    latLng = overviewer.util.fromWorldToLatLng(119, 64, -2206, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Nemract<div class="level">[Lv. 20]</div>', '16', '#ffffff')
    }); 
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Maltic
    latLng = overviewer.util.fromWorldToLatLng(-539, 64, -1926, ovconf)
	label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
	    html: labelHtml('Maltic<div class="level">[Lv. 10]</div>', '14', '#AAAAAA')
	});
	l = L.marker(latLng, {icon:label, zIndexOffset:90000});
	l.addTo(overviewer.map);
	locationLabels.push(l);

    // Ternaves
    latLng = overviewer.util.fromWorldToLatLng(828, 64, -1610, ovconf)
	label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
	    html: labelHtml('Ternaves<div class="level">[Lv. 15]</div>', '14', '#AAAAAA')
	});
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
	l.addTo(overviewer.map);
	locationLabels.push(l);

    // Saint's Row
    latLng = overviewer.util.fromWorldToLatLng(305, 64, -2053, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Saint\'s Row<div class="level">[Lv. 25]</div>', '14', '#AAAAAA')
    });
	l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Ancient Nemract
    latLng = overviewer.util.fromWorldToLatLng(206, 64, -1884, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Ancient Nemract<div class="level">[Lv. 20]</div>', '14', '#AAAAAA')
	});
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
    
    // Emerald Trail
    latLng = overviewer.util.fromWorldToLatLng(-603, 64, -1611, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Emerald Trail<div class="level">[Lv. 1]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Time Valley
    latLng = overviewer.util.fromWorldToLatLng(-459, 64, -1254, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Time Valley<div class="level">[Lv. 25]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Pigmen's Ravines
    latLng = overviewer.util.fromWorldToLatLng(-680, 64, -1384, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Pigmen\'s Ravines<div class="level">[Lv. 15]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Nivla Woods
    latLng = overviewer.util.fromWorldToLatLng(-198, 64, -1536, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Nivla Woods<div class="level">[Lv. 5]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Nesaak
    latLng = overviewer.util.fromWorldToLatLng(117, 64, -817, ovconf)
	label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
	    html: labelHtml('Nesaak<div class="level">[Lv. 40]</div>', '16', '#ffffff')
	});
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Elkurn
    latLng = overviewer.util.fromWorldToLatLng(10, 64, -1227, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Elkurn<div class="level">[Lv. 5]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Bremminglar
    latLng = overviewer.util.fromWorldToLatLng(705, 64, -2096, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Bremminglar<div class="level">[Lv. 15]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Detlas Suburb
    latLng = overviewer.util.fromWorldToLatLng(280, 64, -1586, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Detlas Suburb<div class="level">[Lv. 10]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
	
	// Path to Darkness
    latLng = overviewer.util.fromWorldToLatLng(1362, 84, -539, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Path to Darkness<div class="level">[Lv. 110]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);



    // Mage Island
    latLng = overviewer.util.fromWorldToLatLng(873, 64, -2844, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Mage Island<div class="level">[Lv. 30]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
    
    // Black Road
	latLng = overviewer.util.fromWorldToLatLng(667, 64, -1519, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Black Road<div class="level">[Lv. 12]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
    
    // Pirate Bay
    latLng = overviewer.util.fromWorldToLatLng(480, 64, -2058, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Pirate Bay<div class="level">[Lv. 20]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Troms
    latLng = overviewer.util.fromWorldToLatLng(-793, 64, -963, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Troms<div class="level">[Lv. 55]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Corrupted Village
    latLng = overviewer.util.fromWorldToLatLng(410, 64, -1128, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Corrupted Village<div class="level">[Lv. 25]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Temple of the Legends
    latLng = overviewer.util.fromWorldToLatLng(-691, 64, -1022, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Temple of Legends<div class="level">[Lv. 70]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Half Moon Island
    latLng = overviewer.util.fromWorldToLatLng(999, 64, -2580, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Half Moon Island<div class="level">[Lv. 30]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
	
    // Durum Isles
    latLng = overviewer.util.fromWorldToLatLng(437, 64, -2880, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Durum Isles<div class="level">[Lv. 20]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Selchar
    latLng = overviewer.util.fromWorldToLatLng(92, 64, -3183, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Selchar<div class="level">[Lv. 25]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
	
    // Corkus City
    latLng = overviewer.util.fromWorldToLatLng(-1632, 64, -2930, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Corkus City<div class="level">[Lv. 85]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
    
    // Legendary Island
    latLng = overviewer.util.fromWorldToLatLng(-1112, 64, -2430, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Legendary Island<div class="level">[Lv. 90+]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
	
    // Relos
    latLng = overviewer.util.fromWorldToLatLng(-1668, 64, -2366, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Relos<div class="level">[Lv. 85]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
	
    // Avos Territory
    latLng = overviewer.util.fromWorldToLatLng(-1822, 64, -3176, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Avos Territory<div class="level">[Lv. 90]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Ghost Ship
    latLng = overviewer.util.fromWorldToLatLng(718, 64, -3741, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Ghost Ship<div class="level">[Lv. 45]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Rooster Island
    latLng = overviewer.util.fromWorldToLatLng(-106, 64, -2476, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Rooster Island<div class="level">[Lv. 20]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Skiens Island
    latLng = overviewer.util.fromWorldToLatLng(376, 64, -3485, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Skiens Island<div class="level">[Lv. 55]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Nodguj Nation
    latLng = overviewer.util.fromWorldToLatLng(791, 64, -3340, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Nodguj Nation<div class="level">[Lv. 45]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Dujgon Nation
    latLng = overviewer.util.fromWorldToLatLng(977, 64, -3468, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Dujgon Nation<div class="level">[Lv. 45]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Ice Islands
    latLng = overviewer.util.fromWorldToLatLng(909, 64, -3339, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Ice Islands<div class="level">[Lv. 45]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
    
    // Maro Peaks
    latLng = overviewer.util.fromWorldToLatLng(173, 64, -3947, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Maro Peaks<div class="level">[Lv. 60]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // The Bear Zoo
    latLng = overviewer.util.fromWorldToLatLng(-373, 64, -2456, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('The Bear Zoo<div class="level">[Lv. 15]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Underwater Route
    latLng = overviewer.util.fromWorldToLatLng(79, 64, -2646, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Underwater Route<div class="level">[Lv. 20]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
	l.addTo(overviewer.map);
	locationLabels.push(l);

    // Coastal Trail
    latLng = overviewer.util.fromWorldToLatLng(-290, 64, -2127, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Coastal Trail<div class="level">[Lv. 5]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Katoa Ranch
    latLng = overviewer.util.fromWorldToLatLng(-800, 64, -1907, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Katoa Ranch<div class="level">[Lv. 5]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // The Tower of Amnesia
    latLng = overviewer.util.fromWorldToLatLng(124, 64, -1227, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('The Tower of Amnesia<div class="level">[Lv. 25]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Jungle Village
    latLng = overviewer.util.fromWorldToLatLng(-751, 64, -751, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Jungle Village<div class="level">[Lv. 50]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Underground Squid Village
    latLng = overviewer.util.fromWorldToLatLng(221, 64, -814, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Underground Squid Village<div class="level">[Lv. 40]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // The Great Bridge
    latLng = overviewer.util.fromWorldToLatLng(-365, 64, -770, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('The Great Bridge<div class="level">[Lv. 50]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Mummy's Tomb
    latLng = overviewer.util.fromWorldToLatLng(1090, 64, -2329, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Mummy\'s Tomb<div class="level">[Lv. 35]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // House of Twain
    latLng = overviewer.util.fromWorldToLatLng(122, 64, -369, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('House of Twain<div class="level">[Lv. 45]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Pirate Town
    latLng = overviewer.util.fromWorldToLatLng(-695, 64, -3132, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Pirate Town<div class="level">[Lv. 60]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l); 

    // Zhight Island
    latLng = overviewer.util.fromWorldToLatLng(-500, 64, -2831, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Zhight Island<div class="level">[Lv. 50]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Mt. Wynn
    latLng = overviewer.util.fromWorldToLatLng(-98, 64, -2010, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Mt. Wynn<div class="level">[Lv. 20]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Volcanic Isles
    latLng = overviewer.util.fromWorldToLatLng(-992, 64, -3672, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Volcanic Isles<div class="level">[Lv. 55]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Lusuco
    latLng = overviewer.util.fromWorldToLatLng(-182, 64, -352, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Lusuco<div class="level">[Lv. 45]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Seavale Reefs
    latLng = overviewer.util.fromWorldToLatLng(300, 64, -3186, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Seavale Reefs<div class="level">[Lv. 25]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Jofash Dock
    latLng = overviewer.util.fromWorldToLatLng(1291, 64, -4082, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Jofash Dock<div class="level">[Lv. 90]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Dead Island
    latLng = overviewer.util.fromWorldToLatLng(872, 64, -3923, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Dead Island<div class="level">[Lv. 75]</div>', '14', '#AAAAAA')
    });
	l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Lion Lair
    latLng = overviewer.util.fromWorldToLatLng(806, 64, -2253, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Lion Lair<div class="level">[Lv. 25]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
    
    // Rymek
	latLng = overviewer.util.fromWorldToLatLng(1250, 64, -1334, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Rymek<div class="level">[Lv. 35]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Invaded Barracks
    latLng = overviewer.util.fromWorldToLatLng(1380, 64, -2247, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Invaded Barracks<div class="level">[Lv. 30]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Door of Time
    latLng = overviewer.util.fromWorldToLatLng(-549, 64, -1214, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Door of Time<div class="level">[Lv. 25]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Tempo Town
    latLng = overviewer.util.fromWorldToLatLng(-301, 64, -1171, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Tempo Town<div class="level">[Lv. 25]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
    
    // Abandoned Mines
    latLng = overviewer.util.fromWorldToLatLng(762, 64, -1251, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Abandoned Mines<div class="level">[Lv. 25]</div>', '14', '#AAAAAA')
    });
	l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Roots of Corruption
    latLng = overviewer.util.fromWorldToLatLng(232, 64, -1291, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Roots of Corruption', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // The Province of Wynn
    latLng = overviewer.util.fromWorldToLatLng(103, 64, -1726, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('The Province of Wynn', '25', '#FFFF55')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // LLevigar
    latLng = overviewer.util.fromWorldToLatLng(-1989, 64, -4533, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Llevigar<div class="level">[Lv. 40]</div>', '16', '#ffffff')
    });
	l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Olux
    latLng = overviewer.util.fromWorldToLatLng(-1727, 64, -5532, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Olux<div class="level">[Lv. 50]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Cinfras
    latLng = overviewer.util.fromWorldToLatLng(-455, 64, -4928, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Cinfras<div class="level">[Lv. 75]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Thesead
    latLng = overviewer.util.fromWorldToLatLng(770, 64, -5043, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Thesead<div class="level">[Lv. 85]</div>', '16', '#ffffff')
	});
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);	

    // Rodoroc
    latLng = overviewer.util.fromWorldToLatLng(1101, 64, -5136, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Rodoroc<div class="level">[Lv. 90]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Ahmsord
    latLng = overviewer.util.fromWorldToLatLng(1010, 64, -4554, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Ahmsord<div class="level">[Lv. 100]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Aldorei
    latLng = overviewer.util.fromWorldToLatLng(-479, 64, -4546, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Aldorei<div class="level">[Lv. 75]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Thanos
    latLng = overviewer.util.fromWorldToLatLng(134, 64, -5241, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Thanos<div class="level">[Lv. 80]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Lexdale
    latLng = overviewer.util.fromWorldToLatLng(-608, 64, -5442, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Lexdale<div class="level">[Lv. 70]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Eltom
    latLng = overviewer.util.fromWorldToLatLng(941, 64, -5506, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Eltom<div class="level">[Lv. 85]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Maex
    latLng = overviewer.util.fromWorldToLatLng(1486, 64, -5292, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Maex<div class="level">[Lv. 90]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Kandon-Beda
    latLng = overviewer.util.fromWorldToLatLng(757, 64, -4466, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Kandon-Beda<div class="level">[Lv. 95]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Karoc Quarry
    latLng = overviewer.util.fromWorldToLatLng(-1617, 64, -4470, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Karoc Quarry<div class="level">[Lv. 45]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Light Forest
    latLng = overviewer.util.fromWorldToLatLng(-950, 44, -4913, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Light Forest<div class="level">[Lv. 70]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
    
    // Dark Forest
    latLng = overviewer.util.fromWorldToLatLng(-1162, 64, -5341, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Dark Forest<div class="level">[Lv. 60]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Molten Heights
    latLng = overviewer.util.fromWorldToLatLng( 1495, 64, -5492, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Molten Heights<div class="level">[Lv. 90]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
    
    // Pre-Light Forest
    latLng = overviewer.util.fromWorldToLatLng( -1493, 39, -4818, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Pre-Light Forest<div class="level">[Lv. 65]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Canyon of the Lost
    latLng = overviewer.util.fromWorldToLatLng( 629, 64, -5224, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Canyon of the Lost<div class="level">[Lv. 85]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
	l.addTo(overviewer.map);
	locationLabels.push(l);

    // Efilim
    latLng = overviewer.util.fromWorldToLatLng( -1066, 64, -5007, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Efilim<div class="level">[Lv. 70]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Sky Islands
    latLng = overviewer.util.fromWorldToLatLng( 1266, 64, -4697, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Sky Islands<div class="level">[Lv. 95]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Gelibord
    latLng = overviewer.util.fromWorldToLatLng(-1004, 64, -5300, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Gelibord<div class="level">[Lv. 60]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Dernel Jungle
    latLng = overviewer.util.fromWorldToLatLng( -779, 64, -435, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Dernel Jungle<div class="level">[Lv. 60 - 70]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
	l.addTo(overviewer.map);
	locationLabels.push(l);

    // Gert Camp
    latLng = overviewer.util.fromWorldToLatLng( -46, 64, -5539, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Gert Camp<div class="level">[Lv. 75]</div>', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
	
	// Bucie
	latLng = overviewer.util.fromWorldToLatLng(-1459, 68, -4719, ovconf)
	label = new L.DivIcon({iconSize:[0,0],className:'wcLabel', 
	  html: labelHtml('Bucie<div class="level">[Lv. 40]</div>', '14', '#AAAAAA')
	});
	l = L.marker(latLng,{icon:label, zIndexOffset:900000});
	l.addTo(overviewer.map);
	locationLabels.push(l);

	// Lake Gylia
	latLng = overviewer.util.fromWorldToLatLng(-164, 68, -5238, ovconf)
	label = new L.DivIcon({iconSize:[0,0],className:'wcLabel', 
	  html: labelHtml('Lake Gylia<div class="level">[Lv. 75]</div>', '14', '#AAAAAA')
	});
	l = L.marker(latLng,{icon:label, zIndexOffset:900000});
	l.addTo(overviewer.map);
	locationLabels.push(l);

	// Kander Forest
	latLng = overviewer.util.fromWorldToLatLng(-805, 68, -5312, ovconf)
	label = new L.DivIcon({iconSize:[0,0],className:'wcLabel', 
	  html: labelHtml('Kander Forest<div class="level">[Lv. 70]</div>', '14', '#AAAAAA')
	});
	l = L.marker(latLng,{icon:label, zIndexOffset:900000});
	l.addTo(overviewer.map);
	locationLabels.push(l);

	// Swamp
	latLng = overviewer.util.fromWorldToLatLng(-1926, 68, -5299, ovconf)
	label = new L.DivIcon({iconSize:[0,0],className:'wcLabel', 
	  html: labelHtml('Swamp <div class="level">[Lv. 50]</div>', '14', '#AAAAAA')
	});
	l = L.marker(latLng,{icon:label, zIndexOffset:900000});
	l.addTo(overviewer.map);
	locationLabels.push(l);

	// Bantisu Temple
	latLng = overviewer.util.fromWorldToLatLng(606, 68, -4873, ovconf)
	label = new L.DivIcon({iconSize:[0,0],className:'wcLabel', 
	  html: labelHtml('Bantisu Air Temple <div class="level">[Lv. 85]</div>', '14', '#AAAAAA')
	});
	l = L.marker(latLng,{icon:label, zIndexOffset:900000});
	l.addTo(overviewer.map);
	locationLabels.push(l);
	
	// Letvus Airbase
	latLng = overviewer.util.fromWorldToLatLng(-189, 68, -4917, ovconf)
	label = new L.DivIcon({iconSize:[0,0],className:'wcLabel', 
	  html: labelHtml('Letvus Airbase', '14', '#AAAAAA')
	});
	l = L.marker(latLng,{icon:label, zIndexOffset:900000});
	l.addTo(overviewer.map);
	locationLabels.push(l);

    // Guild Hall
	latLng = overviewer.util.fromWorldToLatLng(-310, 64, -4933, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Guild Hall', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // The Hive
    latLng = overviewer.util.fromWorldToLatLng(395, 64, -5573, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('The Hive', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
	l.addTo(overviewer.map);
	locationLabels.push(l);

    // Light's Secret
    latLng = overviewer.util.fromWorldToLatLng(-1041, 64, -4480, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Light\'s Secret', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Tower of Ascension
    latLng = overviewer.util.fromWorldToLatLng(-310, 64, -430, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Tower of Ascension', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // The Forgery
    latLng = overviewer.util.fromWorldToLatLng(-847, 64, -4911, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('The Forgery<div class="level">[Lv. 70]</div>', '14', '#FFFFFF')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
	l.addTo(overviewer.map);
	locationLabels.push(l);
    
    // Ozoth's Spire
    latLng = overviewer.util.fromWorldToLatLng(256, 64, -5288, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Ozoth\'s Spire', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
	l.addTo(overviewer.map);
	locationLabels.push(l);

    // The Province of Gavel
    latLng = overviewer.util.fromWorldToLatLng(-110, 64, -5049, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('The Province of Gavel', '25', '#FFFF55')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

	// The Silent Expanse
    latLng = overviewer.util.fromWorldToLatLng(1144, 64, -845, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('The Silent Expanse', '25', '#FFFF55')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:91000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
    // Corkus Island
    latLng = overviewer.util.fromWorldToLatLng(-1522, 64, -2752, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Corkus Island', '25', '#FFFF55')
    });
	l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

	// Lutho
    latLng = overviewer.util.fromWorldToLatLng(979, 81, -675, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Lutho<div class="level">[Lv. 105]</div>', '16', '#ffffff')
	});
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);	
	
	// Ruined Olmic City
    latLng = overviewer.util.fromWorldToLatLng(603, 100, -543, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Ruined Olmic City<div class="level">[Lv. 100]</div>', '14', '#AAAAAA')
	});
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
	
	// The Eldritch Outlook
    latLng = overviewer.util.fromWorldToLatLng(1350, 84, -904, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('The Eldritch Outlook<div class="level">[Lv. 100+]</div>', '14', '#AAAAAA')
	});
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);
	
  }, 2000);
}
