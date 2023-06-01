
$(document).ready(function(){

  window.onload = function() {
    filter_data(0);
}


$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return ( elementBottom > viewportTop ) && ( elementTop < viewportBottom - $( this ).height() );
};


// $(window).scroll(function() {
//   var top_of_element = $("#LoadMore").offset().top;
//   var bottom_of_element = $("#LoadMore").offset().top + $("#LoadMore").outerHeight();
//   var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
//   var top_of_screen = $(window).scrollTop();

//   if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
//     console.log('hhhhhh');
//     var lastId = $('.loader').attr('id');
//     filter_data(lastId);
//   }
// });



$(document).on('click', '#LoadMore', function() {
  //alert('clicked!');
  var lastId = $('.loader').attr('id');
    //console.log(lastId);
    
        filter_data(lastId);
    
});


    

    function filter_data(lastId)
    {
        //$('.filter_data').html('<div id="loading" style="" ></div>');
        var action = 'fetch_data';
        //var minimum_price = $('#hidden_minimum_price').val();
        //var maximum_price = $('#hidden_maximum_price').val();
        var category = get_filter('category');
        var size = get_filter('size');
        var finish = get_filter('finish');
        var concept = get_filter('concept');
        // var colour_three = get_filter('colour_three');
		    // var colour_four = get_filter('colour_four');
        // var colour_five = get_filter('colour_five');
        // var type = get_filter('type');
        // var type_one = get_filter('type_one');
        // var trap_type = get_filter('trap_type');
        // var finish = get_filter('finish');
        // var finish_one = get_filter('finish_one');
        // var collection = get_filter('collection');
        //var application_areas_five = get_filter('application_areas_five');
        $.ajax({
            url:"./modular-kitchen/modular-kitchen_data.php",
            method:"POST",
            data:{action:action, category:category, last_id:lastId, size:size, finish:finish, concept:concept},
            beforeSend:function(){
              $('.loader').show();
          },
            success:function(data){
              setTimeout(function() {
                $('.loader').remove();
                $('#LoadMore').remove();
                //$('#load-content').append(data);
                $('.filter_data').append(data);
               },1000);
                
            }
        });
    }

    function get_filter(class_name)
    {
        var filter = [];
        // $('.'+class_name+':checked').each(function(){
        //     filter.push($(this).val());
        // });
        $('.' + class_name).change(function() {
          var val = $(this).val();
          if ($(this).is(":checked")) {
              
              $(":checkbox[value='" + val + "']").attr("checked", true);
          } else {
              $(":checkbox[value='" + val + "']").attr("checked", false);
          }
      });
      $('.' + class_name + ':checked').each(function() {
        if($.inArray($(this).val(), filter) == -1 ){
          filter.push($(this).val());
        }
     });
        // $('.'+class_name+':checked').each(function(){
        //     filter.push($(this).val());
        // });
        return filter;
    }


    $('.common_selector').click(function(){
      $('.filter_data').html('');
        filter_data(0);
    });

    //$('#price_range').slider({
     //   range:true,
    //    min:1000,
     //   max:65000,
     //   values:[1000, 65000],
     //   step:500,
      //  stop:function(event, ui)
     //   {
     //       $('#price_show').html(ui.values[0] + ' - ' + ui.values[1]);
     //       $('#hidden_minimum_price').val(ui.values[0]);
      //      $('#hidden_maximum_price').val(ui.values[1]);
     //       filter_data();
        //}
   // });

});


//Dropdown Button


// Get all dropdown buttons and dropdown content
var dropdownBtns = document.querySelectorAll(".dropbtn");
var dropdownContents = document.querySelectorAll(".dropdown-content");

// When the user clicks on a button, toggle between hiding and showing the dropdown content
dropdownBtns.forEach(function(btn) {
  var arrow = btn.querySelector(".arrow");
  btn.addEventListener("click", function() {
    var currentContent = this.nextElementSibling;
    dropdownContents.forEach(function(content) {
      if (content !== currentContent) {
        content.classList.remove("show");
      }
    });
    currentContent.classList.toggle("show");
    arrow.innerHTML = currentContent.classList.contains("show") ? "-" : "+";
  });
});

// Close the dropdown if the user clicks outside of it
/*window.addEventListener(".dropbtn", function(event) {
  if (!event.target.matches(".dropbtn") && !event.target.matches(".arrow")) {
    dropdownContents.forEach(function(content) {
      if (content.classList.contains("show")) {
        content.classList.remove("show");
        var btn = content.previousElementSibling;
        var arrow = btn.querySelector(".arrow");
        arrow.innerHTML = "$$$";
      }
    });
  }
});*/


$(document).ready(function() {
   
  function fetch_post_data(product_id) {


    var inp = $('.view_data');
    var index = $(".filter_data .id-"+product_id).index();
    
    var next = inp[index + 1];
    var prev = inp[index - 1];

    var p_product_id = $(prev).attr("id");
    var n_product_id = $(next).attr("id");

    var disablePrev = !p_product_id ? 'disabled': '';
    var disableNext = !n_product_id ? 'disabled': '';



    var buttons = "<div align='center' class='next-preview-btn'><button type='button' name='previous' class='btn previous' id='"+p_product_id+"' "+disablePrev+" ><i class='fa fa-angle-left' aria-hidden='true'></i></button><button type='button' name='next' class='btn next' id='"+n_product_id+"' "+disableNext+"><i class='fa fa-angle-right' aria-hidden='true'></i></button></div>";
      $.ajax({
          url: "./modular-kitchen/modular-kitchen_product.php",
          method: "GET",
          data: {
              product_id: product_id,
          },
          success: function(data) {

            var api_data = JSON.parse(data);
            var images = api_data.product_multiple_imgs.split(',');
            console.log(images);
            var imgMarkup = '<div class="swiper mySwiper" id="swiper'+api_data.product_id+'"><div class="swiper-wrapper">';
            $.each(images, function(index, value) { 
              imgMarkup += '<div class="swiper-slide">';
                imgMarkup += '<img src="images/' + api_data.path + value + '" alt="" class="img-responsive">';
                if (api_data.view && api_data.view !== '') {
                  imgMarkup += '<a href="' + api_data.view + '" target="_blank"><img src="images/360.png" alt="360" class="360-icon"></a>';
                }
                if (api_data.ambience_view && api_data.ambience_view !== '') {
                  imgMarkup += '<a href="' + api_data.ambience_view + '" target="_blank"><img src="images/ambience.png" alt="360" class="360-icon"></a>';
                }
                imgMarkup += '</div>';
          });
          imgMarkup += '</div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div>';
          var markUp = "<div class=table-responsive id='data'><div class='row popup-content-u'><div class='col-6 pd-image-popup'>" + imgMarkup + "</div><div class='col-6 popup-details-s'><h2>" + api_data.product_name + "</h2><div class='table-scroll'><table class='table'>";
            
          if (api_data.category) {
            markUp += "<tr><td><label>Category</label></td><td>" + api_data.category + "</td></tr>";
          }

          if (api_data.size) {
            markUp += "<tr><td><label>Size</label></td><td>"+api_data.size+"</td></tr>";
          }
          
          if (api_data.finish) {
            markUp += "<tr><td><label>Finish</label></td><td>"+api_data.finish+"</td></tr>";
          }

          if (api_data.concept) {
            markUp += "<tr><td><label>Concept</label></td><td>"+api_data.concept+"</td></tr>";
          }

          if (api_data.view) {
            markUp += "<tr><td><label>360 Degree View</label></td><td>"+api_data.view+"</td></tr>";
          }
          markUp += "</table></div></div></div></div>" + buttons + "</div>"; 
          
              $('#product_detail').html(markUp);
              $('#exampleModalCenter').modal("show");
              var swiper = new Swiper("#swiper"+product_id+"", {
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              });
          }
      });
  } 

  $(document).on('click', '.view_data', function() {

    var inp = $('.view_data');

    //console.log(this);
    var index = inp.index(this);

    var next = inp[index + 1];
    var prev = inp[index - 1];

    //console.log($(prev).attr("id"));
    //console.log($(next).attr("id"));

    var product_id = $(this).attr("id");
    var p_product_id = $(prev).attr("id");
    var n_product_id = $(next).attr("id");
    fetch_post_data(product_id);
});

 /*
$(document).on('click', '.previous', function() {
    var product_id = $(this).attr("id");

    var inp = $('.view_data');



    var index = inp.index(vv);
    console.log(index);
    var next = inp[index + 1];
    var prev = inp[index - 1];

    console.log($(prev).attr("id"));
    console.log($(next).attr("id"));

    fetch_post_data(product_id);
});

$(document).on('click', '.next', function() {
    var product_id = $(this).attr("id");
    var inp = $('.view_data');

    var index = inp.index(this);
    console.log(index);
    var next = inp[index + 1];
    var prev = inp[index - 1];
    
    console.log($(prev).attr("id"));
    console.log($(next).attr("id"));
    fetch_post_data(product_id);
});

<tr><td><label>Finish</label></td><td>"+api_data.finish+"</td></tr><tr><td ><label>Set</label></td><td width=70%>"+api_data.concept+"</td></tr>
*/


$(document).on('click', '.previous', function() {
  var product_id = parseInt($(this).attr("id"));
  fetch_post_data(product_id);
  
});

$(document).on('click', '.next', function() {
  var product_id = parseInt($(this).attr("id"));
  fetch_post_data(product_id);
    
});


});