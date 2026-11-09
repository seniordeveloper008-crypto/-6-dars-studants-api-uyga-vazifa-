import path from "path";
import { readFile, writeFile } from "fs/promises";
import { log } from "console";

const getFileName = (fileName) =>
  path.join(process.cwd(), `/src/data/${fileName}`);

async function getData(fileName) {
  try {
    const users = await readFile(getFileName(fileName), "utf8");
    return JSON.parse(users);
  } catch (err) {
    console.log(`Error is on getData function error :${err.message}`);
  }
}
async function setData(data, fileName) {
  try {
    await writeFile(getFileName(fileName), JSON.stringify(data, null, 2));
  } catch (err) {
    console.log(`Error is on getData function error:${err.message}`);
  }
}

export{
    getData,setData
}
