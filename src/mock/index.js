/* import gryffindorMock from "./gryffindorCharacters.json";

const mock = {
  gryffindor: gryffindorMock,
};

export function houseMock(house) {
  const houseMockData = mock[house];
  return Promise.resolve(houseMockData || {});
} */

import StudentsCharacters from "./studentsCharacters";
import StaffCharacters from "./staffCharacters";
import Spells from "./spells";

export { StudentsCharacters, StaffCharacters, Spells };
