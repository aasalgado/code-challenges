function rotate(matrix) {
    // Step 1: Transpose the matrix (swap rows and columns)
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // Step 2: Reverse each row
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }
}


