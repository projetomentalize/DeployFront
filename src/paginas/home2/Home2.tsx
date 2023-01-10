import Divider from "@material-ui/core/Divider";
import React, { } from "react";
import NavbarExterna from "../../components/estaticos/navbarexterna/NavbarExterna";
import Contato from "../contato/Contato";
import Login from "../login/Login";
import SobreNos from "../sobreNos/SobreNos";
import './Home2.css'

function Home2() {
    return (
        <>
           <NavbarExterna />
            <Login/>          
              <SobreNos/>
              <Divider/>
              <Contato/>
        </>
    );
}
export default Home2;
