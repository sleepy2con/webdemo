$(function () {
    $('#btnlogin').click(function(){
        window.location.href="../user/login.html"
    })
    // var openCon = 'url("http://127.0.0.1:5501/pics/icons/menu.png")';
    // var closeCon = 'url("http://127.0.0.1:5501/pics/icons/closemenu.png")';
    // var openSearch = 'url("http://127.0.0.1:5501/pics/icons/search.png")'

    // var openCon='url("../pics/icons/menu.png")';
    // var openCon = 'url("../pics/icons/menu.png")';
    // var closeCon = 'url("../pics/icons/closemenu.png")';
    // var openSearch = 'url("../pics/icons/search.png")'
    //下拉
    // console.log($('#openNav').css("content"));
    $('#openNav').click(function () {
        $(this).toggleClass('iconOpenMenu').toggleClass('iconCloseMenu');
        // console.log($(this).attr("class"));
        var thisClass=$(this).attr("class");
        // console.log($('#openNav').css("content"));
        if(thisClass=='iconCloseMenu'){
            $('#containerHeader').css({
                "animation":"changeZindex 1s both",
            })
            $('#openNav').css({
                "transition": "3s ease",
                "width": "20px",
                "animation": "changeIconMenu2 1s both",
            })
            $('#slidemenu').css({
                "margin": "0px auto",
                "height": "100%",
            });
            // console.log($('#openNav').css("content"));
        }else if(thisClass=='iconOpenMenu'){
            $('#openNav').css({
                "transition": "ease",
                "width": "30px",
                "animation": "changeIconMenuReverse2 1s both",
            })
            $('#slidemenu').css({
                "height": "0",
                // "z-index":"-1",
            });
            $('#containerHeader').css({
                "animation":"changeZindex- 1s both",
            })
        }
        // console.log($('#openNav').css("content"));

        // var thisCon = $('#openNav').css("content");
        // console.log(thisCon,openCon)

        //这是旧的判定方法，根据图标路径判断，这太差所以抛弃
        // if (thisCon == openCon) {
        //     // alert("ggg")
        //     $('#containerHeader').css({
        //         "animation":"changeZindex 1s both",
        //     })
        //     $('#openNav').css({
        //         "transition": "3s ease",
        //         "width": "20px",
        //         "animation": "changeIconMenu2 1s both",
        //     })
        //     $('#slidemenu').css({
        //         "margin": "0px auto",
        //         "height": "100%",
        //     });
        // } else if (thisCon == closeCon) {
        //     $('#openNav').css({
        //         "transition": "ease",
        //         "width": "30px",
        //         "animation": "changeIconMenuReverse2 1s both",
        //     })
        //     $('#slidemenu').css({
        //         "height": "0",
        //         // "z-index":"-1",
        //     });
        //     $('#containerHeader').css({
        //         "animation":"changeZindex- 1s both",
        //     })
        // }
    })



    // 选中除自己外的同级子元素
    $("a.menuA").mouseover(function () {
        // alert("hh")
        $(".theLeftMenu a.menuA").css("color", "rgb(110, 110, 110)")
        $(this).css("color", "#000");
    });
    $("a.menuA").mouseout(function () {
        $(".theLeftMenu a.menuA").css("color", "#000");
    });
    $('#openSrarch').click(function () {
        $(this).toggleClass('iconOpenSearch').toggleClass('iconCloseSearch');

        if($(this).attr("class")=='iconCloseSearch'){
            $('#containerHeader').css({
                "animation":"changeZindex 1s both",
            })
            $('#slidemenu2').css({
                "height": "60%",
                "margin": "0px auto",
                "border-bottom": "1px solid  #ECECEC",
            });
            $('#openSrarch').css({
                "transition": "3s ease",
                "width": "20px",
                "animation": "changeIconMenu 1s both",
            })
        }else if($(this).attr("class")=='iconOpenSearch'){
            $('#openSrarch').css({
                "transition": "ease",
                "width": "30px",
                "animation": "changeIconMenuReverse 1s both",
            })
            $('#slidemenu2').css({
                "height": "0",
                "border-bottom": "none",
            });
            $('#containerHeader').css({
                "animation":"changeZindex- 1s both",
            })
        }
        
        // console.log(this)
        // var thisCon = $('#openSrarch').css("content");
        // console.log(thisCon)
        // console.log(openSearch)
        // if (thisCon == openSearch) {
        //     $('#containerHeader').css({
        //         "animation":"changeZindex 1s both",
        //     })
        //     $('#slidemenu2').css({
        //         "height": "60%",
        //         "margin": "0px auto",
        //         "border-bottom": "1px solid  #ECECEC",
        //     });
        //     $('#openSrarch').css({
        //         "transition": "3s ease",
        //         "width": "20px",
        //         "animation": "changeIconMenu 1s both",
        //     })
        // } else if (thisCon == closeCon) {
        //     $('#openSrarch').css({
        //         "transition": "ease",
        //         "width": "30px",
        //         "animation": "changeIconMenuReverse 1s both",
        //     })
        //     $('#slidemenu2').css({
        //         "height": "0",
        //         "border-bottom": "none",
        //     });
        //     $('#containerHeader').css({
        //         "animation":"changeZindex- 1s both",
        //     })
        // }
    })
})

var slideIndex = 0;
var slideIndex2 = 0;
showSlides();
showSlides2();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    // console.log(slides.length);
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
    // console.log(slideIndex);
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("theS2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    // console.log(slides.length);
    if (slideIndex2 > slides.length) {
        slideIndex2 = 1
    }

    slides[slideIndex2 - 1].style.display = "block";
    // console.log(slideIndex2);
    setTimeout(showSlides2, 2000); // Change image every 2 seconds
}