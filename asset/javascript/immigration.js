// ********************variables************************
var chevron = document.getElementById("svg-ul");
var nav = document.getElementsByClassName("ul-02")[0];
var close_1 = document.getElementById("close")
var sponsor = document.getElementsByClassName("sponsor")[0]
// *********************functions*************************

var chevronfunction = {
    clickchevron: () => {
      if (nav.style.display === "none") {
        console.log("display === none");
        nav.style.display = "block";
      } else {
        console.log("display === block");
        nav.style.display = "none";
      }
    },
  };
  
  var listerner_chevronfunction = () => {
    console.log("add listener on chevron");
    chevron.addEventListener("click", chevronfunction.clickchevron);
  };


  var closefunction = {
    clickclose: () => {
      if (sponsor.style.display === "grid") {
        console.log("display === block");
        sponsor.style.display = "none";
      } else {
        console.log("display === block");
        sponsor.style.display = "grid";
      }
    },
  };
  
  var listerner_closefunction = () => {
    console.log("add listener on close");
    close_1.addEventListener("click", closefunction.clickclose);
  };