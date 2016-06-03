window.onload = function(){
  window.gittoy = {
    "toy" : document.getElementById("github-buttons"),
    "door" : document.getElementById("github-buttons").getAttribute("data-door"),
    "view" : document.getElementById("github-buttons").getAttribute("data-github"),
    "useDoor" : function(){
      if(this.door == "closed"){
        this.door = "opened";
      }else{
        this.door = "closed";
      }
      this.toy.setAttribute("data-door",this.door);
    },
    "setView" : function(view){
      this.view = view
      this.toy.setAttribute("data-github",this.view);
      eval("window.gittoy." + view + "()");
    },
    "status" : function(){
    },
    "repos" : function(){
    },
    "graphs" : function(){
    }
  }
  //window.gittoy.setView("status");
}
