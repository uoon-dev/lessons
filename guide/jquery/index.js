const $ = (value) => {
  const el = [];
  const mapEl = [];

  if (!value) return;

  if (value instanceof HTMLElement) {
    el[0] = value;
  } else if (typeof value === 'string' && value.startsWith('<')) {
    el[0] = document.createElement(value.substr(1, value.length - 2));
  } else {
    const tags = document.querySelectorAll(value) || [];
    tags.forEach((tag) => el.push(tag));
  }

  // $(tag).click(() => {})
  el.click = function (listener) {
    this.forEach((e) => e.addEventListener('click', listener));
  };

  el.map = function (callbackFn) {
    for (const e of this) {
      mapEl.push(callbackFn(this.indexOf(e), e));
    }
    return this;
  };

  el.get = function () {
    return mapEl;
  };

  return el;
};
