window.onload = function () {

  const fixYBrowserStartGrafAnimation = 230;

  //стрелка в верх
  const arrowTop = document.querySelector(".arrow-top");
  const top = document.querySelector('#top');
  const startingPoint = document.querySelector('#section2');
  const screenLink = document.querySelector('.first-screen__link');
  const topLineStartingPoint = document.querySelector('.report-top-line--starting-point');

  function scrollTo(element) {
    window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
    })
  }

  // клик по стрелочке вверх
  arrowTop.addEventListener('click', () => {
    scrollTo(top);
    topLineStartingPoint.classList.remove('page-header-fixed');
  })

  // клик по стрелочке 'СМОТРЕТЬ ОТЧЕТ'
  screenLink.addEventListener('click', () => {
    scrollTo(startingPoint); //прокрутка до пункта нач точка
    topLineStartingPoint.classList.add('page-header-fixed'); // фиксация соот заголовка вверху стр
  })

  //показываем/скрываем стрелку при прокрутке экрана на 200 вниз
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) { // стрелка вверх
      arrowTop.classList.add('arrow-top__visible');
    } else {
      arrowTop.classList.remove('arrow-top__visible');
    }
  })

  //включаем анимацию счетчиков при прокрутке экрана до соот графика
  //прокрутили до 1-ого графика
  const firstGrag = document.querySelector(".graf-js--1");
  const firstGragCounts = firstGrag.querySelectorAll(".number-js");
  const firstGragTextNums = firstGrag.querySelectorAll(".graf-text-num");
  const collsFirst = firstGrag.querySelectorAll('.graf-text-month')

  //условие на случай окна меньше 768px
  //в этом случе нач анимации startFistGrafAnimation должно поменяться
  // на document.querySelector('.mobile-start-first-graf-animation')

  if ($(window).width() < 768) {
    var startFistGrafAnimation = document.querySelector('.mobile-start-first-graf-animation').getBoundingClientRect().top;
  }
  else {
    var startFistGrafAnimation = document.querySelector('.start-first-graf-animation').getBoundingClientRect().top;
  }

  firstGragCounts.forEach(item => {
    var start = +item.innerHTML
    var end = +item.dataset.max
    var speed = +item.dataset.speed

    window.addEventListener('scroll', function onScroll() {

      if (window.pageYOffset > startFistGrafAnimation - window.innerHeight) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function () {
          collsFirst.forEach(item => { item.classList.add('animation-bt'); }) //заполняем столбцы
          item.innerHTML = ++start; // увеличиваем счетчик
          // убираю прозрачность у счетчиков
          firstGragTextNums.forEach(item => { item.classList.add('opacity-1'); })
          if (start == end) {
            clearInterval(interval);
          }
        }, speed); // скорость прокрутки
      }


    });

  });


  //прокрутили до 2-ого графика
  const secondGrag = document.querySelector(".graf-js--2");
  const secondGragCounts = secondGrag.querySelectorAll(".number-js");
  const secondGragTextNums = secondGrag.querySelectorAll(".graf-text-num");
  const collsSecond = secondGrag.querySelectorAll('.graf-text-month')
  const startSecondGrafAnimation = document.querySelector('.start-second-graf-animation').getBoundingClientRect().top;

  secondGragCounts.forEach(item => {
    var start = +item.innerHTML
    var end = +item.dataset.max
    var speed = +item.dataset.speed

    window.addEventListener('scroll', function onScroll() {
      if (window.pageYOffset > startSecondGrafAnimation - window.innerHeight) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function () {
          collsSecond.forEach(item => { item.classList.add('animation-bt'); }) //заполняем столбцы
          item.innerHTML = ++start; // увеличиваем счетчик
          // убираю прозрачность у счетчиков
          secondGragTextNums.forEach(item => { item.classList.add('opacity-1'); })
          if (start == end) {
            clearInterval(interval);
          }
        }, speed); // скорость прокрутки
      }
    });

  })

  //прокрутили до 3-ого счетчика
  const thirdGrag = document.querySelector(".number-js--3");
  const startThirdGrafAnimation = document.querySelector('.start-third-graf-animation').getBoundingClientRect().top;

  var start = +thirdGrag.innerHTML
  var end = +thirdGrag.dataset.max
  var speed = +thirdGrag.dataset.speed

  window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > startThirdGrafAnimation - window.innerHeight) {
      this.removeEventListener('scroll', onScroll);
      var interval = setInterval(function () {
        thirdGrag.innerHTML = ++start; // увеличиваем счетчик
        if (start == end) {
          clearInterval(interval);
        }
      }, speed); // скорость прокрутки
    }
  });

  //прокрутили до 4-ого графика
  const fourthGrag = document.querySelector(".graf-js--4");
  const fourthGragCounts = fourthGrag.querySelectorAll(".number-js");
  const fourthGragTextNums = fourthGrag.querySelectorAll(".graf-text-num");
  const collsFourth = fourthGrag.querySelectorAll('.graf-text-month')
  const startFourthGrafAnimation = document.querySelector('.start-fourth-graf-animation').getBoundingClientRect().top;

  fourthGragCounts.forEach(item => {
    var start = +item.innerHTML
    var end = +item.dataset.max
    var speed = +item.dataset.speed

    window.addEventListener('scroll', function onScroll() {
      if (window.pageYOffset > startFourthGrafAnimation - window.innerHeight) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function () {
          collsFourth.forEach(item => { item.classList.add('animation-bt'); }) //заполняем столбцы
          item.innerHTML = ++start; // увеличиваем счетчик
          // убираю прозрачность у счетчиков
          fourthGragTextNums.forEach(item => { item.classList.add('opacity-1'); })

          if (start == end) {
            clearInterval(interval);
          }
        }, speed); // скорость прокрутки
      }
    });

  });

  //прокрутили до 5-ого графика
  const fifthGrag = document.querySelector(".graf-js--5");
  const fifthGragCounts = fifthGrag.querySelectorAll(".number-js");
  const fifthGragUnit = fifthGrag.querySelectorAll(".circle");
  const fifthGragTestDiagrams = fifthGrag.querySelectorAll(".test-diagrams-items");
  const startFifthGrafAnimation = document.querySelector('.start-fifth-graf-animation').getBoundingClientRect().top;

  // console.log('fifthGragUnit = ', fifthGragUnit);

  fifthGragCounts.forEach(item => {
    var start = +item.innerHTML
    var end = +item.dataset.max
    var speed = +item.dataset.speed

    window.addEventListener('scroll', function onScroll() {
      if (window.pageYOffset > startFifthGrafAnimation - window.innerHeight) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function () {
          item.innerHTML = ++start; // увеличиваем счетчик

          // убираю прозрачность у счетчиков
          fifthGragUnit.forEach(item => { item.classList.add('unit'); })
          fifthGragTestDiagrams.forEach(item => { item.classList.add('opacity-1'); })

          if (start == end) {
            clearInterval(interval);
          }
        }, speed); // скорость прокрутки
      }
    });

  });

  //прокрутили до 6-ого блока
  const sixthGrag = document.querySelector(".graf-js--6");
  const sixthGragCounts = sixthGrag.querySelectorAll(".number-js");
  const collsSixth = sixthGrag.querySelectorAll('.report-bar')
  const startSixthGrafAnimation = document.querySelector('.start-sixth-graf-animation').getBoundingClientRect().top;

  sixthGragCounts.forEach(item => {
    var start = +item.innerHTML
    var end = +item.dataset.max
    var speed = +item.dataset.speed

    window.addEventListener('scroll', function onScroll() {
      if (window.pageYOffset > startSixthGrafAnimation - window.innerHeight) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function () {
          collsSixth.forEach(item => { item.classList.add('animation-lr'); }) //заполняем столбцы
          item.innerHTML = ++start; // увеличиваем счетчик
          if (start == end) {
            clearInterval(interval);
          }
        }, speed); // скорость прокрутки
      }
    });

  });

  //прокрутили до 7-ого блока
  const seventhGrag = document.querySelector(".graf-js--7");
  const seventhGragCounts = seventhGrag.querySelectorAll(".number-js");
  const seventhGragTextNums = seventhGrag.querySelectorAll(".graf-text-num");
  const collsSeventh = seventhGrag.querySelectorAll('.graf-text-month')

  //условие на случай окна меньше 768px
  //в этом случе нач анимации startFistGrafAnimation должно поменяться
  // на document.querySelector('.mobile-start-first-graf-animation')

  if ($(window).width() < 768) {
    var startSeventhGrafAnimation = document.querySelector('.mobile-start-seventh-graf-animation').getBoundingClientRect().top;
  }
  else {
    var startSeventhGrafAnimation = document.querySelector('.start-seventh-graf-animation').getBoundingClientRect().top;
  }

  seventhGragCounts.forEach(item => {
    var start = +item.innerHTML
    var end = +item.dataset.max
    var speed = +item.dataset.speed

    window.addEventListener('scroll', function onScroll() {
      if (window.pageYOffset > startSeventhGrafAnimation - window.innerHeight) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function () {
          collsSeventh.forEach(item => { item.classList.add('animation-bt'); }) //заполняем столбцы
          item.innerHTML = ++start; // увеличиваем счетчик
          // убираю прозрачность у счетчиков
          seventhGragTextNums.forEach(item => { item.classList.add('opacity-1'); })
          if (start == end) {
            clearInterval(interval);
          }
        }, speed); // скорость прокрутки
      }
    });

  });

  //прокрутили до 8-ого блока
  eighthGrag = document.querySelector(".graf-js--8");
  const eighthGragCounts = eighthGrag.querySelectorAll(".graf-text");
  const eighthGragTextNums = eighthGrag.querySelectorAll(".graf-text-num");
  const collsEighth = eighthGrag.querySelectorAll('.graf-text-month')
  const startEighthGrafAnimation = document.querySelector('.start-eighth-graf-animation').getBoundingClientRect().top;

  eighthGragCounts.forEach(item => {
    var start = +item.innerHTML
    var end = +item.dataset.max
    var speed = +item.dataset.speed

    window.addEventListener('scroll', function onScroll() {
      if (window.pageYOffset > startEighthGrafAnimation - window.innerHeight - fixYBrowserStartGrafAnimation) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function () {
          collsEighth.forEach(item => { item.classList.add('animation-bt'); }) //заполняем столбцы
          // item.innerHTML = ++start; // увеличиваем счетчик
          // убираю прозрачность у счетчиков
          eighthGragTextNums.forEach(item => { item.classList.add('opacity-1'); })
          if (start == end) {
            clearInterval(interval);
          }
        }, speed); // скорость прокрутки
      }
    });

  });

  //прокрутили до 9-ого счетчика (77)
  const ninthGrag = document.querySelector(".number-js--9");
  const startNinthGrafAnimation = document.querySelector('.start-ninth-graf-animation').getBoundingClientRect().top;

  var start9 = +ninthGrag.innerHTML
  var end9 = +ninthGrag.dataset.max
  var speed9 = +ninthGrag.dataset.speed

  window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > startNinthGrafAnimation - window.innerHeight - fixYBrowserStartGrafAnimation) {
      this.removeEventListener('scroll', onScroll);
      var interval = setInterval(function () {
        ninthGrag.innerHTML = ++start9; // увеличиваем счетчик
        if (start9 == end9) {
          // if (ninthGrag.innerHTML >= end9) {
          clearInterval(interval);
        }
      }, speed9); // скорость прокрутки
    }
  });


  //прокрутили до 10-ого графика
  const tenthGrag = document.querySelector(".graf-js--10");
  const tenthGragCounts = tenthGrag.querySelectorAll(".number-js");
  const tenthGragTextNums = tenthGrag.querySelectorAll(".text-bold");
  const tenthGragBars = tenthGrag.querySelectorAll(".report-bar-js");
  const startTenthGrafAnimation = document.querySelector('.start-tenth-graf-animation').getBoundingClientRect().top;

  tenthGragCounts.forEach(item => {
    var start = +item.innerHTML
    var end = +item.dataset.max
    var speed = +item.dataset.speed

    window.addEventListener('scroll', function onScroll() {
      if (window.pageYOffset > startTenthGrafAnimation - window.innerHeight - fixYBrowserStartGrafAnimation) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function () {
          item.innerHTML = ++start; // увеличиваем счетчик
          // убираю прозрачность у счетчиков
          tenthGragTextNums.forEach(item => { item.classList.add('opacity-1'); })

          if (start == end) {
            clearInterval(interval);
          }
        }, speed); // скорость прокрутки
      }
    });

  });

  tenthGragBars.forEach(item => {
    window.addEventListener('scroll', function onScroll() {
      if (window.pageYOffset > startTenthGrafAnimation - window.innerHeight - fixYBrowserStartGrafAnimation) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function () {
          item.classList.add('animation-rl');
          if (true) {
            clearInterval(interval);
          }
        }, speed); // скорость прокрутки
      }
    });

  });

  //перeход по страницам(пунктам меню)
  //прокрутка до след пункта + фиксация соот пункта вверху стр 

  const sections = document.querySelectorAll("section[id]");

  function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
      const sectionId = current.getAttribute("id");

      /*
      - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
      - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
      */
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ) {
        document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");

        if (sectionId == 'section2') {
          document.querySelector('.report-top-line--section1').classList.add("active-prev")

          document.querySelector('.report-top-line--section2').classList.remove("active-prev");
          document.querySelector('.report-top-line--section3').classList.remove("active-prev");
          document.querySelector('.report-top-line--section4').classList.remove("active-prev");

        } else if (sectionId == 'section3') {
          document.querySelector('.report-top-line--section1').classList.add("active-prev")
          document.querySelector('.report-top-line--section2').classList.add("active-prev")

          document.querySelector('.report-top-line--section3').classList.remove("active-prev");
          document.querySelector('.report-top-line--section4').classList.remove("active-prev");

        } else if (sectionId == 'section4') {
          document.querySelector('.report-top-line--section1').classList.add("active-prev")
          document.querySelector('.report-top-line--section2').classList.add("active-prev")
          document.querySelector('.report-top-line--section3').classList.add("active-prev")

          document.querySelector('.report-top-line--section4').classList.remove("active-prev");
        }

      } else {
        document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");

        // document.querySelector('.report-top-line--section1').classList.remove("active-prev");
        // document.querySelector('.report-top-line--section2').classList.remove("active-prev");
      }

    });
  }

  window.addEventListener("scroll", navHighlighter);

  // make any elements animated by class
  // $(".first-screen__img").addClass("wow animate__fadeInUp");

  //1-ый экран
  $(".first-screen__title-first").addClass("wow animate__fadeInDown");
  $(".first-screen__report-data.container").addClass("wow animate__fadeInDown");
  $(".first-screen__link").addClass("wow animate__fadeInUp");
  $(".first-screen__logo-text").addClass("wow animate__fadeDown");

  // activate wow.js
  wow = new WOW({
    animateClass: "animate__animated"
  });
  wow.init();

  // //Parallax
  $('.jumbotron-1').paroller();
  $('.jumbotron-2').paroller();
  $('.jumbotron-3').paroller();

}