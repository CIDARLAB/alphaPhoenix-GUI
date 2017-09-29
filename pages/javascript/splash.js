function getStarted() {

    $.ajax({
        url: "/createProject",
        type: "GET",
        success: function (response) {
            console.log(response);
            window.localStorage.setItem("job","job123");
            window.location.href = "./pages/specify.html";
        },
        error: function () {
            console.log("ERROR!!");
        }
    });
}

