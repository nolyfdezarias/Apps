 

$(document).ready(function (){
    var src1 = 'static/img/AR.png';
    var src2 = 'static/img/US.png';
    var src3 = 'static/img/ES.png';
    var src4 = 'static/img/FR.png';
    var src5 = 'static/img/DE.png';
    var src6 = 'static/img/GB.png';
    var src7 = 'static/img/NZ.png';
    var src8 = 'static/img/ZA.png';
    var src9 = 'static/img/VE.png';
    var src10 = 'static/img/CA.png';
    var src11 = 'static/img/EG.png';
    var src12 = 'static/img/IT.png';
    var src13 = 'static/img/IN.png';
    var src14 = 'static/img/BR.png';
    var src15 = 'static/img/MX.png';
    var src16 = 'static/img/AU.png';
    
    var dic1 = {
    "US" : src2,
    "España" : src3,
    "México": src15 ,
    "Reino Unido" : src6 ,
    "Italia" : src12,
    "Alemania" : src5 ,
    "Francia"  : src4 , 
    "Canada" : src10 , 
    "Sudáfrica" : src8 ,
    "India" : src13  , 
    "Australia" :  src16 ,
    "Egipto" : src11 ,
    "Nueva Zelanda" :  src7,
    "Venezuela" : src9 ,
    "Brasil" : src14 ,
    "Argentina" : src1 
    };
    
    $("#sel1").change(function() {
        var input1 = document.getElementById("sel1").value;
        input1 = dic1[input1]
        $("#imagen").attr("src",input1)
    });
});
               