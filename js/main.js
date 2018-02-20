$(document).ready(function(){

      // Post request using AJAX

      // var METHOD = "POST";
      // var URL = "https://jsonplaceholder.typicode.com/users";
      // var DB = JSON.stringify({name:"Donal", lastname:"Lane"});
      //
      // $.ajax(URL, {
      //     method:METHOD,
      //     data:DB,
      //     datatype:"json",
      //     contentType:"application/json",
      //     error:function(){
      //         console.log('Something went wrong.');
      //     },
      //     success:function(data){
      //         console.log(data);
      //     }
      // });

      $('.tab_header .item').on("click", function(){
          var number = $(this).data("option");
          // remove all actives
          $('.tab_header .item').removeClass('active');
          // add active
          $(this).addClass('active');

          $('.tab_container .container_item').hide();
          $('div[data-item="'+ number +'"]').show();


      });

});
