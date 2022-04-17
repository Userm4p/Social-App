$(document).ready(function () {
    var userp = JSON.parse(localStorage.getItem("userp"));
    $('#logout').click(function (e) {
        localStorage.removeItem("user");
        localStorage.removeItem("userp");
      })
    var row = $('<h1 class="text-start">' + userp.alias + "'s Profiles</h1>");
    $("#saludo").append(row);
    var row = $('<h3 class="text-start"> Name: ' + userp.name + "</h3>");
    $("#saludo").append(row);
    var row = $('<h3 class="text-start"> Email: ' + userp.email + "</h3>");
    $("#saludo").append(row);
});