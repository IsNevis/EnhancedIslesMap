var marks = [];

var runPlayer = false;

overviewer.util.ready(function () {
  startInterval(function() {
	console.log('GetLocation Interval On');
    if(!document.hidden) {
      $.ajax({
        url: 'https://api-legacy.wynncraft.com/map/getMyLocation', cache: true, success: function(result) {
        for(var i in marks) {
          marks[i].m.remove();
          marks[i].l.remove();
          marks[i].h.remove();
        }
        marks = [];
        
        if(result.error) {
          $('.player-track').hide();
          return;
        }
        
        $('.player-track-server-name').each(function() {
          $(this).html(result.server);
        });
        $('.player-track').show();
        

        var pl = addPlayerLabel(result);
        marks.push(pl);
        
        if(!runPlayer) {
          runPlayer = true;
        }
        
        for(var i in result.party) {
          var partyMember = result.party[i];
          marks.push(addPlayerLabel(partyMember));
        }
      }});
    }
  }, 5000);
});

function addPlayerLabel(player) {
  var ovconf = overviewer.current_layer[overviewer.current_world].tileSetConfig;
  var latLng = overviewer.util.fromWorldToLatLng(player.x, player.y, player.z, ovconf);
  var mi = L.icon({
	iconUrl: 'https://visage.surgeplay.com/face/32/'+ player.uuid, 
	iconRetinaUrl: 'https://visage.surgeplay.com/face/32/'+ player.uuid,
	iconSize: [32, 32]
  });
  var m = L.marker(latLng, {
	icon: mi, 
	title: player.name,
	zIndexOffset: 99999
  });
  m.addTo(overviewer.map);
  
  //var ppHtml = '<div class="nl" style="text-align:center;color:#AAAAAA;"><span style="font-weight:bold; font-size:14px;">' + player.name + '</span></div>';
  var nameLabel = new L.DivIcon({className:'nameLabel',
	html: '<div class="nl" style="text-align:center;color:white;"><span style="font-weight:bold; font-size:14px; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 3px 3px 3px #000;">' + player.name + '</span></div>'
  });
  var l = L.marker(latLng, {icon: nameLabel, zIndexOffset:99996});
  l.addTo(overviewer.map);
  //ppHtml += '<div class="hb" style="background-color:#3C3C3C;width:100px;height:10px;border-radius:3px;"><div style="border-radius:3px;background-color:#27C500;float:left;height:10px;width:'+ Math.floor((player.health / player.maxHealth) * 100) +'%;"></div></div>'; 
  var healthLabel = new L.DivIcon({className:'healthLabel',
	html: '<div class="hb" style="background-color:#3C3C3C;width:100px;height:10px;border-radius:3px;"><div style="border-radius:3px;background-color:#27C500;float:left;height:10px;width:'+ Math.floor((player.health / player.maxHealth) * 100) +'%;"></div></div>'
  });
  var h = L.marker(latLng, {icon: healthLabel, zIndexOffset:99996});
  h.addTo(overviewer.map); 
  setTimeout(function() { 
    $('.nl').css('font-family', 'Titillium Web').css('top', '20px').css('right', '22px').css('position', 'relative'); 
    $('.hb').css('top', '38px').css('right', '42px').css('position', 'relative');
  }, 1);
  //m.bindPopup(ppHtml);
  return {
    m: m,
    l: l,
    h: h
  };
}

function startInterval(func, time) {
  setTimeout(func, 250);
  setInterval(func, time);
}
