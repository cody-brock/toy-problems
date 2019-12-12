

class MaxBinaryHeap {
    constructor() {
        this.values = [55,39,33,18,27,12,34]
    }
}

MaxBinaryHeap.prototype.insert = function(element) {
    this.values.push(element);
    this.bubbleUp();
}

MaxBinaryHeap.prototype.bubbleUp = function() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
        let parentIdx = Math.floor((idx - 1)/2);
        let parent = this.values[parentIdx];

        if(element <= parent) break;
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
    }
}

MaxBinaryHeap.prototype.extractMax = function() {
    const max = this.values[0]
    const end = this.values.pop();
    if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
        return max;
    }
}

MaxBinaryHeap.prototype.sinkDown = function() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (idx < this.values.length) {
        let leftChildIdx = (idx * 2) + 1;
        let rightChildIdx = (idx * 2) + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx];
            if (leftChild > element) {
                swap = leftChildIdx;
            }
        }

        if (rightChildIdx < length) {
            rightChild = this.values[rightChildIdx];
            if(
                (swap === null && rightChild > element) || 
                (swap !== null && rightChild > leftChild)
            ) {
                swap = rightChildIdx;
            }
        }

        if (swap === null) break;
        this.values[idx] = this.values[swap]
        this.values[swap] = element;
        idx = swap;
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(45);
// heap.insert(12);

        //         55
        //    45        33
        //41     27   12   34
    // 18  39  
console.log("before extractMax", heap);
heap.extractMax();
console.log("after extractMax", heap);