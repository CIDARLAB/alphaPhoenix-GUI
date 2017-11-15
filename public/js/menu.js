function setMenuIndex(index) {
    switch(index) {
        case 0:
            $('#performanceTab').addClass('is-active');
            $('#performance').show();
            $('#structuralTab').removeClass('is-active');
            $('#structural').hide();
            $('#libraryTab').removeClass('is-active');
            $('#library').hide();
            break;
        case 1:
            $('#performanceTab').removeClass('is-active');
            $('#performance').hide();
            $('#structuralTab').addClass('is-active');
            $('#structural').show();
            $('#libraryTab').removeClass('is-active');
            $('#library').hide();
            $(editor2).resize();
            break;
        case 2:
            $('#performanceTab').removeClass('is-active');
            $('#performance').hide();
            $('#structuralTab').removeClass('is-active');
            $('#structural').hide();
            $('#libraryTab').addClass('is-active');
            $('#library').show();
            break;
    }
    return true;
}

$().ready(function() {
    setMenuIndex(0);
})
