

document.getElementById('add-money-box').style.display = 'block';
document.getElementById('Cashout').style.display = 'none';

document.getElementById('add-money-box').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('Cashout').style.display = 'none';
    document.getElementById('addMoney').style.display = 'block';

})

document.getElementById('Cashout-box').addEventListener('click', function(){
    document.getElementById('Cashout').style.display = 'block';
    document.getElementById('addMoney').style.display = 'none';
})



