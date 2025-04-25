   // do not edit unless you know what you are doing
   // stay cute <3 - emilyy
   
   document.addEventListener("DOMContentLoaded", function () {
       var url = window.location.href;
       var finalurl = "cydia://url/https://cydia.saurik.com/api/share#?source=" + encodeURIComponent(url);
       var finishedurl = document.getElementById("cydia");
       finishedurl.href = finalurl;
   });
   document.title = repoName;
   var txt = document.querySelector(".repoName");
   txt.textContent = repoName;
   var txt2 = document.querySelector(".repodesc");
   txt2.textContent = repoDescription;
