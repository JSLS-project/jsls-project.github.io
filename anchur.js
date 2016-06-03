var anchur = {
  "pending" : {
    "hash" : null,
    "process" : function(){
      window.anchur.process(this.hash);
    }
  }, 
  "hash" : window.location.hash ? window.location.hash.substr(1) : "blog",
  "process" : function(hash){
    if(window.pageready === false){
      if(this.pending.hash === null){
        this.pending.hash = hash;
        window.ready(this.pending.process);
      }else{
        this.pending.hash = hash;
      }
    }
    if(this.library.primaries.hasOwnProperty(hash)){
      this.library.primaries[hash]();
    }else if(this.library.alternates.hasOwnProperty(hash)){
      this.library.primaries[this.library.alternates[hash]]();
    }else if(this.library.categoricals.hasOwnProperty(hash.substring(0,1))){
      this.library.categoricals[hash.substring(0,1)](hash.substr(1));
    }else{
      console.error("Bad url hash (#" + hash + ") used. Please use a valid url hash (like #blog, for the blog section). (use #a_url_hashes to find more on how to use them or view the general about section with #about)");
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
  anchur.process(window.location.hash.substr(1));
} else {
  anchur.process("blog");
}

if (("onhashchange" in window)) {
  window.onhashchange = function () {
  anchur.process(window.location.hash.substr(1));
  }
}
else {
  var prevHash = window.location.hash;
  window.setInterval(function () {
    if (window.location.hash != prevHash) {
      prevHash = window.location.hash;
      anchur.process(prevHash.substr(1));
    }
  }, 100);
}
