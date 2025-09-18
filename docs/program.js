var map = L.map("map").setView([4.629972123375531, -74.06636718463993], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

fetch("map.geojson")
  .then((response) => response.json())
  .then((data) => {
    L.geoJson(data, {
      style: {
        color: "green",
        weight: 2,
        fillColor: "lime",
        fillOpacity: 0.3,
      },
    }).addTo(map);
  }).catch((err) => console.error("Error cargando el GeoJSON: ", err))
