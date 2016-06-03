var anchur = {
  "renav" : function(navigation){
    var container = document.getElementsByClassName("id_blog-nav")[0],
        container = document.getElementsByClassName("id_blog-content")[0];
    console.log(navigation[1]);
    if(navigation.length == 1){
      container.setAttribute("data-nav",navigation[1]);
    }else{}
  },
  "pending" : {
    "hash" : "",
    "process" : function(){
      window.anchur.process(window.anchur.pending.hash);
    }
  }, 
  "hash" : window.location.hash ? window.location.hash : "#blog",
  "process" : function(hash){
    if(window.pageready === false){
      if(this.pending.hash === ""){
        this.pending.hash = hash;
        window.ready(this.pending.process);
      }else{
        this.pending.hash = hash;
      }
      return;
    }
    hash = hash.substr(1);
    var place = hash;
    if(this.library.primaries.hasOwnProperty(hash)){
      this.library.primaries[hash]();
    }else if(this.library.alternates.hasOwnProperty(hash)){
      this.process("#" + this.library.alternates[hash]);
      return;
    }else if(this.library.categoricals.hasOwnProperty(hash.substring(0,1))){
      this.library.categoricals[hash.substring(0,1)](hash.substr(1));
    }else{
      console.error("Bad url hash (#" + hash + ") used. Please use a valid url hash (like #blog, for the blog section). Use #a_url_hashes to find more on how to use them or view the general about section with #about");
      return;
    }
    console.info("Direction to '" + place + "' was a success!");
  },
  "library" : {
    "primaries" : {
      "blog" : function(){
        window.anchur.renav(["blog"]);
      },
      "commits" : function(){
        window.anchur.renav(["commits"]);
      },
      "contributors" : function(){
        window.anchur.renav(["contributors"]);
      },
      "repos" : function(){
        window.anchur.renav(["repos"]);
      },
      "graph" : function(){
        window.anchur.renav(["graph"]);
      },
      "about" : function(){
        window.anchur.renav(["about"]);
      }
    },
    "alternates" : {
      "b" : "blog",
      "home" : "blog",
      "h" : "blog",
      "c" : "commits",
      "u" : "contributors",
      "users" : "contributors",
      "p" : "contributors",
      "people" : "contributors",
      "repositories" : "repos",
      "r" : "repos",
      "g" : "graph",
      "a" : "about",
      "faq" : "a_faq"
    },
    "categoricals" : {
      "b" : function(tail){
      },
      "c" : function(tail){
      },
      "u" : function(tail){
      },
      "r" : function(tail){
      },
      "g" : function(tail){
      },
      "a" : function(tail){
      }
    }
  }
}

if(window.location.hash) {
  anchur.process(window.location.hash);
} else {
  anchur.process("#blog");
}

if (("onhashchange" in window)) {
  window.onhashchange = function () {
  anchur.process(window.location.hash);
  }
}
else {
  var prevHash = window.location.hash;
  window.setInterval(function () {
    if (window.location.hash != prevHash) {
      prevHash = window.location.hash;
      anchur.process(prevHash);
    }
  }, 100);
}
