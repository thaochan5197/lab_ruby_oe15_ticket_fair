$(document).ready(function() {
  $(".readonly").on('keydown paste', function(e){
    e.preventDefault();
  });

  $('#defaultOpen').click();
});

$(document).ready(function() {
  $("#tg-buton1").hide();
  $("#tg-buton2").hide();
});

$(document).ready(function(){
  $("#buton1").click(function(){
    $("#tg-buton1").toggle();
  });
});

$(document).ready(function(){
  $("#buton2").click(function(){
    $("#tg-buton2").toggle();
  });
});

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
      method: 'get',
      dataType: "json",

    }).done(function(result){
        // console.log(result);
        $( ".startPoint" ).autocomplete({
          source: result
        });
      })
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
        $(this).html(I18n.t("evaluators.Chon_cho"));
      } else {
        $(this).attr("show","false");
        $(this).html(I18n.t("evaluators.an"));
      }
    $(this).parents(".bus-time").children(".bookingbroading").toggle();
  });
});

$(document).ready(function(){
  $(".show-bus-time").click(function(){
    var status = $(this).attr("show");
    if (status == "false") {
      $(this).attr("show","true");
      $(this).html(I18n.t("evaluators.dong"));
      $(this).attr("style", "background: rgb(136, 136, 136)");
    } else {
      $(this).attr("show","false");
      $(this).html(I18n.t("evaluators.xem_chuyen_xe"));
      $(this).removeAttr("style");
    }
    $(this).parents(".search-item").children(".bus-time-list").toggle();
  });
});

$(document).ready(function(){
  $(".seatpick-available").click(function(){
    var status = $(this).attr("data-status");
    var seat_code = $(this).attr("data-code");
    var seat_id = $(this).attr("data-id");
    if (status == "selected") {
      $(this).attr("data-status", "available");
      var attr_name = ".ticket-" + seat_id;
      $(this).parents(".bus-time-booking").find(".list_ticket").children().remove(attr_name);
      $(this).parent("li").attr("class","seat sleeper available");
    }
    else if (status == "available") {
      var trip_id = $(this).attr("data-trip");

      var htmlex = "<div class='ticket ticket-"+seat_id+"' ><input type='hidden' name='customer[tickets_attributes][" + n + "][seat_id]' value='" + seat_id +"' id='customer_tickets_attributes_0_trip_id'><input type='hidden' name='customer[tickets_attributes][" + n + "][trip_id]' value='" + trip_id +"' id='customer_tickets_attributes_0_trip_id'><input type='hidden' name='customer[tickets_attributes][" + n + "][bus_station]' value='" + bus_station +"' id='customer_tickets_attributes_"+n+"_seat_id'></div>"
      var bus_station = $(this).attr("data-bus-station");
      var fare = parseFloat($(this).attr("data-fare"));
      var total = parseFloat($(this).parents(".bus-time-booking").find(".total").html()) + fare;
      var n = $(".ticket").size();
      $(this).attr("data-status", "selected");
      $(this).parents(".bus-time-booking").find(".list_ticket").append(htmlex);
      $(this).parent("li").attr("class","seat sleeper selected");
      $(this).parents(".bus-time-booking").find(".selectedSeat").append(seat_code + ", ");
      $(this).parents(".bus-time-booking").find(".total").html(fare);
    }
  });
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-23581568-13', 'auto');
ga('send', 'pageview');

$(document).ready(function(){
  setTimeout(function(){
    $('.flash').fadeOut();
  }, 5000);
 });

$('#micropost_picture').bind('change', function() {
  var size_in_megabytes = this.files[0].size/1024/1024;
  if (size_in_megabytes > 5) {
    alert('Maximum file size is 5MB. Please choose a smaller file.');
  }
});
