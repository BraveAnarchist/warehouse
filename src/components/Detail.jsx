import { useParams } from "react-router-dom"
import arr from "./warehouses"
import { useDispatch, useSelector } from "react-redux";
import { UPDATE } from "../slice";
import { useState } from "react";
export default function Detail(){

    const dispatch = useDispatch();
    const initState = useSelector((state) => {
    return state.house;
  });

    const {id}=useParams();
    const [obj,setObj]=useState(initState.array.filter((ele,idx)=>{
        
        return ele.name==id;
    }))

    function hadleChange(e){
        dispatch(UPDATE({id:id,e}))
    }
    console.log("this "+initState.array.filter((ele)=>{if(ele.id==id) return ele})[0].name)
    
    return(<div style={{background:"#d1dcde", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        
        <div style={{background:"#f0f4f5",padding:"5vw", borderRadius:"20px" }}>
            
                        <h1 style={{marginBottom:"5vh"}}>Name: <input style={{fontSize:"1.5rem"}} type="text" name="name" onChange={(e)=>hadleChange(e)} value={(initState.array.filter((ele)=>{if(ele.id==id) return ele})[0].name)} ></input></h1>
                        <h2>Code: <input style={{fontSize:"1rem"}} name="code" type="text" onChange={(e)=>hadleChange(e)} value={(initState.array.filter((ele)=>{if(ele.id==id) return ele})[0].code)}></input></h2>
                        <h2>City: <input style={{fontSize:"1rem"}} name="city" type="text" onChange={(e)=>hadleChange(e)} value={(initState.array.filter((ele)=>{if(ele.id==id) return ele})[0].city)}></input></h2>
                        <h2>Space Available: <input style={{fontSize:"1rem"}} name="space_available" type="text" onChange={(e)=>hadleChange(e)} value={(initState.array.filter((ele)=>{if(ele.id==id) return ele})[0].space_available)}></input></h2>
                        <h2>Type: <input style={{fontSize:"1rem"}} name="type" type="text" onChange={(e)=>hadleChange(e)} value={(initState.array.filter((ele)=>{if(ele.id==id) return ele})[0].type)}></input></h2>
                        <h2>Cluster: <input style={{fontSize:"1rem"}} name="cluster" type="text" onChange={(e)=>hadleChange(e)} value={(initState.array.filter((ele)=>{if(ele.id==id) return ele})[0].cluster)}></input></h2>
                        <h2>Is Registered: <input style={{fontSize:"1rem"}} name="is_registered" type="text" onChange={(e)=>hadleChange(e)} value={(initState.array.filter((ele)=>{if(ele.id==id) return ele})[0].is_registered)}></input></h2>
                        <h2>Is Live: <input style={{fontSize:"1rem"}} name="is_live" type="text" onChange={(e)=>hadleChange(e)} value={(initState.array.filter((ele)=>{if(ele.id==id) return ele})[0].is_live)}></input></h2>
        </div>
    </div>)
}