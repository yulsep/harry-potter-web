import gryffindorMock from "./gryffindor.json";
import hufflepuffMock from "./hufflepuff.json";
import ravenclawMock from "./ravenclaw.json";
import slyterinMock from "./slytherin.json";


const mock = {
   gryffindor: gryffindorMock,
   hufflepuff: hufflepuffMock,
   ravenclaw: ravenclawMock,
   slytherin: slyterinMock
};

export function houseMock(house) {
   const houseData = mock[house];
   return Promise.resolve(houseData || {});
}