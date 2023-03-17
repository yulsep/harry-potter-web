import { API } from "../api";
import { houseMock } from "../mock";
import { BASE_URL } from "../utils";

export async function fetchHousesByName(houseName = "") {
  try {
    /* const houseData = await API.get(`${BASE_URL}characters/house/${houseName}`); */
    const houseData = await houseMock(houseName);
    return houseData;
  } catch (error) {
    throw new Error(`Problems to get ${houseName} data...`);
  }
}
