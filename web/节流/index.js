// const throttle = (fn, delay = 500) => {
//     let flag = true
//     return (...arg) => {
//         if (!flag) {
//             return
//         } else {
//             flage = false
//             setTimeout(() => {
//                 fn.apply(this,arg)
//                 flag = true
//             }, delay)
//         }
//     }
// }


/**
 * 节流函数
 * @param fn 处理函数
 * @param period 节流周期
 * @param delay 最后一次点击在周期内时，延时多久执行，大于0才延时执行，否则会丢弃最后一次响应
 */
const throttle = (fn, period, delay = 0) => {
  // 上一次执行时间
  let previous = 0; 
  console.log('💩 - file: index.js:26 - throttle - previous:', previous);
  let timer = null;

  return (...args) => {
    const now = Date.now();
    // 首次会立即执行
    if (now - previous > period) { 
      clearTimeout(timer);
      fn(...args);
      previous = now;
      console.log('💩 - file: index.js:36 - return - previous:', previous);
    }
    // 保证最后一次能执行 
    else if (delay > 0) { 
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
        previous = now;
      }, delay);
    }
  };
}


console.log('hello world')