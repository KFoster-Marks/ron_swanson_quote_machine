  $(document).ready(function() {
    $("#new_quote").on("click", function(){
      $.ajax({url: "http://ron-swanson-quotes.herokuapp.com/v2/quotes/1",       
              success: function(result){
                 $("#quote_text").html(result);
              },
              error: function(xhr,status,error){
                $("#quote_text").html("Whoops! Couldn't find any quotes.");
              }
             }
      );
    });
  });

 $(document).ready(function() {
  $('#tweet-quote').click(function(event) {
    var width  = 900,
        height = 600,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

    window.open(url, 'twitter', opts);

    return false;
  });
 });
      
      
      
