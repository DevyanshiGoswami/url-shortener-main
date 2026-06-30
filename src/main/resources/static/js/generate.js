$(document).ready(function () {

    $(".accept-btn").click(function () {

        let originalUrl = $("#input-link").val().trim();

        if (isValidUrl(originalUrl)) {

            let data = JSON.stringify({
                url: originalUrl
            });

            $.ajax({
                url: "http://localhost:8080/api/public/generate",
                type: "POST",
                data: data,
                contentType: "application/json; charset=utf-8",

                success: function (resp) {
                    $("#output-link").val(resp.url);
                },

                error: function (data) {
                    alert(data.status + ": " + data.statusText);
                }

            });

        } else {
            alert("Invalid URL, please try again.");
        }

    });

    $("#copy-btn").click(function () {

        let shortUrl = $("#output-link").val();

        if (shortUrl === "") {
            alert("No shortened URL to copy.");
            return;
        }

        navigator.clipboard.writeText(shortUrl).then(function () {
            $("#copy-btn").text("Copied!");

            setTimeout(function () {
                $("#copy-btn").text("Copy");
            }, 2000);
        });

    });

});

function isValidUrl(url) {
    return /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i.test(url);
}