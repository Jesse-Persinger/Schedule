     
     //moment code
      var currentTime = moment().format("HH");
      
      //Vars
      //time elements

      var nine = $("#9");

      var ten = $("#10");

      var eleven = $("#11");

      var noon = $("#12");

      var thirteen = $("#13");

      var fourteen = $("#14");

      var fifteen = $("#15");

      var sixteen = $("#16");

      var seventeen = $("#17");

      var eighteen = $("#18");
      //local storage
      var myStorage = window.localStorage;
      //moment to html
      $("#currentDay").html(moment().format("dddd, MMMM Do YYYY"));
      //debug  
      console.log(currentTime);
      //functions
      //local storage
      $(".btn").click(function(){
        localStorage.setItem("nine.html", "ten.html", "eleven.html", "noon.html", "thirteen.html", "fourteen.html", "fifteen.html", "sixteen.html", "seventeen.html", "eighteen.html");
      });
      //debug
      console.log(window.localStorage)
         // call local storage
        function local(){
            localStorage.getItem("nine.html", "ten.html", "eleven.html", "noon.html", "thirteen.html", "fourteen.html", "fifteen.html", "sixteen.html", "seventeen.html", "eighteen.html")
        }
      
      //check time slot to current time change colors  
      function Init(){
        if(currentTime > 9) {
          nine.addClass("past")
      }else if(currentTime === 9){
        nine.addClass("present")
      }else if(currentTime < 9){
        nine.addClass("future")
      }

      if(currentTime > 10) {
          ten.addClass("past")
      }else if(currentTime === 10){
        ten.addClass("present")
      }else if(currentTime < 10){
        ten.addClass("future")
    }}

    if(currentTime > 11) {
          eleven.addClass("past")
      }else if(currentTime === 11){
        eleven.addClass("present")
      }else if(currentTime < 11){
        eleven.addClass("future")
    }

    if(currentTime > 12) {
          noon.addClass("past")
      }else if(currentTime === 12){
        noon.addClass("present")
      }else if(currentTime < 12){
        noon.addClass("future")
    }
    if(currentTime > 13) {
          thirteen.addClass("past")
      }else if(currentTime === 13){
        thirteen.addClass("present")
      }else if(currentTime < 13){
        thirteen.addClass("future")
    }
    if(currentTime > 14) {
      fourteen.addClass("past")
      }else if(currentTime === 14){
        fourteen.addClass("present")
      }else if(currentTime < 14){
        fourteen.addClass("future")
    }

    if(currentTime > 15) {
      fifteen.addClass("past")
      }else if(currentTime === 15){
        fifteen.addClass("present")
      }else if(currentTime < 15){
        fifteen.addClass("future")
    }

    if(currentTime > 16) {
      sixteen.addClass("past")
      }else if(currentTime === 16){
        sixteen.addClass("present")
      }else if(currentTime < 16){
        sixteen.addClass("future")
    }

    if(currentTime > 17) {
      seventeen.addClass("past")
      }else if(currentTime === 17){
        seventeen.addClass("present")
      }else if(currentTime < 17){
        seventeen.addClass("future")
    }

    if(currentTime > 18) {
      eighteen.addClass("past")
      }else if(currentTime === 18){
        eighteen.addClass("present")
      }else if(currentTime < 18){
        eighteen.addClass("future")
    }

    
     //run 
     local()
     Init();
    