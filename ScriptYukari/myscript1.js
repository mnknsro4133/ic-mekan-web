$(function () {
    $("#top").click(function () {
        // Sayfamızı kaydıracak olan kod burasıdır.
        $("html,body").stop().animate({ scrollTop: "0" }, 1000);
    });
});
$(window).scroll(function () {
    var uzunluk = $(document).scrollTop();
    if (uzunluk > 300) $("#top").fadeIn(500);
    else { $("#top").fadeOut(500); }
});