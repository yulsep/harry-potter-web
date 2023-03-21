import { API } from "../api";
import { houseMock } from "../mock";
import { BASE_URL } from "../utils";

export async function fetchHousesByName(houseName = "") {

    const houseData = await houseMock(houseName);
    console.log(houseData)
    return houseData;

}
