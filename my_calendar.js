// binary tree
var MyCalendar = function() {
    this.root = null;
};

var Node = function(start, end) {
    this.start = start;
    this.end = end;
    this.left = null;
    this.right = null;
};

Node.prototype.append = function(node) {
    if (node.start >= this.end) {
        if (this.right === null) {
            this.right = node;
            return true;
        }
        return this.right.append(node);
    } else if (node.end <= this.start) {
        if (this.left === null) {
            this.left = node;
            return true;
        }
        return this.left.append(node);
    } else {
        return false;
    }
};

// brute force
// var MyCalendar = function() {
//     this.calendar = [];
// };

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */

// binary tree
MyCalendar.prototype.book = function(start, end) {
   let node = new Node(start, end);
    if (this.root === null) {
        this.root = node;
        return true;
    } else {
        return this.root.append(node);
    }
};

// brute force
// MyCalendar.prototype.book = function(start, end) {
//     if (this.calendar.length === 0) {
//         this.calendar.push([start, end]);
//         return true;
//     }

//     for (let i=0; i < this.calendar.length; i++) {
//         let s = this.calendar[i][0];
//         let e = this.calendar[i][1];
//         if (s <= start && start < e) {
//             return false;
//         } else if (s < end && end <= e) {
//             return false;
//         } else if (start < s && end >= e) {
//             return false;
//         } else if (start > s && end < e ) {
//             return false;
//         }
//     }

//     this.calendar.push([start, end])
//     return true;
// };

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */
