/**
 * @param {number[][]} rectangles
 * @return {number}
 */
 var countGoodRectangles = function(rectangles) {
    const arr = [];
    for(let i of rectangles){
        arr.push(Math.min(i[0],i[1]));
    }
    console.log(arr)
    const max = Math.max(...arr);
    let ans = 0;
    for(let i of arr){
        if(i===max)ans++;
    }
    return ans;
};
console.log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5]]))