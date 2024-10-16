function spiralOrder(matrix) {
    let results = [];
    if(matrix.length === 0) return results;

    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let left = 0;

    while(top <= bottom && left <= right) {
        // left to right
        for(let i=left; i<=right; i++) {
            results.push(matrix[top][i])
        }
        top++;

        // top to bottom
        for(let i=top; i<=bottom; i++) {
            results.push(matrix[i][right]);
        }
        right--;

        //right to left
        if(top <= bottom){
            for(let i=right; i>=left; i--) {
                results.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if(left <= right){
            for(let i=bottom; i >=top; i--) {
                results.push(matrix[i][left]);
            }
            left++;
        }
    }
    console.log(top)
    return results;
}

const arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

console.log(spiralOrder(arr));