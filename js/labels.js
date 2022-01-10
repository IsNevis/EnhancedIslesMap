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
    //===============================Big Name==========================

    // The Province of Wynn
    latLng = overviewer.util.fromWorldToLatLng(103, 64, -1726, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('The Province of Wynn', '25', '#FFFF55')
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
    //=================================================================

    //============================Towns================================
    // Wharfmolo
    latLng = overviewer.util.fromWorldToLatLng(-548, 64, 517, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
		html: labelHtml('Wharfmolo<div class="level">[Lv. ?]</div>', '16', '#ffffff') 
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Sky
    latLng = overviewer.util.fromWorldToLatLng(4380, 64, -750, ovconf)
	label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
		html: labelHtml('Sky<div class="level">[Lv. ?]</div>', '16', '#ffffff') 
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Goblin
    latLng = overviewer.util.fromWorldToLatLng(1840, 64, -1107, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Goblin Hollows<div class="level">[Lv. ?]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Tortuga
    latLng = overviewer.util.fromWorldToLatLng(5315, 64, -2025, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Tortuga<div class="level">[Lv. ?]</div>', '16', '#ffffff')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    // Pyre
    latLng = overviewer.util.fromWorldToLatLng(-1063, 64, -3062, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Pyre<div class="level">[Lv. ?]</div>', '16', '#ffffff')
    }); 
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
    l.addTo(overviewer.map);
	locationLabels.push(l);

    //=================================================================


    //----------------------------------------------------------------
    //Format For other type of locations Labels
    //----------------------------------------------------------------
    /*
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
    */

    /*
    // Roots of Corruption
    latLng = overviewer.util.fromWorldToLatLng(232, 64, -1291, ovconf)
    label = new L.DivIcon({iconSize:[0,0],className:'wcLabel',
        html: labelHtml('Roots of Corruption', '14', '#AAAAAA')
    });
    l = L.marker(latLng, {icon:label, zIndexOffset:90000});
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
    */
	
  }, 2000);
}
