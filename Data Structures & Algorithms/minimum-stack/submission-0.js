class MinStack {
    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop();
    }

    /**
     * @return {number}
     */
    top() {
        let arrLen = this.arr.length;
        if(arrLen < 1) return 0;

        return this.arr[arrLen - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.arr);
    }
}
