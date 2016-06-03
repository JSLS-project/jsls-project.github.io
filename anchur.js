var anchur = {
  "hash" : window.location.hash ? window.location.hash.substr(1) : "blog",
  "process" : function(hash){
    if(this.library.primaries.hasOwnProperty(hash)){
    
    }elseif(){}
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
  
} else {
  
}
