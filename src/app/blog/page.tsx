import { resolve } from "path"

export default async function Blog(){
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("initial delay")
        },2000);
    });
    return <h1>My Blog</h1>
}