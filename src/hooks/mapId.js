import map from "../assets/dragontail-9.24.2/9.24.2/data/en_US/map.json";

export default function(mapId) {
  for (const key in map.data) {
    if (map.data[key].MapId === mapId.toString()) {
      return map.data[key].MapName;
    }
  }
  return "unidentified";
}
