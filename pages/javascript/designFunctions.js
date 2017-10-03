// Search Window
function updateSearchPanel(selectedItem,searchString) {
    if (searchString == "[]") {
        return;
    }
    $("#search-window ul li").remove(); // remove all list items to begin
    var subItems = searchString.substring(2,searchString.length-2).split(", ") // removes brackets and spaces 
    for (var i = 0; i < subItems.length; i++) {
        if (subItems[i] == "ul") { // if "combos" node isn't defined, it will be skipped
            return;
        }
        $("#search-window ul").append(
            '<li class="input-group justify-content-between" id="' + subItems[i] + '">' +
                subItems[i] +
            '</li>');
    }
}

function searchOptions() {
    var filter = $("#search-box").val().toUpperCase();
    var li = $("#search-window li") // gets all li within the search-window

    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function loadXML(sbolString) {
    var xml;
    if (sbolString == "") {
        xml = '<?xml version="1.0" encoding="UTF-8" ?><employees><employee><id>1</id><firstName>Leonardo</firstName><lastName>DiCaprio</lastName><photo>http://1.bp.blogspot.com/-zvS_6Q1IzR8/T5l6qvnRmcI/AAAAAAAABcc/HXO7HDEJKo0/s200/Leonardo+Dicaprio7.jpg</photo></employee><employee><id>2</id><firstName>Johnny</firstName><lastName>Depp</lastName><photo>http://4.bp.blogspot.com/_xR71w9-qx9E/SrAz--pu0MI/AAAAAAAAC38/2ZP28rVEFKc/s200/johnny-depp-pirates.jpg</photo></employee><employee><id>3</id><firstName>Hritik</firstName><lastName>Roshan</lastName><photo>http://thewallmachine.com/files/1411921557.jpg</photo></employee></employees>'        
    } else {
        xml = sbolString;
    }
    var newxml = vkbeautify.xml(xml);
    editor.setValue(newxml);
}

function overrideSBML() {          
    var file = $("#SBML-override")[0].files; // get file from input
    var formData = new FormData(); // new FormData object

    // Check the file type.
    if (file.type.match('text.*')) {
        formData.append('file[]',file,file.name);
    }

    // Set up the request.
    var xhr = new XMLHttpRequest();

    // Open the connection.
    xhr.open('POST', 'uploadSBMLOverride', true);
    
    // Set up a handler for when the request finishes.
    xhr.onload = function () {
        if (xhr.status === 200) {
            // File(s) uploaded.
            // uploadButton.innerHTML = 'Upload';
        } else {
            alert('An error occurred!');
        }
    };

    // Send the Data.
    xhr.send(formData);

}

