function nextPage(){
    const page1 = document.querySelector('.page1');
    const page2 = document.querySelector('.page2');
    
     

    page1.classList.add('active');
    page2.classList.add('active');

}
var result = document.querySelector('.results');




function Ftea () {
    result.innerHTML = 'Tea';
    var juniosChois = document.querySelector('.juniosChois').innerHTML = computerChios;

    if (juniosChois.length > 3){
        var ords = document.querySelector('.ords').innerHTML = 'come try again next time'
    }
    else {
        var ords = document.querySelector('.ords').innerHTML = 'you will make a good mum'
    }
}

function Fcoffee () {
    result.innerHTML = 'Coffee';
    var juniosChois = document.querySelector('.juniosChois').innerHTML = computerChios;

    if (juniosChois.length === 3){
        var ords = document.querySelector('.ords').innerHTML = 'come try again next time'
    }
    else if (juniosChois.length > 6){
        var ords = document.querySelector('.ords').innerHTML = 'come try again next time'
    }
    else {
        var ords = document.querySelector('.ords').innerHTML = 'you will make a good mum'
    }
}

function Fnothing () {
    result.innerHTML = 'Nothing';
    var juniosChois = document.querySelector('.juniosChois').innerHTML = computerChios;

    if (juniosChois.length === 3){
        var ords = document.querySelector('.ords').innerHTML = 'come try again next time'
    }
    else if (juniosChois.length === 6){
        var ords = document.querySelector('.ords').innerHTML = 'come try again next time'
    }
    else {
        var ords = document.querySelector('.ords').innerHTML = 'you will make a good mum'
    }
}


//computerchiors

var items = ['tea', 'coffee', 'nothing'];


    var randomPick = Math.floor(Math.random() * 3);
    var computerChios = items[randomPick];
    console.log(computerChios);

    




    
  