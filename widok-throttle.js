function throttle(ms, callback) {
  let lastCall = 0;
  let timeout;
  return function () {
    const now = new Date().getTime();
    clearTimeout(timeout);
    if (now - lastCall >= ms) {
      lastCall = now;
      callback.call(this, ...arguments);
    } else {
      timeout = setTimeout(callback.bind(this, ...arguments), ms);
    }
  };
}

export default throttle;
