"use client";
import { createPortal } from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useUser from "@/context/user/useUser";
type Inputs = {
  email: string;
  password: string;
};
const Modal = ({ onClose }: any) => {
  let router = useRouter();
  const { state, setUser, removeUser } = useUser() as any;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(state);
    if (
      data.email === "mahsa.social.mail@gmail.com" &&
      data.password === "123456789"
    ) {
      // Set User and Send him to /
      setUser({ email: data.email });
      router.push("/");
      alert("Login successful");
    } else {
      // Show alert instead of console.log
      alert("Wrong password or username");
    }
  };

  return createPortal(
    <div className="items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 justify-center">
      <span
        onClick={() => onClose()}
        className="w-full h-full bg-slate-500 bg-opacity-75"
      ></span>
      <div className=" w-[400px] bg-white fixed  z-1 rounded-lg py-10 px-6">
        <div className="flex flex-col px-5 gap-4 justify-center">
          <Image
            className="h-10 w-10"
            src="/img/cat3.webp"
            alt="Picture of cat"
            width={50}
            height={50}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-sm font-semibold " htmlFor="loginemail">
                Email
              </label>
              <input
                id="loginemail"
                className="h-10 border px-2 w-full rounded  mt-1"
                placeholder="you@exmaple.com"
                {...register("email", {
                  required: "your email is required",
                  minLength: {
                    value: 4,
                    message: "Your email is too short",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm  ">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mt-5">
              <label
                className="text-sm font-semibold  "
                htmlFor="loginpassword"
              >
                Password
              </label>
              <input
                id="loginpassword"
                className="h-10 border px-2 w-full rounded mb-1 mt-1"
                placeholder="*****"
                type={"password"}
                {...register("password", {
                  required: "your password is required",
                  minLength: {
                    value: 8,
                    message: "Your password is too short",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm ">
                  {errors.password.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="mt-5 w-full bg-blue-600  text-md text-semibold text-white px-2 py-2 rounded-md"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
