import rw from "./fileasync.js";
import asyncRW from "./fileasync.js";
asyncRW.asyncwriter();
const data = await asyncRW.asyncreader();
console.log(data);