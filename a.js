function a(event, href, target){
  var tar = target ? target : "_blank";
  if(typeof href === "undefined" || href === ""){
    return;
  }
  var el = document.createElement("a");
  el.setAttribute('href', href);
  el.setAttribute('target', tar);
  if (el.fireEvent) {
    el.fireEvent('onclick');
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent('click', true, false);
    el.dispatchEvent(evObj);
  }
  return false;
}
