import { useEffect } from "react";

const Box = () => {

    useEffect (() => 
       () => console.log("O componente acabou de ser demonstrado")
    , []);

    return (
        <div>
            <h1>Essa box foi executada </h1>
        </div>

    )
}

export default Box;