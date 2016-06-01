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
      pull_data("https://api.github.com/repos/JSLS-project/JavaScript-Language-Syntax-Schema/commits/master", function(response){
        response = JSON.parse(response)
        var status = document.getElementById("github-status"),
            status_doc = document.createElement("div"),
            user_doc = document.createElement("div"),
            user_link = document.createElement("a"),
            commit_doc = document.createElement("div"),
            commit_text = document.createElement("p"),
            commit_link = document.createElement("a");
        user_link.onclick = a(response.committer.html_url);
        user_link.innerText = response.commit.author.name + " (" + response.committer.login + ")"
        user_doc.appendChild(user_link);
        status_doc.appendChild(user_doc);
        commit_text.innerText = response.commit.message;
        commit_doc.appendChild(commit_text);
        commit_link.onclick = a(response.html_url);
        commit_link.innerText = "commit: " + response.sha.substring(0,7);
        commit_doc.appendChild(commit_link);
        status_doc.appendChild(commit_doc);
        status.appendChild(status_doc);
      })
    },
    "repos" : function(){
    },
    "graphs" : function(){
    }
  }
  window.gittoy.setView("status");
}
