const getType = (value) => {
  const type = Object.prototype.toString
    .call(value) // '[object String]'
    .split(' ')[1] // ['object', 'String]'] -> 'String]'
    .split(']')[0]; // '['String', ']'] ' -> 'String'
  // let result;
  // switch (type) {
  //   case '[object String]': {
  //     result = 'string';
  //     break;
  //   }
  //   case '[object Array]': {
  //     result = 'array';
  //     break;
  //   }
  // }

  // String
  // Array
  return type;
};

const $ = (value) => {
  const el = [];
  let globalDuration;
  /**
    1. HTML 요소 그대로 반환하기
    const title = document.querySelector('.title');
    $(title);

    2. HTML 요소 만들기
    $('<div>')

    3. HTML 셀렉트 하기
    $('#title')
    $('.title')
  */
  if (value instanceof HTMLElement) {
    el[0] = value;
  } else if (typeof value === 'string' && value.startsWith('<')) {
    const tagName = value.substring(1, value.length - 1);
    el[0] = document.createElement(tagName);
  } else {
    const tags = document.querySelectorAll(value);
    // tags.forEach((tag) => el.push(tag));
    for (let i = 0; i < tags.length; i++) {
      el.push(tags[i]);
    }
  }

  el.click = function (callbackFn) {
    this.forEach((tag) => tag.addEventListener('click', callbackFn));

    return this;
  };

  el.text = function (content) {
    this.forEach((tag) => {
      tag.textContent = content;
    });

    return this;
  };

  el.fadeOut = function (duration, callbackFn) {
    globalDuration = duration;
    this.forEach((tag) => {
      tag.style.transition = `opacity ${duration / 1000}s`;
      tag.style.opacity = 0;
    });

    setTimeout(callbackFn, duration);

    return this;
  };

  el.fadeIn = function (duration, callbackFn) {
    if (globalDuration) {
      duration = globalDuration + duration;
    }

    this.forEach((tag) => {
      tag.style.transition = `opacity ${duration / 1000}s`;
      tag.style.opacity = 1;
    });

    setTimeout(callbackFn, duration);

    return this;
  };

  el.append = function (newTag) {
    this.forEach((tag) => tag.appendChild(newTag[0]));
    return this;
  };

  el.addClass = function (classNames) {
    // if (!classNames) return;
    if (getType(classNames) === 'String') {
      this.forEach((tag) => tag.classList.add(...classNames.split(' ')));
    } else if (getType(classNames) === 'Array') {
      this.forEach((tag) => tag.classList.add(...classNames));
    }

    return this;
  };

  el.map = function (callbackFn) {
    this.forEach((tag, i) => {
      el[i] = callbackFn(i, $(tag))[0];
    });

    return this;
  };

  return el;
};

$('.title')
  .map(function (i, tag) {
    return tag.addClass('ads');
  })
  .text('adawdawddwad');

// $('.title').addClass(['a', 'b']);
// $('.title').addClass('c d');

// $('.title').append($('<div>').text('Hello'));

// $('.title')
//   .fadeOut(5000, function () {
//     console.log('ended..');
//   })
//   .fadeIn(1000);

// $('.title').map(function () {
//   console.log('clicked..');
// });
