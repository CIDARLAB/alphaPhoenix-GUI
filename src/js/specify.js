var editorSTL = ace.edit("editorSTL");
editorSTL.setTheme("ace/theme/chrome");
editorSTL.setShowPrintMargin(false);

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
    var value = editorSTL.getValue().trim();
    if(value === '' || overRight) {
        var stlScript = "((G[0,100] in0 <= 4) && (G[0,100] in0 >= 0)) &&\n(((G[0,50] out0 >= 0)&&(G[0,50] out0 <= 25)) && ((G[50,100] out0 >= 25)&&(G[50,100] out0 <= 36)))";
        editorSTL.setValue(stlScript);
        $('#replaceSTL').removeClass('is-active');
    } else {
        $('#replaceSTL').addClass('is-active');
    }
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

$().ready(function() {

    setTab(0);

    $('#addRegistry').click(function () {
        var id = guidGenerator();
        var newRegistry = $('#registryBox').val();
        if(newRegistry != '' && newRegistry) {
            var newOption = '<a class="panel-block" id="'+ id +'">' +
                newRegistry +
                '<span class="panel-icon has-text-danger">' +
                '<i class="fa fa-times"></i>' +
                '</span>' +
                '</a>';
            $('#registryListOptions').append(newOption);
        }
    });

});


