// Data for paid
var dic1  = {
    "US" : [3,0,1,6,0,24,6,60],
    "Australia" : [3,0,0,5,0,8,4,80],
    "Canada" : [4,0,1,6,1,22,4,62],
    "Francia" : [3,0,1,5,3,21,8,59],
    "Alemania" : [2,0,0,5,3,13,6,71],
    "Reino Unido" : [2,0,3,5,0,28,4,58],
    "Italia" : [3,0,1,9,0,28,6,53],
    "Argentina" : [4,0,3,14,2,18,5,54],
    "Brasil" : [3,0,0,12,0,9,5,71],
    "India" : [4,0,0,8,1,12,8,67],
    "México" : [7,0,0,10,0,18,5,60],
    "Nueva Zelanda" : [4,0,0,6,3,32,4,51],
    "Egipto" : [4,1,0,12,0,20,10,53],
    "Sudáfrica" : [4,0,1,7,3,16,7,62],
    "España" : [3,0,0,8,3,11,5,70],
    "Venezuela" : [4,0,0,15,3,21,8,49]
  };
  
var dic2 = {
  "US" : [2,0,1,8,4,48,0,37],
  "Australia" : [1,0,4,8,12,40,1,34],
  "Canada" : [1,0,2,10,6,49,1,31],
  "Francia" : [3,1,2,7,2,57,4,24],
  "Alemania" : [1,0,1,9,7,36,3,43],
  "Reino Unido" : [1,0,4,7,3,45,1,39],
  "Italia" : [0,0,1,15,5,42,4,33],
  "Argentina" : [0,0,1,22,3,31,5,38],
  "Brasil" : [0,0,4,17,3,37,6,33],
  "India" : [4,0,0,20,7,33,5,31],
  "México" : [0,0,1,8,3,60,3,25],
  "Nueva Zelanda" : [1,0,4,10,8,46,0,31],
  "Egipto" : [0,0,2,18,3,33,6,53],
  "Sudáfrica" : [0,1,2,10,12,34,3,38],
  "España" : [1,0,3,13,6,31,3,43],
  "Venezuela" : [4,1,0,20,3,37,2,33]
};

function get_data(country_name) {
  country = dic1[country_name];
  country1 = dic2[country_name];
  
  var data0 = [
    {x: "música", value: country[0]},
    {x: "libros", value: country[1]},
    {x: "médicas", value: country[2]},
    {x: "foto-video", value: country[3]},
    {x: "salud-ejercicios", value: country[4]},
    {x: "juegos", value: country[5]},
    {x: "redes sociales", value: country[6]},
    {x: "otros", value: country[7]}
  ];
  var data1 = [
    {x: "música", value: country1[0]},
    {x: "libros", value: country1[1]},
    {x: "médicas", value: country1[2]},
    {x: "foto-video", value: country1[3]},
    {x: "salud-ejercicios", value: country1[4]},
    {x: "juegos", value: country1[5]},
    {x: "redes sociales", value: country1[6]},
    {x: "otros", value: country1[7]}
  ];
  return {'free': data0, 'paid': data1};
}

var data = get_data('US');
var chart1 = anychart.pie(data.free);

// set the container id
chart1.container("container4");
chart1.title("Gratis");
// initiate drawing the chart
chart1.draw();

// Chart for paid
chart2 = anychart.pie(data.paid);

// set the container id
chart2.container("container5");
chart2.title("Pagadas")
// initiate drawing the chart
chart2.draw();

$(document).ready(function () {
  $("#sel4").change(function() {
    var input1 = document.getElementById("sel4").value;
    var data = get_data(input1);
    
    chart1.data(data.free)
    chart1.draw();
    
    // Poner data2 para los paid
    //var data2 = data1;
    chart2.data(data.paid)
    chart2.draw();
    });
}); 
