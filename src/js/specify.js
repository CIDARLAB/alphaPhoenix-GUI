'use strict';
var editor;

$().ready(function () {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.setShowPrintMargin(false);
    editor.getSession().on('change', function() {
        editorChanged();
    });
    var menuIndex = Number(window.localStorage.getItem('menuIndex'));
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
            window.localStorage.setItem('menuIndex', 0);
            window.localStorage.setItem('editorEugene', editor.getValue());
            editor.setValue(window.localStorage.getItem('editorSTL'));
            $("#editor").appendTo("#editorSTL");
            validateEugene(window.localStorage.getItem('editorEugene'));
            break;
        case 1:
            $('#performanceTab').removeClass('is-active');
            $('#performance').hide();
            $('#structuralTab').addClass('is-active');
            $('#structural').show();
            $('#libraryTab').removeClass('is-active');
            $('#library').hide();
            window.localStorage.setItem('menuIndex', 1);
            window.localStorage.setItem('editorSTL', editor.getValue());
            editor.setValue(window.localStorage.getItem('editorEugene'));
            $("#editor").appendTo("#editorEugene");
            validateSTL(window.localStorage.getItem('editorSTL'));
            break;
        case 2:
            $('#performanceTab').removeClass('is-active');
            $('#performance').hide();
            $('#structuralTab').removeClass('is-active');
            $('#structural').hide();
            $('#libraryTab').addClass('is-active');
            $('#library').show();
            window.localStorage.setItem('menuIndex', 2);
            break;
        case 3:
            window.localStorage.setItem('menuIndex', 3);
            window.location.href = '/alphaPhoenix-GUI/build/pages/design.html';
            break;
    }
    return;
}

function setTab(index) {
    switch (index) {
        case 0:
            $('#stlTab').addClass('is-active');
            $('#stl').show();
            $('#gridTab').removeClass('is-active');
            $('#grid').hide();
            break;
        case 1:
            $('#stlTab').removeClass('is-active');
            $('#stl').hide();
            $('#gridTab').addClass('is-active');
            $('#grid').show();
            break;
    }
    return true;
}

function editorChanged() {
    var menuIndex = Number(window.localStorage.getItem('menuIndex'));
    switch (menuIndex) {
        case 0:
            var value = editor.getValue();
            window.localStorage.setItem('editorSTL', value);
            validateSTL(value);
            break;
        case 1:
            var value = editor.getValue();
            window.localStorage.setItem('editorEugene', value);
            validateEugene(value);
            break;
    }
}

function validateSTL(value) {
    $('#performanceIcon').empty().addClass('icon').removeClass('has-text-danger').addClass('has-text-success').append('<i class="fa fa-check-square"></i>');
}

function validateEugene(value) {
    $('#structuralIcon').empty().addClass('icon').removeClass('has-text-danger').addClass('has-text-success').append('<i class="fa fa-check-square"></i>');
}

function loadSTLSample(overRight) {
    var value = editor.getValue().trim();
    if (value === '' || overRight) {
        var stlScript = "((G[0,100] in0 <= 4) && (G[0,100] in0 >= 0)) &&\n(((G[0,50] out0 >= 0)&&(G[0,50] out0 <= 25)) && ((G[50,100] out0 >= 25)&&(G[50,100] out0 <= 36)))";
        editor.setValue(stlScript);
        $('#replaceSTL').removeClass('is-active');
    } else {
        $('#replaceSTL').addClass('is-active');
    }
}


function loadEugeneSample(overRight) {
    var value = editor.getValue().trim();
    if (value === '' || overRight) {
        var eugeneScript = "\
// Size = 8\n\
// 24 Solutions\n\
\n\
// COUNTING\n\
ip1 exactly 1\n\
rp1 exactly 1\n\
g1 exactly 1\n\
unk2 exactly 1\n\
r1 exactly 1\n\
r2 exactly 1\n\
t1 exactly 1\n\
t2 exactly 1\n\
\n\
// INTERACTIONS\n\
g1 represses rp1\n\
ip1 drives g1\n\
not ip1 drives unk2\n\
rp1 drives unk2\n\
not rp1 drives g1\n\
\n\
//POSITIONING\n\
r1 nextto g1\n\
r1 SAME_ORIENTATION g1\n\
r1 before g1 or r1 after g1\n\
r1 before g1 or reverse r1\n\
forward r1 or r1 after g1\n\
forward r1 or reverse r1\n\
\n\
r2 nextto unk2\n\
r2 SAME_ORIENTATION unk2\n\
r2 before unk2 or r2 after unk2\n\
r2 before unk2 or reverse r2\n\
forward r2 or r2 after unk2\n\
forward r2 or reverse r2\n\
\n\
t2 after unk2 or t2 before unk2\n\
t2 after unk2 or reverse unk2\n\
forward unk2 or t2 before unk2\n\
forward unk2 or reverse unk2\n\
\n\
t1 after g1 or t1 before g1\n\
t1 after g1 or reverse g1\n\
forward g1 or t1 before g1\n\
forward g1 or reverse g1\n\
\n\
//ORIENTATION\n\
ip1 SAME_ORIENTATION r1\n\
ip1 SAME_ORIENTATION t1\n\
rp1 SAME_ORIENTATION r2\n\
rp1 SAME_ORIENTATION t2";
        editor.setValue(eugeneScript);
        $('#replaceEugene').removeClass('is-active');
    } else {
        $('#replaceEugene').addClass('is-active');
    }
}

function closeEugeneReplace() {
    $('#replaceEugene').removeClass('is-active');
}

function closeSTLReplace() {
    $('#replaceSTL').removeClass('is-active');
}

function openRegistryList() {
    document.getElementById("registryList").style.width = "35%";
}

function closeRegistryList() {
    document.getElementById("registryList").style.width = "0";
}

function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function remove(id) {
    $("#" + id).remove();
    $("#select" + id).remove();
}

$().ready(function () {

    setTab(0);

    $('#addRegistry').click(function () {
        var id = guidGenerator();
        var newRegistry = $('#registryBox').val();
        if (newRegistry != '' && newRegistry) {
            var newOption = '<a class="panel-block" id="' + id + '">' +
                newRegistry +
                '<span class="panel-icon has-text-danger" onclick="remove(\'' + id + '\')">' +
                '<i class="fa fa-times"></i>' +
                '</span>' +
                '</a>';
            $('#registryListOptions').append(newOption);
            var selectOption = ' <option value="' + newRegistry + '" id="select' + id + '">' + newRegistry + '</option>'
            $('#registrySelect').append(selectOption);
        }
    });

});


