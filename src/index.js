
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length === 0 || matrix.length === 0) {
        return []
    }
    let list = [];
    let columnIndx;
    let listArray;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {

                if (i % 2 === 0) {
                    columnIndx = j;
                } else {
                    columnIndx = matrix[i].length - j - 1;
                }
                list += `${matrix[i][columnIndx]}, `

            }

        }
        listArray = list.split(', ').map((num)=>{
            return Number(num)
        })
        listArray.pop()

    return listArray;

}
