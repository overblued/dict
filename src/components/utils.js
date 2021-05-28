
export function debounce(fn, limit = 1000) {
  let tID = 0;
  return function (...args) {
    clearTimeout(tID);
    tID = setTimeout(() => fn(...args), limit);
  }
}

export function throttle(fn, limit = 1000) {
  let tID = -1;
  return function (...args) {
    if (tID >= 0) {
      return;
    }
    tID = setTimeout(() => {
      tID = -1;
      fn(...args);
    }, limit);
  }
}

export default {debounce,throttle}
