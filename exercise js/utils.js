const sortArray= (arrayNumber) => {
    if(arrayNumber.some(isNaN)){
        throw "The array contains invalid data"
    }

    auxArray=arrayNumber
    // First sort the array in asc
    var arraySorted = arrayNumber.sort((a,b)=> a -b)
    
    // Move zeros to the end of the array
    var j = -1
    var n = arraySorted.length
    for(i=0;i<n;i++){
        if (arraySorted[i] != 0) { 
            j++; 
            temp = arraySorted[j]; 
            arraySorted[j] = arraySorted[i]; 
            arraySorted[i] = temp; 
        } 
    }
    return arraySorted
} 

exports.sortArray = sortArray;