var editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
var stlScript = "((G[0,100] in0 <= 4) && (G[0,100] in0 >= 0)) &&\n (((G[0,50] out0 >= 0)&&(G[0,50] out0 <= 25))&&((G[50,100] out0 >= 25)&&(G[50,100] out0 <= 36)))";

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

function loadSTLSample() {
    editor.setValue(stlScript);
}

function openRegistryList() {
    document.getElementById("registryList").style.width = "35%";
}

function closeRegistryList() {
    document.getElementById("registryList").style.width = "0";
}

