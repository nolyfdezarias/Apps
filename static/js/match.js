$(document).ready(function (){

    var dic1 = {
        "US" : "US",
        "España" : "ES",
        "México": "MX" ,
        "Reino Unido" : "GB"  ,
        "Italia" : "IT",
        "Alemania" : "DE" ,
        "Francia"  :"FR" , 
        "Canada" :"CA" , 
        "Sudáfrica" : "ZA" ,
        "India" : "IN"  , 
        "Australia" :  "AU" ,
        "Egipto" : "EG" ,
        "Nueva Zelanda" :  "NZ" ,
        "Venezuela" : "VE" ,
        "Brasil" : "BR" ,
        "Argentina" : "AR" 

    };

    var dic = {'US_US': 100, 'US_AU': 54, 'US_CA': 66, 'US_CN': 1, 'US_FR': 30, 'US_DE': 31, 'US_GB': 52, 'US_IT': 29, 'US_KR': 15, 'US_JP': 7, 'US_RU': 18, 'US_AR': 32, 'US_BR': 26, 'US_IN': 34, 'US_MX': 39, 'US_NZ': 53, 'US_EG': 30, 'US_ZA': 40, 'US_ES': 30, 'US_VE': 20, 'AU_US': 54, 'AU_AU': 100, 'AU_CA': 58, 'AU_CN': 0, 'AU_FR': 34, 'AU_DE': 35, 'AU_GB': 54, 'AU_IT': 26, 'AU_KR': 13, 'AU_JP': 7, 'AU_RU': 20, 'AU_AR': 33, 'AU_BR': 27, 'AU_IN': 31, 'AU_MX': 35, 'AU_NZ': 59, 'AU_EG': 31, 'AU_ZA': 41, 'AU_ES': 30, 'AU_VE': 18, 'CA_US': 66, 'CA_AU': 58, 'CA_CA': 100, 'CA_CN': 3, 'CA_FR': 35, 'CA_DE': 37, 'CA_GB': 53, 'CA_IT': 31, 'CA_KR': 17, 'CA_JP': 7, 'CA_RU': 18, 'CA_AR': 37, 'CA_BR': 30, 'CA_IN': 34, 'CA_MX': 41, 'CA_NZ': 57, 'CA_EG': 32, 'CA_ZA': 40, 'CA_ES': 32, 'CA_VE': 21, 'CN_US': 1, 'CN_AU': 0, 'CN_CA': 3, 'CN_CN': 100, 'CN_FR': 2, 'CN_DE': 3, 'CN_GB': 1, 'CN_IT': 0, 'CN_KR': 3, 'CN_JP': 0, 'CN_RU': 1, 'CN_AR': 0, 'CN_BR': 1, 'CN_IN': 1, 'CN_MX': 2, 'CN_NZ': 1, 'CN_EG': 0, 'CN_ZA': 0, 'CN_ES': 1, 'CN_VE': 1, 'FR_US': 30, 'FR_AU': 34, 'FR_CA': 35, 'FR_CN': 2, 'FR_FR': 100, 'FR_DE': 45, 'FR_GB': 36, 'FR_IT': 37, 'FR_KR': 14, 'FR_JP': 9, 'FR_RU': 23, 'FR_AR': 34, 'FR_BR': 33, 'FR_IN': 28, 'FR_MX': 41, 'FR_NZ': 31, 'FR_EG': 30, 'FR_ZA': 33, 'FR_ES': 41, 'FR_VE': 22, 'DE_US': 31, 'DE_AU': 35, 'DE_CA': 37, 'DE_CN': 3, 'DE_FR': 45, 'DE_DE': 100, 'DE_GB': 36, 'DE_IT': 35, 'DE_KR': 15, 'DE_JP': 8, 'DE_RU': 23, 'DE_AR': 32, 'DE_BR': 32, 'DE_IN': 25, 'DE_MX': 37, 'DE_NZ': 32, 'DE_EG': 26, 'DE_ZA': 31, 'DE_ES': 37, 'DE_VE': 21, 'GB_US': 52, 'GB_AU': 54, 'GB_CA': 53, 'GB_CN': 1, 'GB_FR': 36, 'GB_DE': 36, 'GB_GB': 100, 'GB_IT': 27, 'GB_KR': 13, 'GB_JP': 7, 'GB_RU': 18, 'GB_AR': 33, 'GB_BR': 25, 'GB_IN': 29, 'GB_MX': 35, 'GB_NZ': 47, 'GB_EG': 28, 'GB_ZA': 45, 'GB_ES': 30, 'GB_VE': 18, 'IT_US': 29, 'IT_AU': 26, 'IT_CA': 31, 'IT_CN': 0, 'IT_FR': 37, 'IT_DE': 35, 'IT_GB': 27, 'IT_IT': 100, 'IT_KR': 14, 'IT_JP': 8, 'IT_RU': 21, 'IT_AR': 36, 'IT_BR': 27, 'IT_IN': 25, 'IT_MX': 36, 'IT_NZ': 31, 'IT_EG': 24, 'IT_ZA': 28, 'IT_ES': 38, 'IT_VE': 22, 'KR_US': 15, 'KR_AU': 13, 'KR_CA': 17, 'KR_CN': 3, 'KR_FR': 14, 'KR_DE': 15, 'KR_GB': 13, 'KR_IT': 14, 'KR_KR': 100, 'KR_JP': 9, 'KR_RU': 11, 'KR_AR': 13, 'KR_BR': 14, 'KR_IN': 12, 'KR_MX': 14, 'KR_NZ': 13, 'KR_EG': 10, 'KR_ZA': 12, 'KR_ES': 15, 'KR_VE': 12, 'JP_US': 7, 'JP_AU': 7, 'JP_CA': 7, 'JP_CN': 0, 'JP_FR': 9, 'JP_DE': 8, 'JP_GB': 7, 'JP_IT': 8, 'JP_KR': 9, 'JP_JP': 100, 'JP_RU': 8, 'JP_AR': 8, 'JP_BR': 7, 'JP_IN': 8, 'JP_MX': 8, 'JP_NZ': 7, 'JP_EG': 7, 'JP_ZA': 7, 'JP_ES': 8, 'JP_VE': 5, 'RU_US': 18, 'RU_AU': 20, 'RU_CA': 18, 'RU_CN': 1, 'RU_FR': 23, 'RU_DE': 23, 'RU_GB': 18, 'RU_IT': 21, 'RU_KR': 11, 'RU_JP': 8, 'RU_RU': 100, 'RU_AR': 17, 'RU_BR': 17, 'RU_IN': 14, 'RU_MX': 21, 'RU_NZ': 19, 'RU_EG': 17, 'RU_ZA': 16, 'RU_ES': 20, 'RU_VE': 12, 'AR_US': 32, 'AR_AU': 33, 'AR_CA': 37, 'AR_CN': 0, 'AR_FR': 34, 'AR_DE': 32, 'AR_GB': 33, 'AR_IT': 36, 'AR_KR': 13, 'AR_JP': 8, 'AR_RU': 17, 'AR_AR': 100, 'AR_BR': 35, 'AR_IN': 27, 'AR_MX': 59, 'AR_NZ': 33, 'AR_EG': 26, 'AR_ZA': 31, 'AR_ES': 45, 'AR_VE': 36, 'BR_US': 26, 'BR_AU': 27, 'BR_CA': 30, 'BR_CN': 1, 'BR_FR': 33, 'BR_DE': 32, 'BR_GB': 25, 'BR_IT': 27, 'BR_KR': 14, 'BR_JP': 7, 'BR_RU': 17, 'BR_AR': 35, 'BR_BR': 100, 'BR_IN': 28, 'BR_MX': 37, 'BR_NZ': 24, 'BR_EG': 27, 'BR_ZA': 25, 'BR_ES': 33, 'BR_VE': 21, 'IN_US': 34, 'IN_AU': 31, 'IN_CA': 34, 'IN_CN': 1, 'IN_FR': 28, 'IN_DE': 25, 'IN_GB': 29, 'IN_IT': 25, 'IN_KR': 12, 'IN_JP': 8, 'IN_RU': 14, 'IN_AR': 27, 'IN_BR': 28, 'IN_IN': 100, 'IN_MX': 33, 'IN_NZ': 28, 'IN_EG': 36, 'IN_ZA': 33, 'IN_ES': 26, 'IN_VE': 20, 'MX_US': 39, 'MX_AU': 35, 'MX_CA': 41, 'MX_CN': 2, 'MX_FR': 41, 'MX_DE': 37, 'MX_GB': 35, 'MX_IT': 36, 'MX_KR': 14, 'MX_JP': 8, 'MX_RU': 21, 'MX_AR': 59, 'MX_BR': 37, 'MX_IN': 33, 'MX_MX': 100, 'MX_NZ': 34, 'MX_EG': 30, 'MX_ZA': 31, 'MX_ES': 47, 'MX_VE': 40, 'NZ_US': 53, 'NZ_AU': 59, 'NZ_CA': 57, 'NZ_CN': 1, 'NZ_FR': 31, 'NZ_DE': 32, 'NZ_GB': 47, 'NZ_IT': 31, 'NZ_KR': 13, 'NZ_JP': 7, 'NZ_RU': 19, 'NZ_AR': 33, 'NZ_BR': 24, 'NZ_IN': 28, 'NZ_MX': 34, 'NZ_NZ': 100, 'NZ_EG': 30, 'NZ_ZA': 44, 'NZ_ES': 28, 'NZ_VE': 19, 'EG_US': 30, 'EG_AU': 31, 'EG_CA': 32, 'EG_CN': 0, 'EG_FR': 30, 'EG_DE': 26, 'EG_GB': 28, 'EG_IT': 24, 'EG_KR': 10, 'EG_JP': 7, 'EG_RU': 17, 'EG_AR': 26, 'EG_BR': 27, 'EG_IN': 36, 'EG_MX': 30, 'EG_NZ': 30, 'EG_EG': 100, 'EG_ZA': 37, 'EG_ES': 26, 'EG_VE': 23, 'ZA_US': 40, 'ZA_AU': 41, 'ZA_CA': 40, 'ZA_CN': 0, 'ZA_FR': 33, 'ZA_DE': 31, 'ZA_GB': 45, 'ZA_IT': 28, 'ZA_KR': 12, 'ZA_JP': 7, 'ZA_RU': 16, 'ZA_AR': 31, 'ZA_BR': 25, 'ZA_IN': 33, 'ZA_MX': 31, 'ZA_NZ': 44, 'ZA_EG': 37, 'ZA_ZA': 100, 'ZA_ES': 31, 'ZA_VE': 20, 'ES_US': 30, 'ES_AU': 30, 'ES_CA': 32, 'ES_CN': 1, 'ES_FR': 41, 'ES_DE': 37, 'ES_GB': 30, 'ES_IT': 38, 'ES_KR': 15, 'ES_JP': 8, 'ES_RU': 20, 'ES_AR': 45, 'ES_BR': 33, 'ES_IN': 26, 'ES_MX': 47, 'ES_NZ': 28, 'ES_EG': 26, 'ES_ZA': 31, 'ES_ES': 100, 'ES_VE': 28, 'VE_US': 20, 'VE_AU': 18, 'VE_CA': 21, 'VE_CN': 1, 'VE_FR': 22, 'VE_DE': 21, 'VE_GB': 18, 'VE_IT': 22, 'VE_KR': 12, 'VE_JP': 5, 'VE_RU': 12, 'VE_AR': 36, 'VE_BR': 21, 'VE_IN': 20, 'VE_MX': 40, 'VE_NZ': 19, 'VE_EG': 23, 'VE_ZA': 20, 'VE_ES': 28, 'VE_VE': 100};
    $("#Bmatch").click(function() {
        var input1 = document.getElementById("sel2").value;
        var input2 = document.getElementById("sel3").value;
        var input11 = dic1[input1]
        var input22 = dic1[input2]
        var mykey = input11 + "_" + input22
        mykey = dic[mykey]
        document.getElementById("match").innerHTML = "La similitud de los países: " + input1 + " y " + input2  + " es de un "  + mykey + " porciento";
    });

}); 
