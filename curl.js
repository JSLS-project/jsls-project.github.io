function pull_data(url, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      callback(xhttp.responseText);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
