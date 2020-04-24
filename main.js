//catapi
/* <div id="id"></div>
<div id="url"></div>
<div id="image"></div> */


// function gen() {
//         var dest =  document.createElement('div');
//         var imgUrl =  document.createElement('div');
//         var img =  document.createElement('div');
//         dest.setAttribute('id', 'id');
//         imgUrl.setAttribute('id', 'url');
//         img.setAttribute('id', 'image');
// }


let catG = document.querySelector('.catbtn');

function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


catG.addEventListener('click', gen);


function gen() {
    ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {

        var img = '<img class="imgg" src="' + data[0]["url"] + '">';

        document.getElementById("image").innerHTML = img;



    });
}