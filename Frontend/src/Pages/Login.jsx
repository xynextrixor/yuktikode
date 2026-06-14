import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  emailId: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {" "}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {" "}
        <h1 className="text-3xl  text-black font-bold text-center mb-2">
          Login{" "}
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Sign in to your account
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Email Address"
              {...register("emailId")}
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
              className="w-full p-3 border border-gray-300 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
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
            Login
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?
            <span className="text-black font-semibold cursor-pointer ml-1">
              Signup
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
