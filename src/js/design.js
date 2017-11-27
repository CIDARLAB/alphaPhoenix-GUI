'use strict';
var editor;

$().ready(function () {
    editor = ace.edit('editor');
    editor.setTheme('ace/theme/chrome');
    editor.getSession().setMode('ace/mode/xml');
    editor.setShowPrintMargin(false);
    var menuIndex = Number(window.localStorage.getItem('menuIndex'));
    if (!menuIndex) {
        menuIndex = 0;
    }
    setMenuIndex(menuIndex);
});

function setMenuIndex(index) {
    index = Number(index);
    switch (index) {
        case 0:
            window.localStorage.setItem('menuIndex', 0);
            window.location.href = '/alphaPhoenix-GUI/build/pages/specification.html';
            break;
        case 1:
            window.localStorage.setItem('menuIndex', 0);
            window.location.href = '/alphaPhoenix-GUI/build/pages/specification.html';
            break;
        case 2:
            window.localStorage.setItem('menuIndex', 0);
            window.location.href = '/alphaPhoenix-GUI/build/pages/specification.html';
            break;
        case 3:
            $('#assignmentTab').addClass('is-active');
            $('#assignment').show();
            $('#optionsTab').removeClass('is-active');
            $('#options').hide();
            window.localStorage.setItem('menuIndex', 3);
            console.log('test');
            break;
    }
    return;
}