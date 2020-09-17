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
  let globalDuration = 0;
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
    const fadePromise = new Promise(resolve => {
      setTimeout(() => {
        this.forEach((tag) => {
          tag.style.transition = `opacity ${duration / 1000}s`;
          tag.style.opacity = 0;
        });
        resolve(duration);
      }, globalDuration)
    })
    fadePromise.then((duration) => {
      globalDuration += duration;      
      setTimeout(() => {
        callbackFn();
        globalDuration = 0;
      }, duration)
    })

    return this;
  };

  el.fadeIn = function (duration, callbackFn) {
    const fadePromise = new Promise(resolve => {
      // if (globalDuration) {
      //   globalDuration += duration;
      // }
      setTimeout(() => {
        this.forEach((tag) => {
          tag.style.transition = `opacity ${duration / 1000}s`;
          tag.style.opacity = 1;
        });
        resolve(duration);
      }, globalDuration)
    })
    fadePromise.then((duration) => {
      globalDuration = 0;
      setTimeout(() => {
        callbackFn();
      }, duration)      
    })

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

  el.data = function(key, value) {
    if (arguments.length === 0) {
      return this[0].dataset;
    } else if (arguments.length === 1) {
      if (getType(key) === 'Object') {
        this.forEach((tag) => {
          for (const k in key) {
            tag.dataset[k] = key[k];
          }
        })
        return this;
      } 
      return this[0].dataset[key];
    } else if (arguments.length === 2) {
      this.forEach((tag) => {
        tag.dataset[key] = value;
      })
    }

    return this;
  }

  el.siblings = function(selectors) {
    let siblings = Array.from(this[0].parentNode.children);
    let filteredSiblings = [];

    filteredSiblings = siblings.filter(sibling => sibling !== this[0] && sibling.nodeName !== 'SCRIPT').map(sibling => $(sibling));

    return filteredSiblings;

    // const siblings = [];
    // let i = 1;
    // let isFirst = true;
    // let j = 1;

    // let previousSibling;

    // while(i) {
    //   if (isFirst) {
    //     previousSibling = this[0].previousElementSibling;
    //     isFirst = false;
    //   } else {
    //     previousSibling = (previousSibling || {}).previousElementSibling;
    //   }
      
    //   if (previousSibling) {
    //     siblings.push(previousSibling)
    //   } else {
    //     isFirst = true;
    //     i--;
    //   }
    // }

    // let nextSibling;

    // while(j) {
    //   if (isFirst) {
    //     nextSibling = this[0].nextElementSibling;
    //     isFirst = false;
    //   } else {        
    //     nextSibling = (nextSibling || {}).nextElementSibling;
    //   }
    //   nextSibling = (nextSibling || {}).nextElementSibling;

    //   if (nextSibling) {
    //     siblings.push(nextSibling)
    //   } else {
    //     isFirst = true;
    //     j--;
    //   }
    // }

    return siblings;
  }

  return el;
};

$('.title').data('role', 'this is header');
console.log($('.title').data('role'));
// $('.title').data({ role: 'this is header', water: 'water!!' });
// $('.title').data({ role: 'this is header', water: 'water!!' });
// console.log($('.title').data('role'));
// $('h2').text()


  // .map(function (i, tag) {
  //   return tag.addClass('ads');
  // })
  // .text('adawdawddwad');

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
