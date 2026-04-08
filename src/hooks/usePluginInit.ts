import { useEffect } from 'react';

declare const $: any;
declare const WOW: any;
declare const jarallax: any;

let wowInstance: any = null;

function waitForJQuery(cb: () => void, tries = 0) {
  if (typeof $ !== 'undefined') { cb(); return; }
  if (tries > 50) return;
  setTimeout(() => waitForJQuery(cb, tries + 1), 100);
}

export function usePluginInit() {
  useEffect(() => {
    // Hide preloader immediately — no need to wait for jQuery
    const loader = document.getElementById('de-loader');
    if (loader) loader.style.display = 'none';

    waitForJQuery(() => {
      $('#de-loader').hide();

      $('#menu-btn').off('click.menuToggle').on('click.menuToggle', function (this: HTMLElement) {
        const isOpen = $('header').hasClass('menu-open');
        if (isOpen) {
          $('header').removeClass('menu-open').css('height', 'auto');
          $(this).removeClass('menu-open');
        } else {
          $('header').addClass('menu-open').css('height', $(window).innerHeight() + 'px');
          $(this).addClass('menu-open');
        }
      });

      $('#back-to-top').off('click.btt').on('click.btt', function (e: any) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 400);
      });
      $(window).off('scroll.btt').on('scroll.btt', function () {
        if ($(window).scrollTop()! > 300) $('#back-to-top').addClass('show');
        else $('#back-to-top').removeClass('show');
      });

      if (typeof WOW !== 'undefined') {
        if (wowInstance) {
          wowInstance.stop?.();
          wowInstance = null;
        }
        document.querySelectorAll('.wow').forEach((el) => {
          el.classList.remove('wow-animated');
          (el as HTMLElement).style.visibility = '';
          (el as HTMLElement).style.animationName = '';
        });
        wowInstance = new WOW({ mobile: false });
        wowInstance.init();
      }

      if (typeof jarallax !== 'undefined') {
        jarallax(document.querySelectorAll('.jarallax'), 'destroy');
        jarallax(document.querySelectorAll('.jarallax'), { speed: 0.5 });
      }

      if ($.fn && $.fn.owlCarousel) {
        $('.owl-6').owlCarousel({
          loop: true, margin: 0, nav: false, dots: false,
          autoplay: true, autoplayTimeout: 3000, items: 6,
          responsive: { 0: { items: 2 }, 600: { items: 4 }, 1000: { items: 6 } },
        });
        $('.owl-2-dots').owlCarousel({
          loop: true, margin: 20, nav: false, dots: true,
          autoplay: true, autoplayTimeout: 5000, items: 2,
          responsive: { 0: { items: 1 }, 768: { items: 2 } },
        });
      }

      if ($.fn && $.fn.accordion) {
        $('.accordion').accordion({ collapsible: true });
      } else {
        $('.accordion-section-title').off('click').on('click', function (this: HTMLElement) {
          const target = $(this).data('tab');
          const parent = $(this).closest('.accordion-section');
          const isOpen = $(target).is(':visible');
          parent.find('.accordion-section-content').hide();
          parent.find('.accordion-section-title').removeClass('active');
          if (!isOpen) {
            $(target).slideDown(300);
            $(this).addClass('active');
          }
        });
      }

      $(window).off('scroll.header').on('scroll.header', function () {
        const scrollTop = $(window).scrollTop() || 0;
        if (scrollTop > 50) $('header').addClass('sticky');
        else $('header').removeClass('sticky');
      });
      $(window).trigger('scroll');

      $('[data-bgimage]').each(function (this: HTMLElement) {
        const el = $(this);
        const bgVal = el.attr('data-bgimage');
        if (bgVal) {
          el.css('background', bgVal);
          el.css('background-size', 'cover');
        }
      });

      $(document).off('show.bs.modal.carouselInit').on('show.bs.modal.carouselInit', function (e: any) {
        const $carousel = $(e.target).find('.carousel');
        if ($carousel.length && (window as any).bootstrap) {
          $carousel.each(function (this: HTMLElement) {
            (window as any).bootstrap.Carousel.getOrCreateInstance(this, { ride: false });
          });
        }
      });

      $('.timer').each(function (this: HTMLElement) {
        const el = $(this);
        const to = parseFloat(el.attr('data-to') || '0');
        const speed = parseInt(el.attr('data-speed') || '2000');
        $({ Counter: 0 }).animate({ Counter: to }, {
          duration: speed, easing: 'swing',
          step: function (now: number) { el.text(Math.ceil(now)); },
          complete: function () { el.text(to); },
        });
      });
    });

    return () => {
      if (typeof jarallax !== 'undefined') {
        jarallax(document.querySelectorAll('.jarallax'), 'destroy');
      }
      // reset any leftover height jarallax added to the document on desktop
      document.body.style.height = '';
      document.documentElement.style.height = '';
    };
  }, []);
}
