
document.getElementById('Boton01').addEventListener('click', function() {
    document.getElementById("demo").innerHTML = "Claudio Guillermo Platt";
});

document.getElementById('Boton02').addEventListener('click', function() {
   document.getElementById("demo").innerHTML = "claudioplatt@hotmail.com"; 
   document.body.style.background = '#FF0000';
});

document.getElementById('Boton03').addEventListener('click', function() {
    document.getElementById("demo").innerHTML = "www.termoplatt.com";
    document.body.style.background = 'yellow';
 });

 const collection = document.getElementsByClassName("prueba");
 for (let i = 0; i < collection.length; i++) {
   collection[i].style.backgroundColor = "green";
 }