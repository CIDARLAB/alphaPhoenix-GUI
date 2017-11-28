$().ready(function () {
    $('#registrySelect').on('change',function() {
        getCollections($('#registrySelect').val());
    });


    function getCollections(registry) {
        const urlParts = registry.split('//');
        if(urlParts[0].includes('http')) {
            urlParts.shift();
        }
        var url = ['http://',urlParts[0],'/rootCollections'].join('');
        $.ajax({
            url: url,
            success: function(response) {
                $("#collectionsSelect option").remove(); // remove any existing options
                $.each(response, function(i, value) {
                    $("#collectionsSelect").append($('<option>', {
                        text: value.name,
                        value: value.uri,
                    }));
                });
                getParts(registry,response[0].uri);
            },
        });
    }

    function getParts(registry,url) {
        const urlParts = registry.split('//');
        if(urlParts[0].includes('http')) {
            urlParts.shift();
        }
        var encodedUrl = encodeURIComponent(url);
        url = ['http://',urlParts[0],'/remoteSearch/collection%3D%3C',encodedUrl,'%3E&?offset=0&limit=1000'].join('');
        $.ajax({
            url: url,
            success: function(response) {
                $('#libraryTable').empty();
                for(var part of response) {
                    $('#libraryTable').append('<tr><th>'+ part.displayId +'</th><th>'+ part.name +'</th> <th>'+ part.description +'</th></tr>')
                }
                $('#libraryIcon').empty().addClass('icon').removeClass('has-text-danger').addClass('has-text-success').append('<i class="fa fa-check-square"></i>');
            },
            error: function (response) {
                $('#libraryIcon').empty().addClass('icon').removeClass('has-text-success').addClass('has-text-danger').append('<i class="fa fa-warning"></i>');
            }
        });
    }
});