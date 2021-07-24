export * from './config'
import {gameRow, gameCol} from './config'

export const map = []
//init map
for (let i in gameRow) {
    map[i] = []
    for (let j in gameCol) {
        map[i][j] = 0
    }
}
console.log(map);