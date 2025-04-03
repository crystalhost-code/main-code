const map = L.map('map').setView([50.4750046, 12.3649754], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 4,
    maxZoom: 19
}).addTo(map);

const locations = [
    {name: "Warsaw Data Center", coordinates: [52.2296756, 21.0122287]},
    {name: "Falkenstein Data Center", coordinates: [50.4750046, 12.3649754]},
    {name: "Nuremberg Data Center", coordinates: [49.4524, 11.0775]},
    {name: "Helsinki Data Center", coordinates: [60.1695, 24.9354]},
];

locations.forEach(location => {
    L.marker(location.coordinates)
        .addTo(map)
        .bindTooltip(`<b>${location.name}</b>`, { permanent: true, direction: "right" });
});
