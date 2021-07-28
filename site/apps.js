// Edit this array of apps
var apps = [
    {
        name: "Reporte Energía Solar",
        path: "./solar/",
        image: "https://hub.analythium.io/assets/web/pink-hist.png",
        description: "..."
    },
]

var app = new Vue({
    el: '#app',
    data: {
        apps: apps
    }
})
