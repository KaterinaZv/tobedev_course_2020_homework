
// Проверка на правильность ввода телефона
function dataCheking (phone) {
    var phoneno = /^((\+7|7|8)+([0-9]){10})$/;

    if(phone.match(phoneno)) {
        return(true); 
    } else {
            return(false);
      }  
}

// Проверка имени на русские буквы
function nameVerification (name) {
    //var rus = /((^[А-Я])([а-яё]+))\s(([А-Я])([а-яё]+))/g; 
      var rus = /((^[А-Я])([а-яё]+))/g;
    
        if (name.match(rus)) {
             return(true);
        } else {
            return(false);
          }
}


module.exports.dataCheking = dataCheking;
module.exports.nameVerification = nameVerification;