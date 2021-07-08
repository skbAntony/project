$(function() {
    var width = $(window).width();
    var height = $(window).height();
    if (width < 577) {
      $('.header nav a').each(function(index) {
        //a標籤文字內容
        console.log(index.innerText);
        var nav = document.getElementsByTagName('nav');
        console.log(nav[0]);
      });
    }
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'https://picsum.photos/v2/list',
      success: function(data) {
        data.forEach(function (element, index) {
          var carousel = document.getElementsByClassName("carousel-inner");
          $(carousel[0]).append("<div class='carousel-item'><img class='d-block' src='https://picsum.photos/1200/300?random=" + index + "' alt='First slide'></div>");
        });
        //預設開頭第一張圖片
        var carousel = document.getElementsByClassName("carousel-inner");
        $(carousel[0].firstElementChild).addClass('active');
      },
      error: function(XMLHttpRequest, statusText, errorThrown) { 
        console.log(XMLHttpRequest);
        console.log(statusText);
        console.log(errorThrown);
      }, 
    });
    $('.carousel').carousel({
      interval: 5000,
    })
    
  });