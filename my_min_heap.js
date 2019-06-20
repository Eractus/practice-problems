class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }


  buildHeap(array) {
    let heap = [ array[0] ];
    for (let i=1; i < array.length; i++) {
      heap.push(array[i]);
      heap = this.siftUp(i, heap);
    }

    return heap;
  }


  siftUp(curIdx, heap) {
    if (curIdx === 0) {
      return heap;
    }
    let parIdx = Math.floor((curIdx - 1)/2);
    if (heap[curIdx] < heap[parIdx]) {
      [ heap[curIdx], heap[parIdx] ] = [ heap[parIdx], heap[curIdx] ];
    }
    if (parIdx === 0) {
      return heap;
    } else {
      return this.siftUp(parIdx, heap);
    }
  }

  siftDown(curIdx, heap, endIdx) {
    while (curIdx < endIdx) {
      let leftChi = curIdx * 2 + 1;
      let rightChi = curIdx * 2 + 2;
      if (heap[curIdx] > heap[leftChi]) {
        [ heap[curIdx], heap[leftChi] ] = [ heap[leftChi], heap[curIdx] ];
      }
      if (heap[curIdx] > heap[rightChi]) {
        [ heap[curIdx], heap[rightChi] ] = [ heap[rightChi], heap[curIdx] ];
      }
      curIdx += 1;
    }
    return heap;
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    let lastIdx = this.heap.length - 1;
    [ this.heap[0], this.heap[lastIdx] ] = [ this.heap[lastIdx], this.heap[0] ];
    this.heap.pop();
    this.heap = this.siftDown(0, this.heap, this.heap.length - 1);
  }


  swap(idx1, idx2) {
    if (idx1 === idx2) {
      return;
    }
    [ this.heap[idx1], this.heap[idx2] ] = [ this.heap[idx2], this.heap[idx1] ];
    if (idx1 > idx2) {
      this.heap = this.siftDown(idx1, this.heap, this.heap.length - 1);
      this.heap = this.siftUp(idx1, this.heap);
      this.heap = this.siftDown(idx2, this.heap, this.heap.length - 1);
      this.heap = this.siftUp(idx2, this.heap);
    } else {
      this.heap = this.siftDown(idx2, this.heap, this.heap.length - 1);
      this.heap = this.siftUp(idx2, this.heap);
      this.heap = this.siftDown(idx1, this.heap, this.heap.length - 1);
      this.heap = this.siftUp(idx1, this.heap);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heap = this.siftUp(this.heap.length - 1, this.heap);
  }
}
