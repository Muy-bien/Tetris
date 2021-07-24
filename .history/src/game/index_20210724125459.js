export * from "./config.js";
export { map } from "./map.js";
import { initMap } from "./map.js";
import { render } from "./render";

export function startGame(map) {
  initMap(map);

  const box = {
    x: 0,
    y: 0,
    shape: [
      [1, 1],
      [1, 1],
    ],
  };

  window.addEventListener("keydown", (e) => {
    if (e.code === "ArrowDown") {
      box.y++;
      render(box, map);
    }
  });

  render(box, map);
}
