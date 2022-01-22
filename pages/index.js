import {PaginaCinco} from "../Componentes/page5.js"
import {PaginaSeis} from "../Componentes/page6.js"
export default function Home(){
    return(

        <div>
            <h1>Viva Santana!</h1>

            <PaginaCinco/>
            <PaginaSeis/>
        </div>
    )
}


const page3Func = require("../Componentes/page3")
const page4Func = require("../Componentes/page4")

page3Func();
page4Func();


//https://next-js-lyart-mu.vercel.app link do sistema na vercel
