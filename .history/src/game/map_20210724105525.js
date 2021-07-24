import {gameRow, gameCol} from './config'
export const map = []
//init map
export function initMap() {
    for (let i = 0; i < gameRow; i++) {
        map[i] = []
        for (let j = 0; j < gameCol; j++) {
            map[i][j] = 0
        }
    }
}
