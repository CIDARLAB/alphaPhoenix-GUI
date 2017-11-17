const localStorage = window.localStorage;

$().ready(function(){
    var menuIndex = Number(localStorage.getItem('menuIndex'));
    if (!menuIndex) {
        menuIndex = 0;
    }
    setMenuIndex(menuIndex);
});


function setMenuIndex(index) {
    switch (index) {
        case 0:
            $('#performanceTab').addClass('is-active');
            $('#performance').show();
            $('#structuralTab').removeClass('is-active');
            $('#structural').hide();
            $('#libraryTab').removeClass('is-active');
            $('#library').hide();
            localStorage.setItem('menuIndex', 0);
            break;
        case 1:
            $('#performanceTab').removeClass('is-active');
            $('#performance').hide();
            $('#structuralTab').addClass('is-active');
            $('#structural').show();
            $('#libraryTab').removeClass('is-active');
            $('#library').hide();
            localStorage.setItem('menuIndex', 1);
            break;
        case 2:
            $('#performanceTab').removeClass('is-active');
            $('#performance').hide();
            $('#structuralTab').removeClass('is-active');
            $('#structural').hide();
            $('#libraryTab').addClass('is-active');
            $('#library').show();
            localStorage.setItem('menuIndex', 2);
            break;
    }
    return true;
}