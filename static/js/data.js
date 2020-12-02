anychart.onDocumentReady(function () {
        // showData(dataSet){
        // create data set on our data     
        var data = getData1();
        var drinks = data[1];
        var bars = data[0];

        var dataSet = anychart.data.set(drinks);
        draw_chart_prices(dataSet, bars);
        draw_chart_means(drinks);
});

function draw_chart_prices(dataSet, bars) {
        // create line chart
        var chart = anychart.line();

        // turn on chart animation
        chart.animation(true);

        // set chart padding
        chart.padding([10, 20, 5, 20]);

        // turn on the crosshair
        chart.crosshair()
                .enabled(true);
        //     .yLabel(false)
        //     .yStroke(null);

        // set tooltip mode to point
        chart.tooltip().positionMode('point');

        // set chart title text settings
        chart.title('Distribución de los precios de los bares habaneros');

        // set yAxis title
        chart.yAxis().title('Precio');
        chart.yScale().ticks().interval(7);
        chart.yScale().minorTicks().interval(1);

        chart.yAxis().ticks().enabled(true);
        chart.yAxis().minorTicks().enabled(true);

        chart.yAxis().ticks().position('outside');
        chart.yAxis().minorTicks().position('outside');


        chart.xAxis().labels().padding(5);

        // create first series with mapped data

        for (let i = 0; i < bars.length; i++) {
                var seriesData = dataSet.mapAs({ 'x': 0, 'value': i + 1 });
                series = chart.line(seriesData);

                series.name(bars[i]);
                series.hovered().markers()
                        .enabled(true)
                        .type('circle')
                        .size(4);
                series.tooltip()
                        .anchor('left-center')
                        .position('right')
                        .offsetX(5)
                        .offsetY(5);
        }

        // turn the legend on
        chart.legend()
                .enabled(true)
                .fontSize(13)
                .padding([0, 0, 10, 0]);

        // set container id for the chart
        var stage = anychart.graphics.create("container", 1000, 600);
        chart.container(stage);
        chart.minPointLength(500);
        // initiate chart drawing
        chart.draw();
}

function draw_chart_means(drinks) {
        mean = get_mean(drinks);
        var dataSet = anychart.data.set(mean);

        // create line chart
        var chart = anychart.line();

        // turn on chart animation
        chart.animation(true);

        // set chart padding
        chart.padding([10, 20, 5, 20]);

        // turn on the crosshair
        chart.crosshair()
                .enabled(true);
        //     .yLabel(false)
        //     .yStroke(null);

        // set tooltip mode to point
        chart.tooltip().positionMode('point');

        // set chart title text settings
        chart.title('Relación entre el precio promedio y el precio neto de los tragos.');

        // set yAxis title
        chart.yAxis().title('Precio');
        chart.yScale().ticks().interval(7);
        chart.yScale().minorTicks().interval(1);

        chart.yAxis().ticks().enabled(true);
        chart.yAxis().minorTicks().enabled(true);

        chart.yAxis().ticks().position('outside');
        chart.yAxis().minorTicks().position('outside');


        chart.xAxis().labels().padding(5);

        // create first series with mapped data

        var seriesData1 = dataSet.mapAs({ 'x': 0, 'value': 1 });
        series1 = chart.line(seriesData1);
        series1.name("Precio Promedio");
        series1.hovered().markers()
                .enabled(true)
                .type('circle')
                .size(4);
        series1.tooltip()
                .anchor('left-center')
                .position('right')
                .offsetX(5)
                .offsetY(5);

        var seriesData2 = dataSet.mapAs({ 'x': 0, 'value': 2 });
        series2 = chart.line(seriesData2);
        series2.name("Precio Neto");
        series2.hovered().markers()
                .enabled(true)
                .type('circle')
                .size(4);
        series2.tooltip()
                .anchor('left-center')
                .position('right')
                .offsetX(5)
                .offsetY(5);

        // turn the legend on
        chart.legend()
                .enabled(true)
                .fontSize(13)
                .padding([0, 0, 10, 0]);

        // set container id for the chart
        var stage = anychart.graphics.create("mean", 1000, 300);
        chart.container(stage);
        chart.minPointLength(500);
        // initiate chart drawing
        chart.draw();
}

function get_mean(drinks) {
        means = Array(drinks.length);
        net_price = new Map(get_net_price());
        for (let i = 0; i < drinks.length; i++) {
                means[i] = Array(3);
                name = drinks[i][0]
                means[i][0] = name;
                sum_price = 0
                len = 0
                for (let j = 1; j < drinks[i].length; j++) {
                        const price = drinks[i][j];
                        if (price == undefined)
                                continue;
                        len += 1;
                        sum_price += price;
                }
                means[i][1] = sum_price / len;
                means[i][2] = net_price.get(name);
        }
        return means;
}

function get_net_price() {
        return [["Mojito",          0.8771941391941392],
                ["Daiquiri",        0.7394780219780219],
                ["Caipirinha",      0.7078846153846154],
                ["Gin Tonic",       1.4580000000000002],
                ["Cuba Libre",      0.7142857142857142],
                ["Piña Colada",     0.6402857142857143],
                ["Screwdriver",     0.5675000000000001],
                ["Cubata",          0.7392857142857142],
                ["Ron Collins",     0.8992875457875458],
                ["Sangria",         0]]
}

// function init() {
//         loadJSON(function(response) {
//                 // Parsing JSON string into object
//                 window.value = JSON.parse(response);
//         });
// };

// function loadJSON(callback) {   
//         var xobj = new XMLHttpRequest();
//             xobj.overrideMimeType("application/json");
//         xobj.open('GET', 'static/bares.json', true); // Replace 'appDataServices' with the path to your file
//         xobj.onreadystatechange = function () {
//               if (xobj.readyState == 4 && xobj.status == "200") {
//                 // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//                 callback(xobj.responseText);
//               }
//         };
//         xobj.send(null);  
//      }

function getData1() {
        data = [
                ["Bicky",
                        [
                                "El Bicky", 3.50,
                                "Maybel", 3.50,
                                "Ron Colins", 2.50,
                                "Cuba Bella", 3.00,
                                "Mary Pickford", 2.70,
                                "Cosmopolitan", 2.70,
                                "Havana Special", 4.00,
                                "B-52", 3.75,
                                "Tequila Sunrise", 5.00,
                                "Sex on the Beach", 4.75,
                                "Manhattan", 5.00,
                                "Mojito", 2.70,
                                "Daiquiri", 2.50,
                                "Cuba Libre", 2.70,
                                "Caipirinha", 2.50,
                                "Gin Tonic", 4.00,
                                "Margarita", 4.25,
                                "Sangria", 5.00,
                                "Piña Colada", 3.60,
                                "Screwdriver", 3.50,
                                "Blodymary", 5.00,
                                "Alexander", 3.50
                        ]],

                ["Distrito_25",
                        [
                                "Mojito", 2.25,
                                "Daiquiri", 2.25,
                                "Cuba Libre", 2.25,
                                "Cubata", 3.00,
                                "Caipirinha", 3.50,
                                "Caipirisima", 3.50,
                                "Gin Tonic", 3.95,
                                "Margarita", 3.50,
                                "Sangria", 3.50,
                                "Piña Colada", 3.50,
                                "Vodka Tonic", 3.50,
                                "Screwdriver", 3.50,
                                "Tom Colins", 3.50,
                                "Caipiroska", 3.50,
                                "Cubanito", 2.25,
                                "Martini", 3.50,
                                "Blodymary", 2.25

                        ]],

                ["Nana Cafe",
                        [
                                "Ron Collins", 2.50,
                                "Michelada", 3.00,
                                "Mojito", 2.50,
                                "Daiquiri", 2.50,
                                "Cuba Libre", 2.50,
                                "Cubata", 3.00,
                                "Caipirisima", 2.50,
                                "Gin Tonic", 3.00,
                                "Margarita", 3.00,
                                "Sangria", 4.50,
                                "Piña Colada", 3.00,
                                "Vodka Tonic", 3.00,
                                "Tom Colins", 3.00,
                                "Caipiroska", 2.50,
                                "Cubanito", 2.50,
                                "Blodymary", 2.50
                        ]],

                ["Los altos de Nelys",
                        [
                                "Mojito", 3.50,
                                "Daiquiri", 3.50,
                                "Cuba Libre", 3.00,
                                "Cubata", 3.00,
                                "Caipirinha", 3.00,
                                "Gin Tonic", 4.00,
                                "Ron Collins", 3.00
                        ]],

                ["Pa comer y pa llevar",
                        [
                                "Long Island", 5.55,
                                "Appletini", 5.55,
                                "White Russian", 5.55,
                                "Black Russian", 5.55,
                                "Ron Collins", 4.05,
                                "Canchanchara", 4.05,
                                "Mojito", 4.05,
                                "Daiquiri", 4.25,
                                "Cuba Libre", 4.05,
                                "Cubata", 4.25,
                                "Caipirinha", 4.05,
                                "Gin Tonic", 4.55,
                                "Margarita", 4.25,
                                "Sangria", 4.70,
                                "Piña Colada", 4.25,
                                "Vodka Tonic", 3.50,
                                "Screwdriver", 4.25,
                                "Caipiroska", 4.75,
                                "Cubanito", 4.25,
                                "Martini", 5.55,
                                "Blodymary", 4.55,
                                "Tequila Sunrise", 4.55,
                                "Sex on the Beach", 4.95,
                                "Whisky Sour", 5.55,
                                "Orgasmo", 6.15,
                                "Mai Tai", 6.25,
                                "Adan y Eva", 5.25,
                                "Alexander", 5.70,
                                "Americano", 5.55,
                                "Negroni", 5.95
                        ]],
                ["Ecuentro",
                        [
                                "Good Mother", 4.00,
                                "Miami Vice", 4.00,
                                "Black Russian", 4.00,
                                "Old Fashion", 4.00,
                                "Good Father", 4.00,
                                "Havana Special", 3.50,
                                "Malibu Tropical", 3.50,
                                "Caipifruta", 3.50,
                                "Long Island", 4.00,
                                "Sex on the Beach", 3.50,
                                "Calimocho", 3.50,
                                "Tinto de Verano", 3.50,
                                "Campechano", 3.50,
                                "Mary Pickford", 3.50,
                                "Ron Collins", 3.50,
                                "San Fransisco", 2.50,
                                "Shirley Temple", 3.00,
                                "Mojito", 3.00,
                                "Daiquiri", 3.00,
                                "Cuba Libre", 3.00,
                                "Cubata", 3.50,
                                "Caipirinha", 3.00,
                                "Caipirisima", 3.00,
                                "Gin Tonic", 3.50,
                                "Margarita", 4.00,
                                "Sangria", 3.50,
                                "Piña Colada", 3.50,
                                "Vodka Tonic", 3.50,
                                "Tom Colins", 4.00,
                                "Caipiroska", 3.00,
                                "Cubanito", 3.50,
                                "Martini", 3.50,
                                "Blodymary", 3.50,
                                "Tequila Sunrise", 3.50,
                                "White Russian", 4.50,
                                "Campari Orange", 4.50,
                                "Kahlua Colada", 5.00,
                                "Alexander", 5.00,
                                "Beerita", 6.00,
                                "Manhattan", 6.00,
                                "Screw Driver", 3.00
                        ]],

                ["EFE",
                        [
                                "Sex on the Beach", 4.40,
                                "Black Russian", 5.40,
                                "White Russian", 5.40,
                                "Cosmopolitan", 4.40,
                                "Canchanchara", 4.85,
                                "7 Tonic", 4.80,
                                "Ron Collins", 3.80,
                                "Old Fashion", 5.50,
                                "Mulata", 3.85,
                                "Mojito", 4.40,
                                "Daiquiri", 3.80,
                                "Cuba Libre", 3.80,
                                "Cubata", 4.40,
                                "Caipirisima", 3.80,
                                "Piña Colada", 4.30,
                                "Vodka Tonic", 5.25,
                                "Screwdriver", 4.40,
                                "Caipiroska", 3.80,
                                "Cubanito", 4.40,
                                "Blodymary", 4.40
                        ]],

                ["Imperio",
                        [
                                "Ron Collins", 3.50,
                                "Havana Special", 3.50,
                                "Mojito", 3.50,
                                "Daiquiri", 3.50,
                                "Cuba Libre", 3.50,
                                "Cubata", 4.00,
                                "Caipirinha", 3.50,
                                "Piña Colada", 3.50

                        ]],

                ["El Laurel",
                        [
                                "Mojito", 3.00,
                                "Daiquiri", 2.50,
                                "Cuba Libre", 2.50,
                                "Cubata", 3.00,
                                "Caipirinha", 2.50,
                                "Gin Tonic", 3.00,
                                "Margarita", 3.50,
                                "Sangria", 2.50,
                                "Piña Colada", 2.50,
                                "Screwdriver", 2.50,
                                "Cubanito", 3.00,
                                "Blodymary", 3.00
                        ]],

                ["Los Bucaneros",
                        [
                                "Havana Fashion", 4.50,
                                "Havana Special", 4.00,
                                "Tinto de Verano", 4.50,
                                "Rioja Libre", 4.50,
                                "Bucaneros", 5.00,
                                "Ron Collins", 4.00,
                                "Mojito", 4.00,
                                "Daiquiri", 4.00,
                                "Cuba Libre", 4.00,
                                "Cubata", 5.00,
                                "Caipirinha", 4.00,
                                "Gin Tonic", 4.50,
                                "Sangria", 5.00,
                                "Vodka Tonic", 5.00,
                                "Screwdriver", 5.00,
                                "Caipiroska", 4.00,
                                "Cubanito", 4.50,
                                "Blodymary", 5.00
                        ]],

                ["Mimosa",
                        [
                                "Ron Collins", 2.70,
                                "Mojito", 2.70,
                                "Daiquiri", 2.70,
                                "Cuba Libre", 2.70,
                                "Cubata", 2.70,
                                "Caipirinha", 2.95,
                                "Gin Tonic", 2.95,
                                "Sangria", 2.95,
                                "Screwdriver", 2.95,
                                "Cubanito", 2.70,
                                "Mulata", 2.70,
                                "Mimosa", 2.95,
                                "Blodymary", 2.95,
                                "Piña Colada", 2.95,
                                "Martini", 2.95,
                                "Tom Collins", 2.95
                        ]],

                ["Sia Kara Cafe",
                        [
                                "Ron Collins", 4.50,
                                "Mojito", 4.50,
                                "Daiquiri", 4.00,
                                "Cuba Libre", 4.00,
                                "Caipirinha", 4.00,
                                "Gin Tonic", 2.95,
                                "Sangria", 4.50,
                                "Screwdriver", 4.00,
                                "Cubanito", 4.00,
                                "Piña Colada", 4.50,
                                "Tom Collins", 4.50,
                                "Caipiroska", 4.00,
                                "Caipirisima", 4.00,
                                "Margarita", 4.50,
                                "Gin Tanqueray", 5.00,
                                "Gin Beefeater", 4.00,
                                "Gin Bombay", 7.00,
                                "Gin Hendricks", 8.00,
                                "Long Island", 4.50,
                                "Whisky Sour", 4.50,
                                "Manhattan", 4.50,
                                "Old Fashion", 4.50,
                                "Vodka Tonic", 4.50,
                                "Negroni", 5.00,
                                "Orgasmo", 4.50,
                                "Cosmopolitan", 4.50,
                                "Presidente", 4.50,
                                "Mary Pickford", 4.50,
                                "Tequila Sunrise", 5.50,
                                "Michelada", 4.50

                        ]],

                ["NaO",
                        [
                                "Presidente", 3.50,
                                "Mojito", 3.50,
                                "Ron Collins", 3.50,
                                "Cuba Libre", 3.50,
                                "Ron Punch", 3.50,
                                "Cubanito ", 3.50,
                                "Havana Special", 3.50,
                                "Daiquiri", 3.50,
                                "Piña Colada", 3.50,
                                "Mulata", 3.50,
                                "NaO", 4.00,
                                "Cubata", 4.00,
                                "Coctel Loco", 5.00,
                                "Manhattan", 4.00,
                                "Martini", 4.00,
                                "Americano", 4.00,
                                "Old Fashion", 4.00,
                                "Margarita", 4.00,
                                "Whisky Sour", 4.00,
                                "Black Russian", 4.00,
                                "Caipirinha", 4.00,
                                "Gin Tonic", 4.00,
                                "Mai Tai", 4.00,
                                "Screwdriver", 4.00,
                                "Tequila Sunrise", 4.00
                        ]],

                ["Santa Barbara",
                        [
                                "Tinto Verano", 2.50,
                                "Santa Barbara", 3.00,
                                "Mojito", 2.50,
                                "Daiquiri", 2.00,
                                "Cuba Libre", 2.50,
                                "Cubata", 2.50,
                                "Sangria", 3.00,
                                "Piña Colada", 3.00

                        ]],

                ["El Resplandor",
                        [
                                "Piña Colada", 2.20,
                                "Sangria", 1.80,
                                "Daiquiri", 1.40,
                                "Cuba Libre", 1.40,
                                "Mojito", 1.60,
                                "Ron Collins", 1.40,
                                "Cubanito", 1.80,
                                "Gin Tonic", 2.40,
                                "Caipirinha", 1.80,
                                "Caipiroska", 1.80,
                                "Blody Mary", 2.00,
                                "Martini ", 3.00
                        ]],

                ["Don Cangrejo",
                        [
                                "Cuba Libre", 3.00,
                                "Cubata", 3.00,
                                "Ron Collins", 3.00,
                                "Mojito", 3.00,
                                "Tom Collins", 3.00,
                                "Srewdriver ", 3.00,
                                "Sangria", 3.00,
                                "Vodka Tonic", 3.00,
                                "Gin Tonic", 3.00,
                                "Michelada", 3.00
                        ]],

                ["Cafe 5ta Avenida",
                        [
                                "Black Russian", 3.00,
                                "Blody Mary", 3.00,
                                "Blue Lagon", 2.00,
                                "Caipirinha", 3.50,
                                "Caipiroska", 4.00,
                                "Cuba Libre", 3.00,
                                "Cubanito", 3.50,
                                "Cubata", 3.50,
                                "Daiquiri", 3.25,
                                "Gin Tonic", 4.00,
                                "Havana Special", 3.50,
                                "Margarita", 3.50,
                                "Michelada", 3.50,
                                "Mojito", 3.25,
                                "Piña Colada", 4.25,
                                "Ron Collins", 3.00,
                                "San Francisco", 3.00,
                                "Sangria", 3.50,
                                "Screwdriver", 3.00,
                                "Vodka Tonic", 3.50
                        ]],

                ["Juankys Pan",
                        [
                                "Cuba Libre", 2.00,
                                "Cubanito", 2.75,
                                "Blody Mary", 2.75,
                                "Mojito", 2.75,
                                "Caipirinha", 2.50,
                                "Caipirisima", 2.50,
                                "Caipiroska", 2.50,
                                "Cubata", 2.50,
                                "Sangria", 2.75,
                                "Screwdriver", 2.50,
                                "Gin Tonic", 3.75,
                                "Vodka Tonic", 2.75,
                                "Piña Colada", 3.00,
                                "Daiquiri", 3.00,
                                "Martini", 4.20
                        ]],

                ["Cafe America",
                        [
                                "San Fransisco", 2.50,
                                "Mojito", 3.00,
                                "Cuba Libre", 3.00,
                                "Daiquiri", 3.00,
                                "Sangria", 3.00,
                                "Ron Collins", 3.00,
                                "Cubata", 3.50,
                                "Tinto de Verano", 3.00,
                                "Caipirinha", 3.00,
                                "Caipiroska", 3.00,
                                "Caipirisima", 3.00,
                                "Gin Tonic", 4.00,
                                "Vodka Tonic", 4.00,
                                "Piña Colada", 3.50,
                                "Blody Mary", 3.50,
                                "Cubanito", 3.50,
                                "Screwdriver", 3.00,
                                "Margarita", 4.00,
                                "Michelada", 2.50
                        ]],

                ["Cafe Arcangel",
                        [
                                "Mojito", 3.00,
                                "Daiquiri", 3.00,
                                "Cuba Libre", 3.00
                        ]],

                ["Cafe Bohemia",
                        [
                                "Mojito", 5.00,
                                "Cuba Libre", 5.00,
                                "Canchanchara", 5.00,
                                "Caipirinha", 5.00,
                                "Piña Colada", 5.00,
                                "Daiquiri", 5.00,
                                "Havana Special", 5.00,
                                "Vodka Tonic", 5.00,
                                "Margarita", 6.00,
                                "Gin Tonic", 6.00
                        ]],

                ["Fusion Havana",
                        [
                                "Manhattan", 3.50,
                                "Cuba Bella", 3.50,
                                "Piña Colada", 4.00,
                                "Caipirinha", 4.00,
                                "Zombie", 4.50,
                                "Betwenn the Sheets", 3.50,
                                "Bowman", 3.00,
                                "City Man", 3.50,
                                "Tropical", 3.50,
                                "Mai Tai", 3.50,
                                "Sangria", 4.50,
                                "Mojito", 3.50,
                                "Cuba Libre", 3.50,
                                "Cubata", 3.50,
                                "Ron Collins", 3.50,
                                "Margarita", 4.00,
                                "Tequila Sunrise", 3.50,
                                "Submarino", 4.00,
                                "Cucaracha", 3.50,
                                "Tom Collins", 3.50,
                                "White Day", 3.50,
                                "Alexander", 4.00,
                                "Gin Tonic", 5.00,
                                "Martini", 4.00,
                                "Screwdriver", 3.50,
                                "Black Russian", 4.00,
                                "White Russian", 4.00,
                                "Blody Mary", 4.00,
                                "Laguna Azul", 3.50,
                                "Caipiroska", 4.50,
                                "Kamikaze", 4.00,
                                "Sex on the Beach", 4.00,
                                "Long Island", 4.50,
                                "Americano", 4.00,
                                "Negroni", 5.00,
                                "Mimosa", 3.50,
                                "Orgasmo", 5.50,
                                "B-52", 5.00,
                                "Dark Desire", 5.00,
                                "Sidecar", 5.00,
                                "Disaronno Cocoban", 5.00
                        ]],

                ["On Creperie",
                        [
                                "Cuba Libre", 3.00,
                                "Mojito", 3.00,
                                "Daiquiri", 3.00,
                                "Mary Pickford", 3.00,
                                "Canchanchara", 3.00,
                                "Ron Collins", 3.00,
                                "Cubanito", 3.00,
                                "Blody Mary", 3.00,
                                "Havana Special", 3.00,
                                "Caipiroska", 3.00,
                                "Tinto de Verano", 3.00,
                                "Calimocho", 3.00,
                                "Vodka Tonic", 4.50,
                                "Havana 500", 4.00,
                                "Gin Tonic", 4.50,
                                "Piña Colada", 4.50,
                                "Alexander", 4.50,
                                "Mimosa", 4.50,
                                "Terciopelo Azul", 4.50,
                                "Black Russian", 5.00,
                                "White Russian", 5.00,
                                "Margarita", 5.00,
                                "Sex on the Beach", 5.00,
                                "Negroni", 5.00,
                                "Zombie", 5.00,
                                "Whisky Sour", 5.00,
                                "Tequila Sunrise", 5.00,
                                "Caipirinha", 5.00,
                                "Long Island", 6.00,
                                "Manhattan", 6.00,
                                "Martini", 6.00,
                                "Michelada", 3.00
                        ]],

                ["Cafe Espada",
                        [
                                "Mojito", 4.00,
                                "Daiquiri", 4.00,
                                "Cubanito", 4.50,
                                "Ron Collins", 4.00,
                                "Presidente", 4.00,
                                "Havana Special", 4.00,
                                "Mary Pickford", 4.00,
                                "Cuba Libre", 4.00,
                                "Cubata", 4.50,
                                "Canchanchara", 3.50,
                                "Blody Mary", 4.50,
                                "Piña Colada", 4.50,
                                "Sex on the Beach", 5.00,
                                "Sex on the Jungle", 5.00,
                                "Cosmopolitan", 4.00,
                                "Martini", 5.00,
                                "Manhattan", 5.00,
                                "Long Island", 6.00,
                                "Gin Tonic", 5.00,
                                "Margarita", 4.50,
                                "Sangria", 4.50,
                                "Tinto de Verano", 4.50,
                                "Screwdriver", 4.00,
                                "Caipirinha", 4.00,
                                "Caipiroska", 4.00,
                                "Tequila Sunrise", 4.50
                        ]],

                ["Cafe Paris",
                        [
                                "Mojito", 3.300,
                                "Daiquiri", 3.30,
                                "Sangria", 3.30,
                                "Cuba Libre", 3.30,
                                "Piña Colada", 3.30,
                                "San Francisco", 3.30,
                                "Cubata", 4.00
                        ]],

                ["Cafe Suiza",
                        [
                                "Cuba Libre", 3.50,
                                "Cubata", 4.50,
                                "Mojito", 5.00,
                                "Daiquiri", 4.50,
                                "Piña Colada", 5.00,
                                "Caipirinha", 5.00,
                                "Martini", 6.00,
                                "Sangria", 5.00
                        ]],

                ["Cafe Latex",
                        [
                                "Mojito", 2.25,
                                "Cuba Libre", 2.25,
                                "Daiquiri", 2.25,
                                "Screwdriver", 2.25,
                                "Caipirinha", 2.25,
                                "Havana Special", 2.25,
                                "Ron Collins", 2.25,
                                "San Francisco", 2.25,
                                "Canchanchara", 2.25,
                                "Michelada", 2.50,
                                "Sangria", 2.60,
                                "Piña Colada", 3.00,
                                "Cubata", 3.00,
                                "Margarita", 3.00,
                                "Gin Tonic", 3.00,
                                "Vodka Tonic", 3.00
                        ]],

                ["California Cafe",
                        [
                                "Canchanchara", 4.00,
                                "Mojito", 3.50,
                                "Daiquiri", 3.00,
                                "Cuba Libre", 3.50,
                                "Piña Colada", 4.00,
                                "Mary Pickford", 3.50,
                                "Havana Special", 4.00,
                                "Caipirinha", 4.00,
                                "Caipiroska", 4.00,
                                "Ron Collins", 4.00,
                                "Screwdriver", 3.50,
                                "Cubanito", 4.00,
                                "Blue Lagon", 4.00,
                                "Gin Tonic", 4.50,
                                "Vodka Tonic", 4.00,
                                "Sangria", 3.00,
                                "Tequila Sunrise", 5.50
                        ]],

                ["Esto no es un cafe",
                        [
                                "Mojito", 3.00,
                                "Daiquiri", 3.00,
                                "Cuba Libre", 3.00,
                                "Piña Colada", 3.00,
                                "Havana Special", 3.00,
                                "Cubanito", 4.00,
                                "Cubata", 4.00,
                                "Presidente", 3.00,
                                "Ron Collins", 3.00,
                                "Mary Pickford", 3.00,
                                "Ron Punch", 3.00,
                                "El Varadero", 3.00,
                                "Sangria", 3.50,
                                "Negroni", 5.00,
                                "Michelada", 3.50,
                                "Tinto de Verano", 3.00,
                                "Sex on the Beach", 5.00,
                                "White Russian", 4.00,
                                "Black Russian", 3.50,
                                "Miami Bay", 4.00,
                                "Americano", 4.00,
                                "Screwdriver", 3.00,
                                "Margarita", 4.00,
                                "Whisky Sour", 4.00,
                                "Martini", 4.00,
                                "Manhattan", 5.00,
                                "Blody Mary", 4.00,
                                "Blue Lagon", 4.00,
                                "Tom Collins", 3.50,
                                "Tequila Sunrise", 3.50,
                                "Gin Tonic", 4.00,
                                "Caipirinha", 3.50,
                                "Caipiroska", 3.50
                        ]],

                ["Pps Cafe",
                        [
                                "Screwdriver", 3.50,
                                "Caipiroska", 3.00,
                                "Caipirinha", 2.50,
                                "Caipirisima", 2.50,
                                "Cubata", 2.50,
                                "Cuba Libre", 2.50,
                                "Margarita", 4.00,
                                "Sangria", 4.00,
                                "Mojito", 3.50,
                                "Ron Collins", 3.50,
                                "Michelada", 3.50,
                                "Piña Colada", 3.50,
                                "Daiquiri", 2.50
                        ]]
        ]
        let map = new Map(data);
        var keys = Array.from(map.keys());
        let bars_data = new Map();
        for (var [bar, drinks] of map.entries()) {
                for (let i = 0; i < drinks.length; i += 2) {
                        let drink = drinks[i];
                        let price = drinks[i + 1];
                        if (bars_data.has(drink)) {
                                bars_data.get(drink).push(price)
                        } else {
                                bars_data.set(drink, [price])
                        }
                }

        }
        var bars = Array.from(bars_data);
        bars.sort(function (a, b) {
                return b[1].length - a[1].length;
        })
        bars = bars.slice(0, 10);
        var result = [];
        for (let i = 0; i < bars.length; i++) {
                var drink = bars[i][0];
                var prices = bars[i][1];
                result.push([drink].concat(prices));
        }
        drinks = Array(10);
        for (let i = 0; i < result.length; i++) {
                drinks[i] = [result[i][0]]
        }

        for (let j = 0; j < 10; j++) {
                var idx = 1
                for (let i = 0; i < keys.length; i++) {
                        const bar = keys[i];
                        if (map.get(bar).includes(result[j][0])) {
                                drinks[j].push(result[j][idx++]);
                        } else {
                                drinks[j].push(undefined);
                        }
                }
        }
        // keys = keys.slice(0, 10);
        // console.log(result);
        return [keys, drinks];
}       