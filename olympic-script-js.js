const olympicData = [
    {code: "USA", country: "United States", gold: 40, lat: 37.0902, lon: -95.7129},
    {code: "CHN", country: "China", gold: 39, lat: 35.8617, lon: 104.1954},
    {code: "JPN", country: "Japan", gold: 20, lat: 36.2048, lon: 138.2529},
    {code: "AUS", country: "Australia", gold: 18, lat: -25.2744, lon: 133.7751},
    {code: "FRA", country: "France", gold: 16, lat: 46.2276, lon: 2.2137},
    {code: "NED", country: "Netherlands", gold: 15, lat: 52.1326, lon: 5.2913},
    {code: "GBR", country: "Great Britain", gold: 14, lat: 55.3781, lon: -3.4360},
    {code: "KOR", country: "South Korea", gold: 13, lat: 35.9078, lon: 127.7669},
    {code: "ITA", country: "Italy", gold: 12, lat: 41.8719, lon: 12.5674},
    {code: "GER", country: "Germany", gold: 11, lat: 51.1657, lon: 10.4515},
    {code: "NZL", country: "New Zealand", gold: 10, lat: -40.9006, lon: 174.8860},
    {code: "CAN", country: "Canada", gold: 9, lat: 56.1304, lon: -106.3468},
    {code: "UZB", country: "Uzbekistan", gold: 8, lat: 41.3775, lon: 64.5853},
    {code: "HUN", country: "Hungary", gold: 6, lat: 47.1625, lon: 19.5033},
    {code: "ESP", country: "Spain", gold: 5, lat: 40.4637, lon: -3.7492},
    {code: "SWE", country: "Sweden", gold: 4, lat: 60.1282, lon: 18.6435},
    {code: "KEN", country: "Kenya", gold: 4, lat: -0.0236, lon: 37.9062},
    {code: "NOR", country: "Norway", gold: 4, lat: 60.4720, lon: 8.4689},
    {code: "IRL", country: "Ireland", gold: 4, lat: 53.4129, lon: -8.2439},
    {code: "BRA", country: "Brazil", gold: 3, lat: -14.2350, lon: -51.9253},
    {code: "IRI", country: "Iran", gold: 3, lat: 32.4279, lon: 53.6880},
    {code: "UKR", country: "Ukraine", gold: 3, lat: 48.3794, lon: 31.1656},
    {code: "ROU", country: "Romania", gold: 3, lat: 45.9432, lon: 24.9668},
    {code: "GEO", country: "Georgia", gold: 3, lat: 42.3154, lon: 43.3569},
    {code: "SRB", country: "Serbia", gold: 3, lat: 44.0165, lon: 21.0059},
    {code: "BUL", country: "Bulgaria", gold: 3, lat: 42.7339, lon: 25.4858},
    {code: "CZE", country: "Czech Republic", gold: 3, lat: 49.8175, lon: 15.4730},
    {code: "DEN", country: "Denmark", gold: 2, lat: 56.2639, lon: 9.5018},
    {code: "AZE", country: "Azerbaijan", gold: 2, lat: 40.1431, lon: 47.5769},
    {code: "CRO", country: "Croatia", gold: 2, lat: 45.1, lon: 15.2},
    {code: "CUB", country: "Cuba", gold: 2, lat: 21.5218, lon: -77.7812},
    {code: "BEL", country: "Belgium", gold: 2, lat: 50.5039, lon: 4.4699},
    {code: "BRN", country: "Bahrain", gold: 2, lat: 26.0667, lon: 50.5577},
    {code: "SLO", country: "Slovenia", gold: 2, lat: 46.1512, lon: 14.9955},
    {code: "TPE", country: "Chinese Taipei", gold: 2, lat: 23.6978, lon: 120.9605},
    {code: "AUT", country: "Austria", gold: 2, lat: 47.5162, lon: 14.5501},
    {code: "HKG", country: "Hong Kong", gold: 2, lat: 22.3193, lon: 114.1694},
    {code: "PHI", country: "Philippines", gold: 2, lat: 12.8797, lon: 121.7740},
    {code: "ALG", country: "Algeria", gold: 2, lat: 28.0339, lon: 1.6596},
    {code: "INA", country: "Indonesia", gold: 2, lat: -0.7893, lon: 113.9213},
    {code: "POL", country: "Poland", gold: 1, lat: 51.9194, lon: 19.1451},
    {code: "ISR", country: "Israel", gold: 1, lat: 31.0461, lon: 34.8516},
    {code: "KAZ", country: "Kazakhstan", gold: 1, lat: 48.0196, lon: 66.9237},
    {code: "JAM", country: "Jamaica", gold: 1, lat: 18.1096, lon: -77.2975},
    {code: "RSA", country: "South Africa", gold: 1, lat: -30.5595, lon: 22.9375},
    {code: "THA", country: "Thailand", gold: 1, lat: 15.8700, lon: 100.9925},
    {code: "ETH", country: "Ethiopia", gold: 1, lat: 9.1450, lon: 40.4897},
    {code: "SUI", country: "Switzerland", gold: 1, lat: 46.8182, lon: 8.2275},
    {code: "ECU", country: "Ecuador", gold: 1, lat: -1.8312, lon: -78.1834},
    {code: "POR", country: "Portugal", gold: 1, lat: 39.3999, lon: -8.2245},
    {code: "GRE", country: "Greece", gold: 1, lat: 39.0742, lon: 21.8243},
    {code: "ARG", country: "Argentina", gold: 1, lat: -38.4161, lon: -63.6167},
    {code: "EGY", country: "Egypt", gold: 1, lat: 26.8206, lon: 30.8025},
    {code: "TUN", country: "Tunisia", gold: 1, lat: 33.8869, lon: 9.5375},
    {code: "BOT", country: "Botswana", gold: 1, lat: -22.3285, lon: 24.6849},
    {code: "CHI", country: "Chile", gold: 1, lat: -35.6751, lon: -71.5430},
    {code: "LCA", country: "Saint Lucia", gold: 1, lat: 13.9094, lon: -60.9789},
    {code: "UGA", country: "Uganda", gold: 1, lat: 1.3733, lon: 32.2903},
    {code: "DOM", country: "Dominican Republic", gold: 1, lat: 18.7357, lon: -70.1627},
    {code: "GUA", country: "Guatemala", gold: 1, lat: 15.7835, lon: -90.2308},
    {code: "MAR", country: "Morocco", gold: 1, lat: 31.7917, lon: -7.0926},
    {code: "DMA", country: "Dominica", gold: 1, lat: 15.4150, lon: -61.3710},
    {code: "PAK", country: "Pakistan", gold: 1, lat: 30.3753, lon: 69.3451}
];

const width = document.getElementById('mapViz').clientWidth;
const height = 600;

const svg = d3.select("#mapViz")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

const projection = d3.geoMercator()
    .scale(130)
    .translate([width / 2, height / 1.5]);

const path = d3.geoPath().projection(projection);

const radiusScale = d3.scaleSqrt()
    .domain([0, d3.max(olympicData, d => d.gold)])
    .range([3, 35]);

d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(world => {
    const countries = topojson.feature(world, world.objects.countries);

    svg.append("g")
        .selectAll("path")
        .data(countries.features)
        .enter().append("path")
        .attr("d", path)
        .attr("fill", "#e0e0e0")
        .attr("stroke", "#999")
        .attr("stroke-width", 0.5);

    const tooltip = d3.select("body").append("div")
        .style("position", "absolute")
        .style("background", "rgba(0,0,0,0.8)")
        .style("color", "white")
        .style("padding", "10px")
        .style("border-radius", "5px")
        .style("pointer-events", "none")
        .style("opacity", 0)
        .style("font-size", "14px");

    svg.selectAll("circle")
        .data(olympicData)
        .enter().append("circle")
        .attr("cx", d => {
            const coords = projection([d.lon, d.lat]);
            return coords ? coords[0] : 0;
        })
        .attr("cy", d => {
            const coords = projection([d.lon, d.lat]);
            return coords ? coords[1] : 0;
        })
        .attr("r", d => radiusScale(d.gold))
        .attr("fill", "rgba(255, 215, 0, 0.7)")
        .attr("stroke", "#DAA520")
        .attr("stroke-width", 2)
        .on("mouseover", function(event, d) {
            d3.select(this)
                .attr("fill", "rgba(255, 215, 0, 1)")
                .attr("stroke-width", 3);
            
            tooltip.transition().duration(200).style("opacity", 1);
            tooltip.html(`<strong>${d.country}</strong><br/>🥇 ${d.gold} Gold Medals`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
            d3.select(this)
                .attr("fill", "rgba(255, 215, 0, 0.7)")
                .attr("stroke-width", 2);
            
            tooltip.transition().duration(200).style("opacity", 0);
        })
        .style("cursor", "pointer");
});