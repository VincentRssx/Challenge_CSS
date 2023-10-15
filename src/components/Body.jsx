import { useState } from "react"

function Body (){
const museumArray = [
    {name : "Museum 1", imgSrc : "https://images.pexels.com/photos/69903/pexels-photo-69903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
{name : "Museum 2", imgSrc : "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
{name : "Museum 3", imgSrc :"https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
]

const [Musée,setMusée] = useState(1);

const HandleClick = (museumTableau) => {
setMusée(museumTableau)
}

    return(
<body>
    <section>
<div>
    {museumArray.map((museumTableau) =>{
        return(
    <button onClick={() => HandleClick(museumTableau)}>{museumTableau.name}</button>

    )})}
    </div>
        <ul>
        <li><p>{Musée.name}</p>
        <img className="imageMusé" src={Musée.imgSrc}/> </li>
    </ul>
    
    </section>
</body>
    )
}

export default Body