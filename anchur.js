var anchur = {
  "pending" : {
    "hash" : "",
    "process" : function(){
      window.anchur.process(window.anchur.pending.hash);
    }
  }, 
  "hash" : window.location.hash ? window.location.hash : "#blog",
  "process" : function(hash){
    console.log(hash);
    hash = hash.substr(1);
    if(window.pageready === false){
      if(this.pending.hash === ""){
        this.pending.hash = hash;
        window.ready(this.pending.process);
      }else{
        this.pending.hash = hash;
      }
      return;
    }
    if(this.library.primaries.hasOwnProperty(hash)){
      this.library.primaries[hash]();
    }else if(this.library.alternates.hasOwnProperty(hash)){
      this.library.primaries[this.library.alternates[hash]]();
    }else if(this.library.categoricals.hasOwnProperty(hash.substring(0,1))){
      this.library.categoricals[hash.substring(0,1)](hash.substr(1));
    }else{
      console.error("Bad url hash (#" + hash + ") used. Please use a valid url hash (like #blog, for the blog section). Use #a_url_hashes to find more on how to use them or view the general about section with #about");
    }
  },
  "library" : {
    "primaries" : {
      "blog" : function(){},
      "commits" : function(){},
      "contributors" : function(){},
      "repos" : function(){},
      "graph" : function(){}
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
      "g" : "graph"
    },
    "categoricals" : {
      "b" : function(tail){},
      "c" : function(tail){},
      "u" : function(tail){},
      "r" : function(tail){},
      "g" : function(tail){},
      "a" : function(tail){}
    }
  }
}

if(window.location.hash) {
  anchur.process(window.location.hash);
} else {
  anchur.process("#blog");
}

if (("onhashchange" in window)) {
  console.log(window.location.hash);
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
