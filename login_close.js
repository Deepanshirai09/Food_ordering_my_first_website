document.getElementById('btna').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display= 'flex';
});

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display= 'none';
});


document.getElementById('signbtn').addEventListener('click',function(){
    document.querySelector('.sg-modal').style.display= 'flex';
});

document.querySelector('.s-close').addEventListener('click',function(){
    document.querySelector('.sg-modal').style.display= 'none';
});