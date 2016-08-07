var number = prompt('Введите число'),
    exponent = prompt('В какую степень возвести?');

function involution(number, exponent){
    
    var result = 1;
    for(var i = 0; i < exponent; i++){
        result *= number;
    }
       
       
    console.log(result);
    return result;
}

involution(number, exponent);

// - Второе задание

var namesOfUsers = [];

for(var i = 0;namesOfUsers.length < 5;i++){
    
    var name = prompt('Добавьте имя пользователя');
    namesOfUsers.push(name);
        
}

var user = prompt('Введите имя пользователя'),
    index = namesOfUsers.indexOf(user);
    
    if(index > -1){
        alert(user + ' Вы успешно вошли!');
    }
    else{
        alert('Ошибка');
    }

    
    












