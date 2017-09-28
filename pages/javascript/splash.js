function getStarted() {

    $.ajax({
        url: "/createProject",
        type: "GET",
        success: function (response) {
            console.log(response);
        },
        error: function () {
            console.log("ERROR!!");
        }
    });

    window.location.href = "./pages/specify.html";
}

