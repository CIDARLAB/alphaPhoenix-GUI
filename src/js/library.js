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
                getParts(registry,response[0].uri, 0);
            },
        });
    }

    function getParts(registry,url,page) {
        const urlParts = registry.split('//');
        if(urlParts[0].includes('http')) {
            urlParts.shift();
        }
        const offset = 50 * page;
        url = ['http://',urlParts[0],'/remoteSearch/uri=',url,'&?offset=',offset,'&limit=50'].join('');
        $.ajax({
            url: url,
            success: function(response) {
                console.log(response)
            },
        });
    }
});