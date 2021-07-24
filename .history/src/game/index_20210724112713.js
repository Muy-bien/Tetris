export * from './config.js'
export {map} from './map.js'
import {initMap , map} from './map.js'

initMap()

const box = {
    shape = [[1,1],[1,1]]
} 
const row = box.shape.length
const col = box.shape[0].length
for(let i = 0;i < row;i++) {
    for(let j = 0;i < col;j++) {
        map[i][j] = 1
    }
}