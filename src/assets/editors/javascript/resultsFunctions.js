
$(window).on('load', function() {    
    // adjust grid size:
    $("#gridCanvas").css("height", $("#graphZone").height()); // height is percentage of tab, axis controls are below
    yLabel.position = new Point (10, $("#graphZone").height() / 2);
    gC.view.viewSize.width = $("#graphZone").width();
    gC.view.viewSize.height = $("#graphZone").height();

    // for testing, the following happen automatically:
    loadVisBOL("https://synbiohub.programmingbiology.org/public/Cello_Parts/B1_BM3R1/1/sbol");
    svgLayer._children[0].position.y = sC.view.center.y;
    
    loadPaths(traceData);
})

function getSBOL() {
     $.ajax({
        url: "/getSBOL",
        type: "GET",
        success: function (response) {
            fname = "sbol.xml"
            writeSBOL(response);
        },
        error: function () {
            console.log("ERROR!!");
        }
    });
}

function getResults() {
    $.ajax({
        url: "/getResults",
        type: "GET",
        success: function (response) {
            fname = "results.zip"
            writeSBOL(response);
        },
        error: function () {
            console.log("ERROR!!");
        }
    });
}

function writeFile(result, filename) {
    // converts result/response file to a document and "clicks" to download
    var hiddenElement;
    var data = "data:text/json;charset=utf-8," + encodeURIComponent(result);
    hiddenElement = document.createElement('a');
    hiddenElement.setAttribute('href', data);
    hiddenElement.setAttribute('download', filename);
    document.body.appendChild(hiddenElement);
    hiddenElement.click();
}