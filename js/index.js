
console.log("file is loaded correctly");



    $(".icons img").click(function(){
      $('html,body').animate({
        scrollTop: $(".workGrid").offset().top}, 'slow');
      });
