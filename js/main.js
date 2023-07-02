const main = document.querySelector('main');
const editors = document.querySelector('.editors');

const htmlCode = document.querySelector('#html');
const cssCode = document.querySelector('#css');
const jsCode = document.querySelector('#js');

const codeBoxes = document.querySelectorAll('textarea');

const output = document.querySelector('iframe');

const htmlBox = document.querySelector('.html-box');
const cssBox = document.querySelector('.css-box');
const jsBox = document.querySelector('.js-box');

const switches = document.querySelectorAll('.switch');

const htmlSwitch = document.querySelector('.html-switch');
const cssSwitch = document.querySelector('.css-switch');
const jsSwitch = document.querySelector('.js-switch');

const boxes = document.querySelectorAll('.box');

const arrows = document.querySelectorAll('.fa-caret-down');

const htmlStretch = document.querySelector('.html-stretch');

const cssStretch = document.querySelector('.css-stretch');

const jsStretch = document.querySelector('.js-stretch');

const fullScreen = document.querySelector('.full-screen');
const smallScreen = document.querySelector('.half-screen');

const playField = document.querySelector('.play-field');

const copy = document.querySelector('.copy');

const copies = document.querySelectorAll('.copy');

const sun = document.querySelector('#sun');

const moon = document.querySelector('#moon');

htmlCode.addEventListener('keyup', (e) => {
  Code();
});

cssCode.addEventListener('keyup', (e) => {
  Code();
});

jsCode.addEventListener('keyup', (e) => {
  Code();
});

function Code() {
  output.contentDocument.body.innerHTML =
    htmlCode.value + `<style>${cssCode.value}</style>`;

  output.contentWindow.eval(jsCode.value);
}

switches.forEach((element) => {
  element.addEventListener('click', () => {
    boxes.forEach((item) => {
      item.classList.remove('active');
    });

    if (element.classList.contains('html-switch')) {
      htmlBox.classList.add('active');
    }

    if (element.classList.contains('css-switch')) {
      cssBox.classList.add('active');
    }

    if (element.classList.contains('js-switch')) {
      jsBox.classList.add('active');
    }
  });
});

arrows.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('fa-caret-down');
    item.classList.toggle('fa-caret-up');

    if (item.classList.contains('html-arrow')) {
      jsBox.classList.toggle('lg:block');
      cssBox.classList.toggle('lg:block');
    }

    if (item.classList.contains('css-arrow')) {
      htmlBox.classList.toggle('hide');
      jsBox.classList.toggle('lg:block');
    }

    if (item.classList.contains('js-arrow')) {
      htmlBox.classList.toggle('hide');
      cssBox.classList.toggle('lg:block');
    }
  });
});

if (window.innerWidth < 1024) {
  fullScreen.addEventListener('click', () => {
    editors.classList.toggle('hidden');

    main.classList.toggle('grid-rows-3');

    fullScreen.classList.toggle('hidden');
    smallScreen.classList.toggle('hidden');
  });

  smallScreen.addEventListener('click', () => {
    editors.classList.toggle('hidden');

    main.classList.toggle('grid-rows-3');

    smallScreen.classList.toggle('hidden');
    fullScreen.classList.toggle('hidden');
  });
}

if (window.innerWidth > 1024) {
  fullScreen.addEventListener('click', () => {
    editors.classList.toggle('hidden');

    main.classList.toggle('lg:grid-cols-3');

    fullScreen.classList.toggle('hidden');
    smallScreen.classList.toggle('hidden');
  });

  smallScreen.addEventListener('click', () => {
    editors.classList.toggle('hidden');

    main.classList.toggle('lg:grid-cols-3');

    smallScreen.classList.toggle('hidden');
    fullScreen.classList.toggle('hidden');
  });
}

codeBoxes.forEach((item) => {
  item.addEventListener('keyup', () => {
    if (item.value != 0) {
      const closestBox = item.closest('.box');
      let copyText = closestBox.querySelector('.copy');
      copyText.classList.remove('hidden');
    } else {
      const closestBox = item.closest('.box');
      let copyText = closestBox.querySelector('.copy');
      copyText.classList.add('hidden');
    }
  });
});

copies.forEach((item) => {
  item.addEventListener('click', () => {
    const closestBox = item.closest('.box');
    const input = closestBox.querySelector('textarea');

    input.select();
    navigator.clipboard.writeText(input.value);
  });
});

window.addEventListener('load', function () {
  let iframe = document.querySelector('iframe');
  let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

  let style = document.createElement('style');
  style.innerHTML = ` 

  ::-webkit-scrollbar {
    width: .8rem;
  }
  
  ::-webkit-scrollbar-track {
    background: #131313;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: navy;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgb(8, 8, 165);
  }
   
  `;

  iframeDocument.head.appendChild(style);
});

htmlStretch.addEventListener('click', () => {
  playField.classList.toggle('hidden');
  main.classList.toggle('grid-rows-3');
});

cssStretch.addEventListener('click', () => {
  playField.classList.toggle('hidden');
  main.classList.toggle('grid-rows-3');
});

jsStretch.addEventListener('click', () => {
  playField.classList.toggle('hidden');
  main.classList.toggle('grid-rows-3');
});

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  moon.classList.add('hidden');
  document.documentElement.classList.add('dark');
} else {
  sun.classList.add('hidden');
  document.documentElement.classList.remove('dark');
}

moon.addEventListener('click', () => {
  document.documentElement.classList.add('dark');
  moon.classList.toggle('hidden');
  sun.classList.remove('hidden');
});

sun.addEventListener('click', () => {
  document.documentElement.classList.remove('dark');
  sun.classList.toggle('hidden');
  moon.classList.remove('hidden');
});
