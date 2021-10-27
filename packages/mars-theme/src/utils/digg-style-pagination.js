
// Algorithm obtained from https://gist.github.com/kottenator/9d936eb3e4e3c3e02598

const diggStylePagination = (currentPage, totalPages) => {
    var current = currentPage,
        last = totalPages,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;
  
    for (let i = 1; i <= last; i++) {
        // only the first number or last number or +- according to delta pages are used 
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }
  
    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }
  
    return rangeWithDots;
  }

  export default diggStylePagination