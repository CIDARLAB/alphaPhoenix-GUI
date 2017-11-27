var editor;

$().ready(function(){
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.setShowPrintMargin(false);
    var menuIndex = Number(window.localStorage.getItem('menuIndex'));
    if (!menuIndex) {
        menuIndex = 0;
    }
    setMenuIndex(menuIndex);
});


function setMenuIndex(index) {
    if(Number(window.localStorage.getItem('menuIndex')) !== index) {
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
    }
    return true;
}

function setTab(index) {
    switch(index) {
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

function loadSTLSample(overRight) {
    var value = editor.getValue().trim();
    if(value === '' || overRight) {
        var stlScript = "((G[0,100] in0 <= 4) && (G[0,100] in0 >= 0)) &&\n(((G[0,50] out0 >= 0)&&(G[0,50] out0 <= 25)) && ((G[50,100] out0 >= 25)&&(G[50,100] out0 <= 36)))";
        editor.setValue(stlScript);
        $('#replaceSTL').removeClass('is-active');
    } else {
        $('#replaceSTL').addClass('is-active');
    }
}


function loadEugeneSample(overRight) {
    var value = editor.getValue().trim();
    if(value === '' || overRight) {
        var eugeneScript = "((G[0,100] in0 <= 4) && (G[0,100] in0 >= 0)) &&\n(((G[0,50] out0 >= 0)&&(G[0,50] out0 <= 25)) && ((G[50,100] out0 >= 25)&&(G[50,100] out0 <= 36)))";
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
    var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function remove(id) {
    $( "#" + id ).remove();
    $( "#select" + id ).remove();
}

$().ready(function() {

    setTab(0);

    $('#addRegistry').click(function () {
        var id = guidGenerator();
        var newRegistry = $('#registryBox').val();
        if(newRegistry != '' && newRegistry) {
            var newOption = '<a class="panel-block" id="'+ id +'">' +
                newRegistry +
                '<span class="panel-icon has-text-danger" onclick="remove(\''+ id +'\')">' +
                '<i class="fa fa-times"></i>' +
                '</span>' +
                '</a>';
            $('#registryListOptions').append(newOption);
            var selectOption = ' <option value="' + newRegistry + '" id="select'+ id +'">' + newRegistry + '</option>'
            $('#registrySelect').append(selectOption);
        }
    });

});


