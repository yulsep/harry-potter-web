import gryffindorMock from "./gryffindor.json";

const mock = {
  gryffindor: gryffindorMock,
};

export function houseMock(house) {
  const houseMockData = mock[house];
  return Promise.resolve(houseMockData || {});
}
