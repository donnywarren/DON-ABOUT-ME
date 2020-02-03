document.addEventListener('DOMContentLoaded', function() {
  document.querySelector(".contact-btn").addEventListener("click", function() {
    document.querySelector(".modal-window-contact").classList.add("show");
  });

  document.querySelector(".close-contact").addEventListener("click", function(){
    document.querySelector(".modal-window-contact").classList.remove("show");
  });

  document.querySelector(".carnival-btn").addEventListener("click", function() {
    document.querySelector(".modal-window-carnival").classList.add("show-carnival");
  });

  document.querySelector(".glasses-tools").addEventListener("click", function(){
    var isVisible = document.querySelector(".glasses").classList;

    if (isVisible.contains("show-carnival")) {
      isVisible.remove("show-carnival");
    } else {
      isVisible.add("show-carnival")
    }
  });



  document.querySelector(".hat-tools").addEventListener("click", function(){
    var isVisible = document.querySelector(".hat").classList;

    if (isVisible.contains("show-carnival")) {
      isVisible.remove("show-carnival");
    } else {
      isVisible.add("show-carnival")
    }
  });



  document.querySelector(".moustache-tools").addEventListener("click", function(){
    var isVisible = document.querySelector(".moustache").classList;

    if (isVisible.contains("show-carnival")) {
      isVisible.remove("show-carnival");
    } else {
      isVisible.add("show-carnival")
    }
  });








  document.querySelector(".close-contact-tools").addEventListener("click", function(){
    document.querySelector(".modal-window-carnival").classList.remove("show-carnival");
  });

});
