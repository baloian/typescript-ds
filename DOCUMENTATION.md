# TypeScript Data Structure Library Documentation
This library provides a collection of commonly used data structures implemented in TypeScript. Each data structure is designed to be type-safe and efficient.
- [Binary Search Tree](https://github.com/baloian/typescript-ds-lib/blob/master/DOCUMENTATION.md#binary-search-tree)
- [Deque](https://github.com/baloian/typescript-ds-lib/blob/master/DOCUMENTATION.md#deque)
- [Hash Table](https://github.com/baloian/typescript-ds-lib/blob/master/DOCUMENTATION.md#hash-table)
- [Linked List](https://github.com/baloian/typescript-ds-lib/blob/master/DOCUMENTATION.md#linked-list)
- [Map](https://github.com/baloian/typescript-ds-lib/blob/master/DOCUMENTATION.md#map)
- [Priority Queue](https://github.com/baloian/typescript-ds-lib/blob/master/DOCUMENTATION.md#priority-queue)
- [Queue](https://github.com/baloian/typescript-ds-lib/blob/master/DOCUMENTATION.md#queue)
- [Set](https://github.com/baloian/typescript-ds-lib/blob/master/DOCUMENTATION.md#set)
- [Stack](https://github.com/baloian/typescript-ds-lib/blob/master/DOCUMENTATION.md#stack)

# Binary Search Tree
A binary search tree (BST) implementation in TypeScript that stores values in an ordered tree structure, with smaller values to the left and larger values to the right.


## Methods
`insert(value: T)` - Inserts a new value into the binary search tree.   
`find(value: T)` - Searches for a value in the binary search tree.  
`min()` - Returns the minimum value stored in the tree.  
`max()` - Returns the maximum value stored in the tree.  
`remove(value: T)` - Removes a value from the binary search tree if it exists.  
`empty()` - Checks if the binary search tree is empty.  
`clear()` - Removes all nodes from the binary search tree.  
`count()` - Returns the total number of nodes in the binary search tree.  

### Example Usage
```typescript
import { BinarySearchTree, BinarySearchTreeTy } from 'typescript-ds-lib';

const bst: BinarySearchTreeTy<number> = new BinarySearchTree<number>();

bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.find(5));   // true
console.log(bst.min());     // 5
console.log(bst.max());     // 15
```


# Deque
A double-ended queue (Deque) implementation in TypeScript that allows insertion and deletion of elements from both ends of the queue.

## Methods
`pushFront(value: T)` - Adds an element to the front of the deque.  
`pushBack(value: T)` - Adds an element to the back of the deque.  
`popFront()` - Removes and returns the front element of the deque.  
`popBack()` - Removes and returns the back element of the deque.  
`front()` - Returns the front element without removing it.  
`back()` - Returns the back element without removing it.  
`empty()` - Checks if the deque is empty.  
`clear()` - Removes all elements from the deque.  
`size()` - Returns the total number of elements in the deque.  

### Example Usage
```typescript
import { Deque, DequeTy } from 'typescript-ds-lib';

const deque: DequeTy<number> = new Deque<number>();

deque.pushBack(1);    // deque: [1]
deque.pushFront(2);   // deque: [2,1]
deque.pushBack(3);    // deque: [2,1,3]

console.log(deque.front());  // 2
console.log(deque.back());   // 3
console.log(deque.size());   // 3

deque.popFront();     // deque: [1,3]
deque.popBack();      // deque: [1]
```


# Hash Table
A hash table implementation in TypeScript that provides efficient key-value pair storage and retrieval using a hash function for indexing.

## Methods
`insert(key: K, value: V)` - Inserts or updates a key-value pair in the hash table.  
`get(key: K)` - Retrieves the value associated with the given key.  
`remove(key: K)` - Removes a key-value pair from the hash table.  
`clear()` - Removes all key-value pairs from the hash table.  
`size()` - Returns the number of key-value pairs in the hash table.  
`empty()` - Checks if the hash table is empty. 

### Example Usage
```typescript
import { HashTable, HashTableTy } from 'typescript-ds-lib';

const hashTable: HashTableTy<string, number> = new HashTable<string, number>();

hashTable.insert('one', 1);
hashTable.insert('two', 2);
hashTable.insert('three', 3);

console.log(hashTable.get('two'));     // 2
console.log(hashTable.empty());        // false
console.log(hashTable.size());         // 3

hashTable.remove("one");
```


# Linked List
A singly linked list implementation in TypeScript that stores elements in a sequence of nodes, where each node points to the next node in the sequence.

## Methods
`pushBack(value: T)` - Adds a new element to the end of the linked list.  
`pushFront(value: T)` - Adds a new element to the beginning of the linked list.  
`insert(value: T, position: number)` - Inserts a new element at the specified position.  
`removeIf(condition: (element: T) => boolean)` - Removes all elements that satisfy the condition.  
`removeAt(position: number)` - Removes the element at the specified position.  
`get(position: number)` - Returns the element at the specified position.  
`empty()` - Checks if the linked list is empty.  
`clear()` - Removes all elements from the linked list.  
`size()` - Returns the total number of elements in the linked list.  

### Example Usage
```typescript
import { LinkedList, LinkedListTy } from 'typescript-ds-lib';

const list: LinkedListTy<number> = new LinkedList<number>();

list.pushBack(1);     // list: [1]
list.pushBack(2);     // list: [1,2]
list.pushFront(0);    // list: [0,1,2]

console.log(list.get(1));      // 1
console.log(list.size());      // 3

list.removeAt(0);   // list: [1,2]
list.removeAt(1);   // list: [1]
```


# Map
A map implementation in TypeScript that maintains key-value pairs in sorted order based on the keys, implemented as a red-black tree.

## Methods
`insert(key: K, value: V)` - Inserts or updates a key-value pair in the map.  
`find(key: K)` - Retrieves the value associated with the given key.  
`delete(key: K)` - Removes a key-value pair from the map.  
`clear()` - Removes all key-value pairs from the map.  
`size()` - Returns the number of key-value pairs in the map.  
`empty()` - Checks if the map is empty.  


### Example Usage
```typescript
import { Map, MapTy } from 'typescript-ds-lib';

const map: MapTy<string, number> = new Map<string, number>();

map.insert('apple', 1);
map.insert('banana', 2);
map.insert('cherry', 3);

console.log(map.find('banana'));   // 2
console.log(map.find('apple'));    // 1
console.log(map.size());           // 3

map.delete('apple');
console.log(map.size());           // 2
```


# Priority Queue
A priority queue implementation in TypeScript that maintains elements in a heap structure, where each element has a priority value determining its position in the queue.

## Methods
`push(value: T, priority: number)` - Adds an element with the specified priority to the queue.  
`pop()` - Removes and returns the element with the highest priority.  
`front()` - Returns the highest priority element without removing it.  
`empty()` - Checks if the priority queue is empty.  
`clear()` - Removes all elements from the priority queue.  
`size()` - Returns the number of elements in the priority queue.  

### Example Usage
```typescript
import { PriorityQueue, PriorityQueueTy } from 'typescript-ds-lib';

const pq: PriorityQueueTy<string> = new PriorityQueue<string>();

pq.push('Task 1', 2);    // Normal priority
pq.push('Task 2', 3);    // High priority
pq.push('Task 3', 1);    // Low priority

console.log(pq.front()); // "Task 2" (highest priority)
console.log(pq.size());  // 3

pq.pop();                // Removes "Task 2"
console.log(pq.front()); // "Task 1" (next highest priority)
```


# Queue
A queue implementation in TypeScript that follows the First-In-First-Out (FIFO) principle, where elements are added to the back and removed from the front of the queue.

## Methods
`push(value: T)` - Adds an element to the back of the queue.  
`pop()` - Removes and returns the element from the front of the queue.  
`front()` - Returns the front element without removing it.  
`empty()` - Checks if the queue is empty.  
`clear()` - Removes all elements from the queue.  
`size()` - Returns the number of elements in the queue.  

### Example Usage
```typescript
import { Queue, QueueTy } from 'typescript-ds-lib';

const queue: QueueTy<number> = new Queue<number>();

queue.push(1);    // queue: [1]
queue.push(2);    // queue: [1,2]
queue.push(3);    // queue: [1,2,3]

console.log(queue.front());  // 1
console.log(queue.size());   // 3

queue.pop();                 // queue: [2,3]
console.log(queue.front());  // 2
```


# Set
A set implementation in TypeScript that maintains a collection of unique elements, implemented as a red-black tree for efficient operations.

## Methods
`insert(value: T)` - Adds a new element to the set if it doesn't already exist.  
`remove(value: T)` - Removes an element from the set if it exists.  
`find(value: T)` - Checks if an element exists in the set.  
`empty()` - Checks if the set is empty.  
`clear()` - Removes all elements from the set.  
`size()` - Returns the number of elements in the set.  

### Example Usage
```typescript
import { Set, SetTy } from 'typescript-ds-lib';

const set: SetTy<number> = new Set<number>();

set.insert(1);    // set: {1}
set.insert(2);    // set: {1,2}
set.insert(2);    // set: {1,2} (no duplicate added)
set.insert(3);    // set: {1,2,3}

console.log(set.find(2));  // true
console.log(set.size());   // 3

set.remove(1);             // set: {2,3}
console.log(set.find(1));  // false
```


# Stack
A stack implementation in TypeScript that follows the Last-In-First-Out (LIFO) principle, where elements are added and removed from the same end of the stack.

## Methods
`push(value: T)` - Adds an element to the top of the stack.  
`pop()` - Removes and returns the element from the top of the stack.  
`top()` - Returns the top element without removing it.  
`empty()` - Checks if the stack is empty.  
`clear()` - Removes all elements from the stack.  
`size()` - Returns the number of elements in the stack.  

### Example Usage
```typescript
import { Stack, StackTy } from 'typescript-ds-lib';

const stack: StackTy<number> = new Stack<number>();

stack.push(1);    // stack: [1]
stack.push(2);    // stack: [1,2]
stack.push(3);    // stack: [1,2,3]

console.log(stack.top());   // 3
console.log(stack.size());  // 3

stack.pop();              // stack: [1,2]
console.log(stack.top()); // 2
```

