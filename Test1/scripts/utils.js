var guid = function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

String.prototype.replaceAll = function (str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof (str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
}

var getCookie = function(cookieName, encoded) {
   res = "";
   cookies=document.cookie.split(";");
   for(var i=0; i<cookies.length; i++) {
      c = cookies[i];
      v = c.split("=");
      if (v[0].trim() == cookieName) {
          if (encoded)
              return res = window.atob(v[1]);
          else
              return res = v[1];
        }
   }
   return res;
};


var handleAPIError = function(resp) {
    var msg;
    msg = resp.status + ' - ' + resp.statusText;
    if (resp.status >= 500) {

        msg += '\n'+ resp.data.Message + '\n' +
        resp.data.ExceptionMessage;    
    }
     
    alert(msg);
};


var cloneObj = function (obj) {
    var newObj = (obj instanceof Array) ? [] : {};
    for (var i in obj) {
        if (obj[i] && typeof obj[i] == "object") {
            newObj[i] = obj[i].clone();
        }
        else {
            if (obj[i]) newObj[i] = obj[i];
            else newObj[i] = null;
        }
    }
    return newObj;
};