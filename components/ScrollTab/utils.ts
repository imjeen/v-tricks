/**
 * 防抖(debounce)
 *
 * @param {Function} fn - 目标函数
 * @param {number} delay - 延迟执行毫秒数
 * @return {*} {(this: any) => void}
 */
export function debounce(fn: Function, delay: number): (this: any) => void {
  let timer: number;
  return function(this: any) {
    const context = this,
      args = arguments;
    clearTimeout(timer);
    timer = window.setTimeout(() => fn.apply(context, args), delay);
  };
}

/**
 * 节流(throttle)
 *
 * @param {Function} fn  - 目标函数
 * @param {number} [threshold=250] - 延迟执行毫秒数
 * @param {*} [scope=null] - 作用域
 * @return {*} {(this: any) => void}
 */
export function throttle(
  fn: Function,
  threshold = 250,
  scope: any = null
): (this: any) => void {
  let last: number, deferTimer: number;
  return function(this: any) {
    const context = scope || this;

    let now = +new Date(),
      args = arguments;
    if (last && now < last + threshold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = window.setTimeout(() => {
        last = now;
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

/**
 * 强制延迟 time 毫秒
 *
 * @export
 * @param {number} time - 多少毫秒
 * @returns
 */
export function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * 将元素垂直滚动指定位置
 *
 * @export
 * @param {number} position - 位置
 */
export function windowScrollTopTo(position: number) {
  return new Promise<void>((resolve) => {
    const scrollListener = (e: any) => {
      if ("undefined" === typeof e) return;
      // console.log('#diff', Math.abs(window.scrollY - position));
      if (Math.abs(window.scrollY - position) < 2) {
        document.removeEventListener("scroll", scrollListener);
        resolve();
      }
    };
    document.addEventListener("scroll", scrollListener);
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  });
}
