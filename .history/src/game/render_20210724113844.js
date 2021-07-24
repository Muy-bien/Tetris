export function render(box, map) {
    const row = box.shape.length
    const col = box.shape[0].length
    for(let i = 0;i < row;i++) {
        for(let j = 0;j < col;j++) {
            map[i][j] = 1
        }
    }
}
