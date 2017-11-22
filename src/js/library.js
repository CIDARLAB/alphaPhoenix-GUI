$().ready(function () {
    $('#registrySelect').on('change',function() {
        getCollections($('#registrySelect').val());
    });


    function getCollections(url) {
        const urlParts = url.split('//');
        if(urlParts[0].includes('http')) {
            urlParts.shift();
        }
        url = ['http://',urlParts[0],'/rootCollections'].join('')
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
            },
        });
    }

    function getParts() {

    }
});