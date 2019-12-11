class MaxBinaryHeap {
    constructor() {
        this.values = [55,39,33,18,27,12,33]
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
    let max = this.values[0]
    let minIdx = this.values.length - 1;
    let min = this.values[minIdx];

    this.values[0] = min;
    this.values[minIdx] = max;

    let returnNum = this.values.pop();
    console.log("returnNum", returnNum);

    while (idx < this.values.length) {
        let 
    }

}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(45);

console.log("before extractMax", heap);
heap.extractMax();
console.log("after extractMax", heap);