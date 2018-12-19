function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '';
  }
  document.getElementById(pageName).style.display = 'block';
  elmnt.style.backgroundColor = color;
}

$(document).ready(function() {
  $(".readonly").on('keydown paste', function(e){
    e.preventDefault();
  });

  $('#defaultOpen').click();
});

$(document).ready(function(){
  $(".startPoint").keyup(function(){
    $.ajax({
      url: '/static_pages',
      method: 'post',
      success: function(result){
        $( ".startPoint" ).autocomplete({
          source: result
        });
      }
    });
  });
});

$(document).ready(function(){
  $(".boarding-point").click(function(){
    $(this).parents(".bus-time").children(".boardingPointPanel").toggle();
  });
});

$(document).ready(function(){
  $(".button-show").click(function(){
    var status = $(this).attr("show");
    if (status == "false") {
        $(this).attr("show","true");
        $(this).html("Chọn chỗ");
      } else {
        $(this).attr("show","false");
        $(this).html("Ẩn");
      }
    $(this).parents(".bus-time").children(".bookingbroading").toggle();
  });
});

$(document).ready(function(){
  $(".show-bus-time").click(function(){
    var status = $(this).attr("show");
    if (status == "false") {
      $(this).attr("show","true");
      $(this).html("Đóng");
      $(this).attr("style", "background: rgb(136, 136, 136)");
    } else {
      $(this).attr("show","false");
      $(this).html("Xem chuyến xe");
      $(this).removeAttr("style");
    }
    $(this).parents(".search-item").children(".bus-time-list").toggle();
  });
});

$(document).ready(function(){
  $(".seatpick-available").click(function(){
    var seat_code = $(this).attr("data")
    var fare = parseFloat($(this).attr("data-fare"));
    var total = parseFloat($(this).parents(".bus-time-booking").find(".total").html()) + fare;
    $(this).parent("li").attr("class","seat sleeper selected");
    $(this).parents(".bus-time-booking").find(".selectedSeat").append(seat_code + ", ");
    $(this).parents(".bus-time-booking").find(".total").html(fare);
  });
});


