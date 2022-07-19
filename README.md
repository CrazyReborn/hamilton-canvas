# hamilton-canvas
#### An algorithm visualizer written with vanilla JavaScript. Canvas API is used to visualize sorting algorithms. Pathfing is performed on a nodeList of divs.


## Sorting algorithms

**Selection sort** finds the smallest element in the unsorted subarray and moves it to the beginning of that subarray.

**Bubble sort** takes two adjacent elements of the array and swaps them if they are not in the ascending order.

**Insertion sort** inserts the first element of the unsorted subarray at the correct position of the sorted subarray.

**Merge sort** is a divide and conquer algorithm. The first part of the algorithm recursively devides passed array into two smaller ones until there is only one element in the array. After that merge the two subarrays into one while sorting the elements.

**Quick sort** is a divide and conquer algorithm has 3 types, depending on the selected pivot. My uses end pivot. After selecting pivot the array is sorted in the way, that results in the pivot becoming a median, that divides the array into left part, where smaller elements are, and the right one. After that the array is divided in two, not including the pivot, and passed recursively to the algorithm. After only one element left in every array it is merged with a parent pivot.


## Pathfinding algorithms

**Depth first search** Algorithm starts at the root node and explores the graph as far as possible along a branch. If there is no more nodes in this brach - backtrack when there will be one availiable. Uses stack as the main data structure.

**Dijkstra's algorithm** Is basically a modified breadth first search algorithm, that is performed on a weighted graph. Main data structure is queue. On at the beginning of the algorithm every node is assigned a distance of infinity, starting node is assigned 0. The algorithm starts from the node with the smallest distance (root) and explores its neighbors, while changing their distance, if it is smaller that the previous. The distance is calculated by adding distance to the current node to weight of the neighbor node. This algorithm finds shortest path to the target node.

**A\*(star) algorithm** Modifired Dijkstra's, that requires the distance from target node (heuristic) to any other node to be known. Using heuristic the algorithm explores neighbors with the smallest one, thus always moving in the general direction of target node.