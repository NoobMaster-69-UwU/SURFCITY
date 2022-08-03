var map = L.map('map',{minZoom:8}).setView([13.4927169,-89.381314,2], 20);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);
        
 L.marker([13.4927169,-89.381314,2],{color:'#f03'}).addTo(map)
    .bindPopup('Usted está en Surf City')
    .openPopup();

 /*   var circle = L.circle([13.48703,  -89.34119], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 90
    }).addTo(map);*/