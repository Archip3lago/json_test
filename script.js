$.getJSON('saker.json', function(data) {
    console.log(data.lista);
    $('.ruta').append(data.lista.namn);
});