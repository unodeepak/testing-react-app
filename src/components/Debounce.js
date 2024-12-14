function debounce(func, delayTime) {
    let timerId;

    return (...args) => {
        if (timerId) {
            clearTimeout(timerId);

            timerId = setTimeout(() => {
                func(...args);
            }, delayTime);
        }
    }
}

const search = debounce((searchString) => {
    console.log("Search String is : ", searchString);
}, 1000)

search("Hello");
search("Hello World");
search("Happy New Year");