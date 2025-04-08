import fs from "fs";

const syncwriter=()=>fs.writeFileSync("./data.csv", "this is file sync");
const syncreader=()=>{
fs.writeFileSync("./data.csv", "this is file sync moddified.");
const fileData = fs.readFileSync("./data.csv", "utf-8");
console.log(fileData);}

const syncappender=()=>fs.appendFileSync("./data.csv", "\nthis is line 2");
// fs.appendFileSync("./data.csv", "\nthis is line 2");

export default {syncwriter, syncreader, syncappender};
syncwriter();
syncreader();
syncappender();
// fs.unlinkSync("./data.csv");