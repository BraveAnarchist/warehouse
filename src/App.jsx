import { useState } from "react";
import "./App.css";
import arr from "./components/warehouses";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Body from "./components/Body";

function App() {
  const [search, setSearch] = useState("");
  const [clus, setClus] = useState(null);
  const [cit, setValueCit] = useState('');
  const [spa,setSpa] = useState("");

  const [tmp,setTmp]=useState([...arr]);
  
  const names = arr.map((ele) => {
    return ele.name;
  });
  let list2 =arr.map((ele)=>{return ele.cluster})
  list2=new Set([...list2]);
  let clusters=[];
  for(let a of list2){
    clusters.push(a);
  }

  let list4 =arr.map((ele)=>{return ele.city})
  list4=new Set([...list4]);
  let cities=[];
  for(let a of list4){
    cities.push(a);
  }


  function handleChangeSearch(val,e){
    if(e.length>1){
      let tmp2=arr.filter((ele)=>{
        return ele.name.startsWith(e);
      })
      setTmp([...tmp2]);
    }
    
    setSearch(e);
  }
  function handleChangeClus(e){
    if(e.target.value.length>1){
      let tmp2=arr.filter((ele)=>{
        return ele.cluster.startsWith(e.target.value);
      })
      setTmp([...tmp2]);
    }
    setClus(e.target.value);
  }
  function handleChangeCit(val){
    if(val.target.value.length>1){
      let tmp2=arr.filter((ele)=>{
        return ele.city.startsWith(val.target.value);
      })
      setTmp([...tmp2]);
    }
    setValueCit(val.target.value);
  }
  function handleChangeSpa(val){
    if(val.target.value.length>1){
      let tmp2=arr.filter((ele)=>{
        return ele.space_available>val.target.value;
      })
      setTmp([...tmp2]);
    }
    setSpa(val.target.value);
  }

  return (
    <>
      <Box component="section" sx={{ p: 2 ,display:"flex",justifyContent:"center",gap:"4vw"}}>
        <Autocomplete
          disablePortal
          options={names}
          sx={{ width: 300 }}
          value={search} // Controlled value
          onChange={(val,e)=>handleChangeSearch(val,e)} // Handle value change
          renderInput={(params) => <TextField  {...params} label="Search" />}
        />
        <FormControl >
          <InputLabel id="demo-simple-select-label" >Cluster</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={clus}
            label="Cluster"
            onChange={(e)=>handleChangeClus(e)}
            sx={{width:"10vw"}}
          >
            {clusters.map((ele,idx)=>{return <MenuItem value={ele} key={idx}>{ele}</MenuItem>})}
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel id="demo-simple-select-label2">City</InputLabel>
          <Select
            labelId="demo-simple-select-label2"
            id="demo-simple-select2"
            value={cit}
            label="City"
            onChange={(e)=>handleChangeCit(e)}
            sx={{width:"10vw"}}
          >
            {cities.map((ele,idx)=>{return <MenuItem value={ele} key={idx}>{ele}</MenuItem>})}
          </Select>
        </FormControl>
        <TextField id="standard-basic" label="Space Available" variant="standard"
      value={spa}  onChange={(e)=>handleChangeSpa(e)}/>
      </Box>
      <Body search={search} city={cit} cluster={clus} space={spa} arr={tmp}/>
    </>
  );
}

export default App;
