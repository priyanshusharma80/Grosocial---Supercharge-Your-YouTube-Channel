function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
  }

  var typed = new Typed(".typed", {
    strings : ["Create!","Manage!" "Edit!", "Optimize!", "Grow!"],
    typeSpeed: 250,
    backSpeed: 250,
    loop: true
  })


  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    speed: 400,
    spaceBetween: 25,
    centerSlide: 'true',
    fade: 'true',
    loop: true,
    grabCursor: 'true',
    autoplay: {
      delay: 2000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      755: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      },

      1210: {
        slidesPerView: 4,
      },
    }

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
