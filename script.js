let result = document.getElementById('result');
let animalImage = document.getElementById('animalImage');
let animalName = document.getElementById('animalName');

start();
function start(){
    let firstSelect =  prompt('Do you fly?').toLowerCase();
    if(firstSelect == 'yes'){
        wildFlyCheck();
    }else if(firstSelect == 'no'){
        underseas();
    }else{
        errorMsg();
    }
}


function wildFlyCheck(){
    let wildFlySelect = prompt('Are You wild?').toLowerCase();
    if(wildFlySelect == 'yes'){
        showResult(1);
    }else if(wildFlySelect == 'no'){
        showResult(2);
    }else{
        errorMsg();
    }
}

function underseas(){
    let underseasSelect = prompt('Do you live Underseas?').toLowerCase();
    if(underseasSelect == 'yes'){
        wildUnderseasCheck();
    }else if(underseasSelect == 'no'){
        nonWildUnderseasCheck();
    }else{
        errorMsg();
    }
}

function wildUnderseasCheck(){
    let wildUnderseasSelect = prompt('Are you Wild?').toLowerCase();
    if(wildUnderseasSelect == 'yes'){
        showResult(3);
    }else if(wildUnderseasSelect == 'no'){
        showResult(4);
    }else{
        errorMsg();
    }
}

function nonWildUnderseasCheck(){
    let nonWildUnderseasSelect = prompt('Are you Wild?').toLowerCase();
    if(nonWildUnderseasSelect == 'yes'){
        showResult(5);
    }else if(nonWildUnderseasSelect == 'no'){
        showResult(6);
    }else{
        errorMsg();
    }
}
function showResult(x){
    result.classList.remove('d-none')
    let names = ['Eagle', 'Parrot', 'Shark', 'Dolphin', 'Lion', 'Cat'];
    let images = ['1.png', '2.jpg', '3.png', '4.png', '5.jpg', '6.jpg']
    animalName.innerHTML = names[x-1];
    animalImage.src = `imgs/${images[x-1]}`
}

function errorMsg(){
    alert('Enter Valid Input yes or no');
    start();
}