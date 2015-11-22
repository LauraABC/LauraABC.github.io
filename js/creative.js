/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

/*
* rwdImageMaps jQuery plugin v1.5
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2013 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").load(function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);

$(document).ready(function() {
       $('.imanta').tooltipster({
                content: $('<span><img src="img/places/imanta.jpg"/><br> <strong>Imanta</strong></span>')
            });
        $('.agenskalna_tirgus').tooltipster({
                 content: $('<span><img src="img/places/agenskalna_tirgus.jpg"/><br> <strong>Agenskalna Market</strong></span>')
             });
         $('.biblioteka').tooltipster({
                  content: $('<span><img src="img/places/nacionala_biblioteka.jpg"/><br> <strong>National Library</strong></span>')
              });
        $('.vecriga').tooltipster({
                 content: $('<span><img src="img/places/vecriga.jpg"/><br> <strong>Old Riga</strong></span>')
             });
        $('.centraltirgus').tooltipster({
                  content: $('<span><img src="img/places/centraltirgus.jpg"/><br> <strong>Central Market</strong></span>')
              });
        $('.opera_milda').tooltipster({
                   content: $('<span><img src="img/places/opera.jpg"/><img src="img/places/bivibas_piemineklis.jpg"/><br> <strong>Latvian National Opera and balet, Monument of freedom</strong></span>')
               });
         $('.dailes_teatris').tooltipster({
                  content: $('<span><img src="img/places/dailes_teatris.jpg"/><br> <strong>Dailes Theater</strong></span>')
              });
          $('.miera_iela').tooltipster({
                   content: $('<span><img src="img/places/miera_iela.jpg"/><br> <strong>Miera Street</strong></span>')
               });
         $('.dzemdibu_nams').tooltipster({
                  content: $('<span><img src="img/places/dzmedibu_nams.jpg"/><br> <strong>Maternity center</strong></span>')
              });
         $('.cietums').tooltipster({
                   content: $('<span><img src="img/places/cietums.jpg"/><br> <strong>Brasa Prison</strong></span>')
               });
         $('.mezaparks').tooltipster({
                    content: $('<span><img src="img/places/mezaparks.jpg"/><br> <strong>Mezaparks</strong></span>')
                });

       $('img[usemap]').rwdImageMaps();


   });
