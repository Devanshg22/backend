import fs from "fs/promises";
const asyncwriter =async()=>{
    try{
        await fs.writeFile("./dataasync.csv", "this is file async");
        console.log("file written successfully.(async)");
    }
    catch(error){
        console.log("unable to write file.(async)",error);

    }
 
}
const asyncreader =async()=>{
    try{
   const fileData=await fs.readFile("./dataasync.csv", "utf-8");
//    console.log(fileData);
return fileData;}
catch(error){
    console.log("unable to read file.(async)",error);
    // return null;
}
}
export default {asyncwriter,asyncreader};
// asyncwriter();
// const data=await asyncreader();
// console.log(data);