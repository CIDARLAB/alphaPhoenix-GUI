$().ready(function () {
    $('#registrySelect').on('change',function() {
        getCollections($('#registrySelect').val());
    });
    $('#collectionsSelect').on('change',function() {
        getParts($('#registrySelect').val(), $('#collectionsSelect').val());
    });
    var libraryRegistry = window.localStorage.getItem('libraryRegistry');
    if(libraryRegistry) {
        $('#registrySelect').val(libraryRegistry);
        getCollections($('#registrySelect').val()).then(() => {
            var libraryCollection = window.localStorage.getItem('libraryCollection');
            if(libraryCollection) {
                $('#collectionsSelect').val(libraryCollection);
                getParts(libraryRegistry, libraryCollection);
            }
        });
    }


    function getCollections(registry) {
        return new Promise((resolve, reject) => {
            $("#collectionsLoading").addClass('is-loading');
            const urlParts = registry.split('//');
            if(urlParts[0].includes('http')) {
                urlParts.shift();
            }
            var url = ['http://',urlParts[0],'/rootCollections'].join('');
            $.ajax({
                url: url,
                success: function(response) {
                    $("#collectionsLoading").removeClass('is-loading');
                    $("#collectionsSelect option").remove(); // remove any existing options
                    $.each(response, function(i, value) {
                        $("#collectionsSelect").append($('<option>', {
                            text: value.name,
                            value: value.uri,
                        }));
                    });
                    getParts(registry,response[0].uri);
                    window.localStorage.setItem('libraryRegistry', $('#registrySelect').val());
                    resolve();
                },
            });
        });
    }

    function getParts(registry,url) {
        $("#collectionsLoading").addClass('is-loading');
        const urlParts = registry.split('//');
        if(urlParts[0].includes('http')) {
            urlParts.shift();
        }
        var encodedUrl = encodeURIComponent(url);
        url = ['http://',urlParts[0],'/remoteSearch/collection%3D%3C',encodedUrl,'%3E&?offset=0&limit=1000'].join('');
        $.ajax({
            url: url,
            success: function(response) {
                $("#collectionsLoading").removeClass('is-loading');
                $('#libraryTable').empty();
                for(var part of response) {
                    $('#libraryTable').append('<tr><th>'+ part.displayId +'</th><th>'+ part.name +'</th> <th>'+ part.description +'</th></tr>')
                }
                $('#libraryIcon').empty().addClass('icon').removeClass('has-text-danger').addClass('has-text-success').append('<i class="fa fa-check-square"></i>');
                window.localStorage.setItem('libraryCollection', $('#collectionsSelect').val());
            },
            error: function (response) {
                $("#collectionsLoading").removeClass('is-loading');
                $('#libraryIcon').empty().addClass('icon').removeClass('has-text-success').addClass('has-text-danger').append('<i class="fa fa-warning"></i>');
            }
        });
    }
});