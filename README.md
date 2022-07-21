# hamilton-canvas
An algorithm visualizer written with vanilla JavaScript. Canvas API is used to visualize sorting algorithms. Pathfing is performed on a nodeList of divs.

*Please use desktop version of Chrome browser, the app is not mobile friendly*
[Live page](https://crazyreborn.github.io/hamilton-canvas/)


## How to use

**Pathfinding part**

On the top bar you can see control elements. Those are self explanatory. Below there is a toggle switch that controls what is placed on clicking the grid: grey color shows, that walls will be placed, blue color show, that weight will be added to a node. Adding a wall to a weighted node will not work. You can drag and drop staring (green) and target (gold) nodes. Select an algorithm to be performed on the graph and enjoy the show!

**Sorting part**

On the top bar you can see control elements. Create an array using range slider, choose the algorithm to be performed on the array and enjoy the show!


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


## How it works

**Sorting part**
Upon visiting the page or moving the range slider an array is generated, with *N* number of elements, where *N* is value of the range slider. After that the array is passed to a canvas function, that visualizes the array as a chart with bars of different height. The height of a bar is determined by the value of the corresponding array element. After selecting the algorithm to be performed on the array, the array is passed to the sorting function. After each operation the canvas function is called to visualize changes to the array.

**Pathfinding part**
The page generates 30x55 grid of divs while assinging *row* and *column* attributes. Next the nodeList of the divs is passed to the funciton that creates an adjacency list from this nodeList, using *row* and *column* properties as representation of the nodes. After selecting an algorithm the adjacency list and start and/or end nodes are passed to the selected algorithm function. Functions generally behave like that: take a node from stack or queue, find a div with corresponding *row* and *column* attributes, check if it has been visited or is a blocked/target node. If it this node has not been visited yet, mark it as visited by adding class 'visited', if it is the target - stop the pathfinding, if it is a wall (node is blocked) - skip it. After that neighbors of the node are added to the stack/queue and the algorithm continues on the remanaing members of the data structure before the target is found. If target is not found - return false and color all visited nodes in pink.
