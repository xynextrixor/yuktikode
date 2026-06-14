import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const signupSchema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters long"),
  emailId: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  min-h-screen gap-y-2  p-2 flex flex-col justify-center item-center center"
      >
        <input
          type="text"
          placeholder="Enter Your Firstname"
          {...register("firstName", { required: true })}
          className="border-2 border-green-300 p-2 rounded-md"
        />
        {errors.firstName && (
          <span className="text-red-500">{errors.firstName.message}</span>
        )}
        <input
          type="email"
          placeholder="Enter Your Email"
          {...register("emailId", { required: true })}
          className="border-2 border-green-300 p-2 rounded-md"
        />
        {errors.emailId && (
          <span className="text-red-500">{errors.emailId.message}</span>
        )}
        <input
          type="password"
          placeholder="Enter Your Password"
          {...register("password", { required: true })}
          className="border-2 border-green-300  p-2 rounded-md"
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}
        <button
          type="submit"
          className="btn btn-2xl bg-green-500 text-white hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Signup;

//  export default function Signup(){
//     const [name,setName] = useState("");
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     // const [repassword,setreenterPassword] = useState("");

// const handleSubmit   = (e)=>{

//     e.preventDefault();
// }
//     return(
//         <from onSubmit= {handleSubmit} className= "  min-h-screen gap-y-2  p-2 flex flex-col justify-center item-center">
//             <input type="text" value={name} placeholder="Enter Your Firstname" onChange={(e)=>setName(e.target.value)}> </input>
//             <input type="email" value={name} placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}> </input>
//             <input type="password" value={name} placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}> </input>
//             <button type="submit">Submit</button>

//         </from>
//     )
// }
