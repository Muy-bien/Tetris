
export function render(box, map) {
    // 清除之前的box
    for (let i = 0; i < gameRow; i++) {
        map[i] = []
        for (let j = 0; j < gameCol; j++) {
            if (map[i][j] > 0) {
                map[i][j] = 0
            }
        }
    }

    // render
    // 添加 box =》 map
    const row = box.shape.length
    const col = box.shape[0].length
    for(let i = 0;i < row;i++) {
        for(let j = 0;j < col;j++) {
            const x = box.x + j
            const y = box.y + i
            map[y][x] = 1
        }
    }
}
