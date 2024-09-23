import { BrowserRouter,Routes, Route} from "react-router-dom";
import Outlet from "./OutletWare.jsx"
import App from "./App.jsx"
import Detail from "./components/Detail.jsx";

export default function Home(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    <Route index element={<App/>}></Route>
                    <Route path=":id" element={<Detail/>} ></Route>
                </Route>
                <Route/>
            </Routes>
        </BrowserRouter>
    )
}