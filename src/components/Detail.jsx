import { useParams } from "react-router-dom"
import arr from "./warehouses"
import { useState } from "react";
export default function Detail(){

    const {id}=useParams();
    const [obj,setObj]=useState(arr.filter((ele,idx)=>{
        console.log(ele.name + " "+ id)
        return ele.name==id;
    }))
    console.log(obj);
    return(<div style={{background:"#d1dcde", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div style={{background:"#f0f4f5",padding:"5vw", borderRadius:"20px" }}>
            
                        <h1 style={{marginBottom:"5vh"}}>Name: <input style={{fontSize:"1.5rem"}} type="text" value={obj[0].name}></input></h1>
                        <h2>Code: <input style={{fontSize:"1rem"}} type="text" value={obj[0].code}></input></h2>
                        <h2>ID: <input style={{fontSize:"1rem"}} type="text" value={obj[0].id}></input></h2>
                        <h2>City: <input style={{fontSize:"1rem"}} type="text" value={obj[0].city}></input></h2>
                        <h2>Space Available: <input style={{fontSize:"1rem"}} type="text" value={obj[0].space_available}></input></h2>
                        <h2>Type: <input style={{fontSize:"1rem"}} type="text" value={obj[0].type}></input></h2>
                        <h2>Cluster: <input style={{fontSize:"1rem"}} type="text" value={obj[0].cluster}></input></h2>
                        <h2>Is Registered: <input style={{fontSize:"1rem"}} type="text" value={obj[0].is_registered}></input></h2>
                        <h2>Is Live: <input style={{fontSize:"1rem"}} type="text" value={obj[0].is_live}></input></h2>
        </div>
    </div>)
}