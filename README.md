# hamilton-canvas
#### An algorithm visualizer written with vanilla JavaScript. Canvas API is used to visualize sorting algorithms. Pathfing is performed on a nodeList of divs.

## Sorting algorithms

**Selection sort** finds the smallest element in the unsorted subarray and moves it to the beginning of that subarray.

**Bubble sort** takes two adjacent elements of the array and swaps them if they are not in the ascending order.

**Insertion sort** inserts the first element of the unsorted subarray at the correct position of the sorted subarray.

**Merge sort** is a divide and conquer algorithm. The first part of the algorithm recursively devides passed array into two smaller ones until there is only one element in the array. After that merge the two subarrays into one while sorting the elements.

**Quick sort** is a divide and conquer algorithm has 3 types, depending on the selected pivot. My uses end pivot. After selecting pivot the array is sorted in the way, that results in the pivot becoming a median, that divides the array into left part, where smaller elements are, and the right one. After that the array is divided in two, not including the pivot, and passed recursively to the algorithm. After only one element left in every array it is merged with a parent pivot.


## Pathfinding algorithms