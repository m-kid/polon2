
//przesuwanie strony z konferencją
/*var frameTop = $('.tlo-1').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= frameTop) {           // apply position: fixed if you
        $('.tlo-1').css({                      // scroll to that element or below it
            'position': 'fixed',
            'top': '0vh',
            'left': '0',
            'width': '100vw',
        }),
                $('.konferencja').css({
                'margin-top': '30vh',
        });
    } else {                                   // apply position: static
    }

});

var insideOneTop = $('.tlo-2').offset().top;

$(window).scroll(function() {

    var currentScroll = $(window).scrollTop();

if (currentScroll >= insideOneTop) {
        $('.tlo-1').css({
                'position': 'absolute',
                'top':'0px',
                'left':'0px',
        }),
                $('.panel').css({
                'margin-top': '30vh',
        });
} else {
} 
});

//koniec przesuwania strony z konferencją

*/

var fixmeTop = $('.intro-nav').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.intro-nav').addClass('fixme'),
        $('.kafel-link-neutral').addClass('kafel-link2'),
        $('.kafel-link-neutral').removeClass('kafel-link1'),
        $('.intro-kafel').addClass('intro-kafel2'),
        $('.cookies').css({
                'top': '13vh',
        });
    } else {                                   // apply position: static
        $('.intro-nav').removeClass('fixme'),
        $('.kafel-link-neutral').removeClass('kafel-link2'),
        $('.kafel-link-neutral').addClass('kafel-link1'),
        $('.intro-kafel').removeClass('intro-kafel2'),
        $('.cookies').css({
                'top': '0px',
        });
    }

});

var fixmeTopTwo = $('.hiddentitle').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScrollTwo = $(window).scrollTop(); // get current position

    if (currentScrollTwo >= fixmeTopTwo) {           // apply position: fixed if you
        $('.hiddentitle').css({                      // scroll to that element or below it
            'position': 'fixed',
            'visibility': 'visible',
            'top': '0',
            'left': '0',

        });
    } else {                                   // apply position: static
        $('.hiddentitle').css({                      // if you scroll above it
            'position': 'static',
            'visibility': 'hidden'
        });
    }

});


//zamykanie ciastek

$("#cookies-x").click(function() {
        $(".cookies").css({
                'display': 'none',
        })
});







	  function initMap() {
        var uluru = {lat: 52.237583, lng: 21.018002};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


	  function initMap2() {
        var uluru2 = {lat: 52.237584, lng: 21.018003};
        var map2 = new google.maps.Map(document.getElementById('map2'), {
          zoom: 14,
          center: uluru2
        });
        var marker2 = new google.maps.Marker({
          position: uluru2,
          map: map2
        });
      }






/*zmiana języka na angielski*/
$("#pl-en-option").click(function() {
    $(".en").css({
            'display': 'block',
    }),
    $(".en-flex").css({
            'display': 'flex',
            'display': '-webkit-flex',
    }),

    $(".pl").css({
            'display': 'none',
    }), 
    $(".pl-flex").css({
            'display': 'none',
    })
});

$("#pl-en-option-smaller").click(function() {
    $(".en").css({
            'display': 'block',
    }),
    $(".en-flex").css({
            'display': 'flex',
            'display': '-webkit-flex',
    }),

    $(".pl").css({
            'display': 'none',
    }), 
    $(".pl-flex").css({
            'display': 'none',
    })
});


/*koniec zmiany języka na angielski*/

/*zmiana kolorów przycisków po najechaniu myszką - wersja polska*/
$("#pl-en-option").mouseover(function() {
    $(".pl-pl-option").css({
            'background-color': '#BDC3C7',
    }),
    $(".pl-en-option").css({
            'background-color': '#0d3d6b',
    })

});


$("#pl-en-option").mouseout(function() {
    $(".pl-pl-option").css({
            'background-color': '#0d3d6b',
    }),
    $(".pl-en-option").css({
            'background-color': '#BDC3C7',
    })

});

$("#pl-en-option-smaller").mouseover(function() {
    $(".pl-pl-option-smaller").css({
            'background-color': '#BDC3C7',
    }),
    $(".pl-en-option-smaller").css({
            'background-color': '#0d3d6b',
    })

});


$("#pl-en-option-smaller").mouseout(function() {
    $(".pl-pl-option-smaller").css({
            'background-color': '#0d3d6b',
    }),
    $(".pl-en-option-smaller").css({
            'background-color': '#BDC3C7',
    })

});


/*koniec zmiany kolorów przycisków po najechaniu myszką - wersja polska*/


/*zmiana języka na polski*/
$("#en-pl-option").click(function() {

    $(".en").css({
            'display': 'none',
    }),
    $(".en-flex").css({
            'display': 'none',
    }),

    $(".pl").css({
            'display': 'block',
    }),
    $(".pl-flex").css({
            'display': 'flex',
            'display': '-webkit-flex'
    })

});

$("#en-pl-option-smaller").click(function() {

    $(".en").css({
            'display': 'none',
    }),
    $(".en-flex").css({
            'display': 'none',
    }),

    $(".pl").css({
            'display': 'block',
    }),
    $(".pl-flex").css({
            'display': 'flex',
            'display': '-webkit-flex'
    })

});
/*koniec zmiany języka na polski*/


/*zmiana kolorów przycisków po najechaniu myszką - wersja angielska*/
$("#en-pl-option").mouseover(function() {
    $(".en-pl-option").css({
            'background-color': '#0d3d6b',
    }),
    $(".en-en-option").css({
            'background-color': '#BDC3C7',
    })

});

$("#en-pl-option-smaller").mouseover(function() {
    $(".en-pl-option-smaller").css({
            'background-color': '#0d3d6b',
    }),
    $(".en-en-option-smaller").css({
            'background-color': '#BDC3C7',
    })

});


$("#en-pl-option").mouseout(function() {
    $(".en-pl-option").css({
            'background-color': '#BDC3C7',
    }),
    $(".en-en-option").css({
            'background-color': '#0d3d6b',
    })

});

$("#en-pl-option-smaller").mouseout(function() {
    $(".en-pl-option-smaller").css({
            'background-color': '#BDC3C7',
    }),
    $(".en-en-option-smaller").css({
            'background-color': '#0d3d6b',
    })

});
/*koniec zmiany kolorów przycisków po najechaniu myszką - wersja angielska*/