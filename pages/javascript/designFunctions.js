function highlightPart(partNumber) {

    rectLayer.activate(); // activate correct Layer

    var xStartCoord = svgLayer._children[0].lastChild._children[0]._segments[0]._point._x
    var svgWidth = svgLayer._children[0].lastChild._children[0]._segments[1]._point._x - xStartCoord;
    
    var totalParts = (svgLayer._children[0]._children.length - 3) / 2; // - 3 for Shape, Name, Border, /2 for part Labels
    var partitionWidth = svgWidth/totalParts;

    // define new rectangle:
    var hrPoint = new Point(0, 0);
    var hrSize = new Size(partitionWidth, sC.view.bounds.height);
    var rect = new Path.Rectangle({
        point: hrPoint,
        size: hrSize,
        fillColor: '#d7d7d7',
    });

    // position the rectangle segments (corners) according to width and partID
    for (var i = 0; i < rect._segments.length; i++) {
        if (i == 0 | i == 1) {
            rect._segments[i]._point._x = xStartCoord + (partitionWidth * partNumber);
        } else {
            rect._segments[i]._point._x = xStartCoord + (partitionWidth * partNumber) + partitionWidth;
        }
    }

    rectLayer.addChild(rect); // add rectangle to rectLayer
    rectLayer.sendToBack(); // ensure all rectangles are behind the svgLayer
}

// Search Window
function updateSearchPanel(selectedItem,searchString) {
    // console.log(selectedItem)
    // console.log(searchString)
    if (searchString == "[]") {
        return;
    }
    $("#search-window ul li").remove(); // remove all list items to begin
    var subItems = searchString.substring(2,searchString.length-2).split(", ") // removes brackets and spaces 
    // console.log(subItems)
    for (var i = 0; i < subItems.length; i++) {
        $("#search-window ul").append(
            '<li class="input-group justify-content-between" id="' + subItems[i] + '">' +
                subItems[i] +
            '</li>');
    }
}

// Convert Upload/File Info Area
function updateDataPanel(names, hasData) {
    len = names.length;
    if (len == 1 && (hasData == 0 || hasData == 1)) {
        if (hasData == 1) {
            // change the active Panel:
            $('#noData').hide();
            $('#moduleData').show();
            $('#uploadData').hide();
            $('#multiData').hide();
            // fetch the data from the server and display it...
            $('#modData').text('New data from the server...');
        } else if (hasData == 0) {
            // change the active Panel:
            $('#noData').hide();
            $('#moduleData').hide();
            $('#uploadData').show();
            $('#multiData').hide();
        }
    } else if (len >= 1) {
        // change active Panel:
        $('#noData').hide();
        $('#moduleData').hide();
        $('#uploadData').hide();
        $('#multiData').show();
    } else {
        $('#noData').show();
        $('#moduleData').hide();
        $('#uploadData').hide();
        $('#multiData').hide();
    }
    
}
