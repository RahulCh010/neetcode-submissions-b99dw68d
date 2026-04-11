class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = new Map();
        const rows = new Map();
        const squares = new Map();

        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9; c++) {
                const cur = board[r][c];

                if(cur === ".") continue;

                const sKey = `${Math.floor(r/3)},${Math.floor(c/3)}`;

                if((rows.get(r) && rows.get(r).has(cur)) ||
                   (cols.get(c) && cols.get(c).has(cur)) || 
                   (squares.get(sKey) && squares.get(sKey).has(cur))) {
                    return false;
                }

                if(!rows.has(r)) {
                    rows.set(r, new Set());
                }
                if(!cols.has(c)) {
                    cols.set(c, new Set());
                }
                if(!squares.has(sKey)) {
                    squares.set(sKey, new Set());
                }

                rows.get(r).add(cur);
                cols.get(c).add(cur);
                squares.get(sKey).add(cur);
            }
        }

        console.log(rows);
        console.log(cols);
        console.log(squares);

        return true;
    }
}
