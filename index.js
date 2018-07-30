$(document).ready(function() {

  $(".eachCard").css({'margin-bottom': '+=15px', 'padding-right': '-=15px' , 'padding-left': '-=15px'});

var errormsg = "";
var fieldMissing = "";

	function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
    }
      $("form").submit(function (e) {
        
        
        if (isEmail($("#emailFrom").val()) == false) {
          errormsg += "<p>Invalid <Strong>Email From</strong> address!</p>";
        }
        if ($("#emailFrom").val() == "") {
          fieldMissing += "<p>Email From </p>";
        }
        if ($("#emailSubject").val() == ""){
          fieldMissing += "<p>Subject </p>";
        }
        if ($("#emailMsg").val() == "") {
          fieldMissing += "<p>Message </p>";
        }
        
        if (fieldMissing != "" ){
          $("#missing").html('<div class="alert alert-warning" role="alert"> <p> There are some missing field(s): </p>'+fieldMissing +' </div>');
          
        e.preventDefault();
      }
          if (errormsg != "") {
          $("#error").html('<div class="alert alert-danger" role="alert"> <p> There are some error(s): </p>'+errormsg +' </div>');
          
           e.preventDefault();
         }  
        fieldMissing = "";
        errormsg = "";
       
    });

      $(".eachCard").hover( function(){
                $(this).animate({marginBottom: "-=15px", paddingRight: "+15px", paddingLeft: "+15px"},200);
                $(this).children(".card-footer").css("background-color", "#000000");
            }, function(){
                $(this).animate({ marginBottom: "+=15px", paddingRight: "-=15px", paddingLeft: "-=15px"},200);
                $(this).children(".card-footer").css("background-color", "#d5d5d5");
            });

      $(".menu-nav").click(function () {
                $(".fixed").css("height", "auto");
                $(".projectTab").css("background-color", "#585955");
            });

      $(".menu-nav-item").click(function () {
                $(".fixed").css("height", "50px");
                var tabName = $(this).html();
                $(".projectTab").html(tabName);
            });

      $(".projectTab").click(function () {
                $(".fixed").css("height", "auto");
                $(".projectTab").css("background-color", "#585955");
            });

});