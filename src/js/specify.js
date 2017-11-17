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
setTab(0);

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

