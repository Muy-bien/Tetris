export * from './config.js'
export {map} from './map.js'
import {initMap , map} from './map.js'
import {render} from './render'

initMap()

const box = {
    shape: [[1,1],[1,1]]
} 

render(box, map)