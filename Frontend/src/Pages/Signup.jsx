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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 border border-black">
      {" "}
      <div className="w-full max-w-md bg-white rounded-2xl  border border-black  p-8">
        {" "}
        <h1 className="text-3xl  text-black font-bold text-center mb-2">
          Create Account{" "}
        </h1>
        <p className="text-center text-gray-500 mb-8">Sign up to get started</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName")}
              className="w-full p-3 border border-black rounded-lg text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />

            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("emailId")}
              className="w-full p-3 border border-black  text-black placeholder:text-gray-500      focus:outline-none focus:ring-2 focus:ring-black"
            />

            {errors.emailId && (
              <p className="text-red-500 text-sm mt-1">
                {errors.emailId.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full p-3 border border-black  text-black placeholder:text-gray-500      focus:outline-none focus:ring-2 focus:ring-black"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Create Account
          </button>

          <p className="text-center text-sm  text-gray-500 mt-4">
            Already have an account?
            <button class="btn btn-active btn-primary ml-2 p-3">Login</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
