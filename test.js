import * as fs from "fs";

const data = fs
  .readFileSync(`./ExerciseInputFiles/regex17.txt`, "utf-8")
  .trim()
  .split(/\r?\n/);

console.log(data);

const regex = new RegExp(/^foo$/);

const matchedNames = data.filter((entry) => entry.match(regex));

console.log(matchedNames);
