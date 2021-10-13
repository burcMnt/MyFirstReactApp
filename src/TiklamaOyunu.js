import { useState } from "react";

function TiklamaOyunu(props){
    const [deger,setDeger] = useState(props.deger);

    return <button onClick={() => setDeger(deger-1)}>
        {deger}
    </button>;
}
export default TiklamaOyunu;