document.addEventListener("DOMContentLoaded", function() {

    var xmlhttp = new XMLHttpRequest();
    var url = "../assets/lists.json";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var lists = JSON.parse(this.responseText);
            createLists(lists);
            console.log("fdas" + lists);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function createLists(lists) {
        var out = "";
        var i;
        for(i = 0; i < lists.length; i++) {
            out += '<p>' + lists.bands[i].name + '</p><br>' +
                '<p>' + lists.movies[i].name + '</p><br>' +
                '<p>' + lists.brands[i].name +'</p><br>'+
                '<p>' + lists.writers[i].name + '</p><br>';
        }
        console.log("out" + out);
        document.getElementById("list").innerHTML = out;
    }
});