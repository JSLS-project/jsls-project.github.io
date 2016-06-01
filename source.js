function popUpNoBlocker(href){
  if(typeof href === "undefined" || href === ""){
    return;
  }
  var el = document.createElement("a");
  el.setAttribute('href',href);
  if (el.fireEvent) {
    el.fireEvent('onclick');
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent('click', true, false);
    el.dispatchEvent(evObj);
  }
}
