function download(e,n){var o=firebase.storage(),t=o.ref(n+e+".pdf");t.getDownloadURL().then(function(e){var n=decodeURIComponent(e),o=n.substring(e.lastIndexOf("/")+1).split("?")[0];len=o.length,o=o.slice(7,len);var t=new XMLHttpRequest;t.responseType="blob",t.onload=function(){var e=document.createElement("a");e.href=window.URL.createObjectURL(t.response),e.download=o,e.style.display="none",document.body.appendChild(e),e.click(),delete e},t.open("GET",e),t.send()})["catch"](function(e){switch(e.code){case"storage/object_not_found":break;case"storage/unauthorized":}})}