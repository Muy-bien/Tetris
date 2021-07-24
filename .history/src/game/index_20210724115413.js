export * from './config.js'
export {map} from './map.js'
import {initMap , map} from './map.js'
import {render} from './render'

initMap()

const box = {
    shape: [[1,1],[1,1]]
} 

window.addEventListener("keydoen",(e) => {
    if (e.code === 'ArrowDown') {
        console.log('down');
    }
})

render(box, map)