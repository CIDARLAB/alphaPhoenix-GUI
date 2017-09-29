function getStarted() {

    $.ajax({
        url: "/createProject",
        type: "GET",
        success: function (response) {
            console.log(response);
            document.cookie = "job=job123;path=/"
        },
        error: function () {
            console.log("ERROR!!");
        }
    });
    window.localStorage.setItem("job","job123");
    window.location.href = "./pages/specify.html";
}

