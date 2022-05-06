export function Quicksort(array){

    //Initialize animation array to return to color bars
    const animations = [];
    if(array.length <= 1) return array;

    return animations;
}
/*Basic steps for what I need to do

    -when comparing two values, push them into the animations array as a tuple
    -push them a second time to revert the color
*/

//Below is some pseudo code for reference to implement quicksort 


// low  --> Starting index,  high  --> Ending index 
// quickSort(arr[], low, high)
// {
//     if (low < high)
//     {
//          pi is partitioning index, arr[pi] is now
//            at right place 
//         pi = partition(arr, low, high);

//         quickSort(arr, low, pi - 1);  // Before pi
//         quickSort(arr, pi + 1, high); // After pi
//     }
// }


//  This function takes last element as pivot, places
//    the pivot element at its correct position in sorted
//     array, and places all smaller (smaller than pivot)
//    to left of pivot and all greater elements to right
//    of pivot 
// partition (arr[], low, high)
// {
//     /pivot (Element to be placed at right position)
//     pivot = arr[high];  

//     i = (low - 1)  // Index of smaller element and indicates the 
//                      right position of pivot found so far

//     for (j = low; j <= high- 1; j++)
//     {
//         /If current element is smaller than the pivot
//         if (arr[j] < pivot)
//         {
//             i++;    // increment index of smaller element
//             swap arr[i] and arr[j]
//         }
//     }
//     swap arr[i + 1] and arr[high])
//     return (i + 1)
// }