export * from './config'
import {gameRow, gameCol} from './config'
import { gameCol } from '../../.history/src/game/config_20210724094732';

export const map = []

for (let i in gameRow) {
    map[i] = []
    for (let j in gameCol) {
        map[i][j] = 0
    }
}