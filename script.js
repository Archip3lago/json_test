$.getJSON('saker.json', function(data) {
    console.log(data.lista);
    
    $('<ul/>', {'class': 'lista'}).text('Min Lista:').appendTo('#div1');
            $.each(data.array, function(key, val){
                $('<li>' + key + '').text(val).appendTo('#div1');
                $('<br>').appendTo('#div1');
            });
            
   
});