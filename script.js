function searchMovie() {
    $('#movie-list').html('');
    
    $.ajax ({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data:{
            'apikey' : '8a21eb7a',
            's' : $('#search-input').val()
        },
        success: function (result) {
            if (result.Response == "True") {
                let movies = result.Search;
                // <div class="card-body">
                // </div>
                $.each(movies, function (i, data) {
                    $('#movie-list').append(` 
                    <div class="col-md-2">
                        <div class="card mb-3">
                            <img src="` + data.Poster + `" class="card-img-top" alt="...">
                            <h5 class="card-title">`+ data.Title +`</h5>
                            <h6 class="card-subtitle mb-2 text-muted">`+ data.Year+`</h6> 
                        </div>
                    </div>
                    `);
                });
                
                $('#search-input').val('');

            } else {
                $('#movie-list').html(`
                    <div class="col">
                        <h1 class="text-center">` + result.Error + `</h1>
                    </div>
                `)
            }

        }
    });
}


$('#search-button').on('click', function() {
    searchMovie();

});

$('#search-input').on('keyup', function (e) {
    if (e.which === 13) {
    searchMovie();
    } 
})