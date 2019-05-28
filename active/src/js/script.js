jQuery(function ($) {
  $(".input-two").mask("+7(999) 999-99-99");
});
$(".main-arrow__link").on("click", function (event) {
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 1000);
});
var callModal = $('.modalCall');
var closemodal = $('.popup-close');
var overlay = document.querySelector('.overlay');
var popup = document.querySelector('.popup');
var thanks = document.querySelector('.popup-thanks');
var thanksClose = document.querySelector('.popup-thanks-close');

function modal() {
  overlay.style.display = 'flex';
  popup.style.display = 'block';
  thanks.style.display = 'none';
};

function modalclose() {
  overlay.style.display = 'none';
  popup.style.display = 'none';
};

function post() {
  overlay.style.display = 'flex';
  popup.style.display = 'none';
  thanks.style.display = 'block';
};
callModal.on('click', modal);
closemodal.on('click', modalclose);
$('.popup-thanks-close').on('click', modalclose);
$('form').submit(function (event) {
  event.preventDefault();
  let msg = $(this).serialize();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: msg,
    success: function (data) {
      post();
      $('form').trigger('reset');
    },
    error: function (xhr, str) {
      alert('Упс. Произошла ошибка');
    }
  });
});