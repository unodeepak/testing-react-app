// function debounce(func, delay) {
//   console.log("function: ", func);
//   let timeoutId;
//   return (...args) => {
//     console.log({ args: args }, ...args);
//     if (timeoutId) clearTimeout(timeoutId);

//     timeoutId = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }

// const debouncedSearch = debounce((value) => {
//   console.log("Searching for:", value);
// }, 1000);

// debouncedSearch("React"); 

function debounce(func, delay) {
    let timerId;
    
    return (...args) => {
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(() => {
            func(...args);
        }, delay)
    }
}

const debouncedSearch = debounce((val) => {
    console.log("Value is ", val);
}, 1000);

debouncedSearch("React")
debouncedSearch("React2")
debouncedSearch("React3 fdsdf")
