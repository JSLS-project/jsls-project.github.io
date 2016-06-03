var anchur = {
  "hash" : window.location.hash ? window.location.hash.substr(1) : "blog",
  "process" : function(hash){
    if(this.library.primaries.hasOwnProperty(hash)){
    
    }else if(this.library.alternates.hasOwnProperty(hash)){
      
    }else if(this.library.alternates.hasOwnProperty(hash.substring(0,1))){
      
    }else{
      console.error("Bad url hash (#" + hash + ") used. Please use a valid url hash.");
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
    }
  },
  "categoricals" : {
    "b" : function(tail){},
    "c" : function(tail){},
    "u" : function(tail){},
    "r" : function(tail){},
    "g" : function(tail){}
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
