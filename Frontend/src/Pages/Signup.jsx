 import { useEffect } from "react"
 export default function Signup(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    // const [repassword,setreenterPassword] = useState("");


const handleSubmit   = (e)=>{

    e.preventDefault();
}
    return(
        <from onSubmit= {handleSubmit} className= "  min-h-screen gap-y-2  p-2 flex flex-col justify-center item-center">
            <input type="text" value={name} placeholder="Enter Your Firstname" onChange={(e)=>setName(e.target.value)}> </input>
            <input type="email" value={name} placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}> </input>
            <input type="password" value={name} placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}> </input>
            <button type="submit">Submit</button>


        </from>
    )
}           