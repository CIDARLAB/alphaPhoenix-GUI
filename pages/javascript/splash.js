function getStarted() {

    $.ajax({
        url: "/createProject",
        type: "GET",
        success: function (response) {
            console.log(response);
            window.location.href = "./pages/specify.html";
        },
        error: function () {
            console.log("ERROR!!");
        }
    });

    
}

