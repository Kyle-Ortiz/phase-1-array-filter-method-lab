// Code your solution here
function findMatching(driveArray, string) {
  const matches = driveArray.filter((name) => {
    if (name == string.toLowerCase()) {
      return name;
    } else {
      return name == string;
    }
  });
  return matches;
}
function fuzzyMatch(driveArray, string) {
  const startMatches = driveArray.filter((name) => {
    return name.startsWith(string);
  });
  return startMatches;
}
function matchName(driveObject, string) {
  const matchObject = driveObject.filter((name, index) => {
    return driveObject[index]["name"] == string;
  });
  return matchObject;
}
