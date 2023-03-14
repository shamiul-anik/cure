/************* Blockquote Text Animation Starts Here ************/
// https://codepen.io/worksbyvan/pen/QqNGbZ
// https://codepen.io/dghez/pen/abRVQL
(function ($) {
  $.fn.textAnimation = function (animation_speed, text_speed, animation) {
    var text, i = 0;
    var $this = $(this);
    console.log("this ", $this); // #SI

    // store text and clear
    text = $this.text();
    console.log("text: ", text); // #SI
    // $this.css('white-space', 'pre');
    $this.html("");
    console.log("this ", $this.html("")); // #SI

    var addLetter = setInterval(function () {
      $this.append(
        '<div class="text_animation" style="display: inline-block; animation: ' +
          animation +
          " " +
          animation_speed +
          'ms forwards">' +
          text[i] +
          "</div>"
      );
      i++;
      // console.log("i++: ", i); // #SI
      if (i == text.length) clearInterval(addLetter);
    }, text_speed);
  };
})(jQuery);

// var temp = $('.bounce_in_animation').text();
// console.log("temp ", temp); // #SI
// var i = 1;

$(".bounce_in_animation").textAnimation(250, 50, "bounceIn");
$(".title_text").textAnimation(250, 300, "spinIn");

// setInterval(function () {
//   i %= 4;
//   $('.bounce_in_animation').html(temp);
//   switch (i) {
//     case 0:
//       $('.bounce_in_animation').textAnimation(250, 50, 'bounceIn');
//       break;
//     case 1:
//       $('.bounce_in_animation').textAnimation(250, 50, 'slideDown');
//       break;
//     case 2:
//       $('.bounce_in_animation').textAnimation(250, 50, 'slideUp');
//       break;
//     default:
//       $('.bounce_in_animation').textAnimation(250, 50, 'spinIn');
//   }
//   i++;
// }, 1000 + 50 * temp.length + 250)

/************* Blockquote Text Animation Ends Here ************/