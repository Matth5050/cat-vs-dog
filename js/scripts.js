// $(document).ready(function () {
//   $("button#hello").click(function () {
//     $("ul").append("<li>Hello!</li>");
//   });

//   $("button#goodbye").click(function () {
//     $("ul").prepend("<li>Goodbye!</li>");
//   });

//   $("button#stop").click(function () {
//     $("ul").prepend("<li>Stop copying me!</li>");
//   });
// });

$(document).ready(function () {
  $("button#cat").click(function () {
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#cat").children("li").first().click(function () {
        $(this).remove();
        });
      });
  });

$(document).ready(function () {
  $("button#dog").click(function () {
    $("ul#dog").prepend("<li>woof</li>");
    $("ul#dog").children("li").first().click(function () {
        $(this).remove();
        $("ul#cat").children("li").first().click(function () {
          $(this).remove();
        });
      });
  });
});