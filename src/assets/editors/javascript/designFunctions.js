// Search Window
function updateSearchPanel(selectedItem,searchString) {
    if (searchString == "[]") {
        return;
    }
    $("#search-window ul li").remove(); // remove all list items to begin
    var subItems = searchString.substring(2,searchString.length-2).split(";") // removes brackets and spaces 
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
    // var xml;
    // if (sbolString == "") {
    //     xml = window.localStorage.json;
    // } else {
    var xml = getSBOL(sbolString);
    // }
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

