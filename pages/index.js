import {PaginaCinco} from "../componentes/page5.js"
import {PaginaSeis} from "../componentes/page6.js"
export default function Home(){
    return(

        <div>
            <h1>Viva Santana!</h1>

            <PaginaCinco/>
            <PaginaSeis/>
        </div>
    )
}


const page3Func = require("../componentes/page3")
const page4Func = require("../componentes/page4")

page3Func();
page4Func();


//https://next-js-lyart-mu.vercel.app link do sistema na vercel
