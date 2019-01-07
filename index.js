$(document).ready(function() {

  var siteContent = document.getElementById("projectContent");
  var progLangContent = document.getElementById("progLangContent");
  var content,images,title,description,url,name,count;
  cardDeck(title,description,images,url);
  progLang(name,images);
  
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
            }, function(){
                $(this).animate({ marginBottom: "+=15px", paddingRight: "-=15px", paddingLeft: "-=15px"},200);
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

function cardDeck (title,description,images,url){

  content = '<div class="card-deck center cardText">';

    jsonToCard(title,description,images,url);

  content += '</div>';

  siteContent.innerHTML = content;
}

function jsonToCard(title,description,images,url){       
  var json = JSON.parse(data);
  count = 0;
  json.forEach(function(item,index,array){
     images = item['img']; 
     title = item['title'];
     description = item['desc'];
     url = item['url'];
     deployCards(title,description,images,url);   
  });
}

function deployCards(title,description,images,url) {
  if (count > 2) {
        content += '</div>'+
              '<div class="card-deck center cardText">';
        count = 0;
      }  
   content +=         '<div class="card eachCard col-sm-12 col-xs-12">'+
                      ' <a target="_blank "href="'+url+'"><img class="card-img-top" src="images/'+images+'" width="181" height="200px" alt="'+title+'"></a>'+
                      ' <div class="card-body">'+
                      '    <h5 class="card-title">'+title+'</h5>'+
                      '    <p class="card-text" id="description">'+description+'</p>'+
                      '  </div>'+
                      '  <div class="card-footer">'+
                      '  </div>'+
                      '</div>';
      count++; 
      console.log("Count -->"+count);       
}

function progLang (name,images){

  content = '<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">';

    progLangJson(name,images);

  content += '</div>';

  progLangContent.innerHTML = content;
}

function progLangJson(name,images){       
  var json = JSON.parse(languages);
  json.forEach(function(item,index,array){
     images = item['img']; 
     name = item['name'];
     deployHTML(name,images);     
  });
}

function deployHTML(name,images) { 
   content +=         '<div class="col-md-3 col-lg-3 col-sm-6 col-xs-12 progLang">'+
                      '<p>'+name+'</p>'+
                      '<img src="images/'+images+'" alt="'+name+'" width="62px" height="62px">'+ 
                      '</div>';    
}
});