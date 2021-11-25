import React,{useState, useEffect} from "react"
function About(){
    const [listed, setList] = useState([])
    useEffect(() => {
        let mounted = true;
        async function doStuff(){
            await fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json())
            .then(items =>{
                if(mounted){
                    setList(items)
                }
            })
        }
        doStuff()
        return () => mounted = false;
    },[])
    return(
        <div>
            <ol>
                {listed.map(item => <li key = {item.id}> {item.title} </li>)}
            </ol>
        </div> 
    )
}

export default About
