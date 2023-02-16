import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required("Username er påkrævet"),
    password: yup.string().required("Password er påkrævet"),
  })
  .required();

const LoginForm = ({ setShowLogin }) => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`${response.status} ${response.statusText}`);
        }
      })
      .then((data) => {
        console.log(data);
        setUser(data);
        setShowLogin(false);
      })
      .catch((err) => {
        setError("username", {
          type: "custom",
          message: "Ugyldige login oplysninger. Prøv igen...",
        });
        setError("password", {
          type: "custom",
          message: "Ugyldige login oplysninger. Prøv igen...",
        });
      });
  };

  const inputCss = "border-2 border-customGray rounded-xl pl-2 py-2";
  return (
    <>
      <section
        onClick={(e) => {
          if (e.target.tagName === "SECTION") {
            setShowLogin(false);
          }
        }}
        className="flex flex-col item-center justify-items-center fixed z-50 w-full h-full place-content-center place-items-center"
      >
        <form
          className="max-w-[50vh] h-fit flex flex-col mx-auto bg-white gap-4 py-12 px-8 rounded-2xl border-2 border-customGray drop-shadow-2xl z-60"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-normal m-auto mb-12">Login</h2>
          <input
            className={inputCss}
            label="username"
            placeholder="username"
            {...register("username")}
          />
          <input
            className={inputCss}
            label="password"
            placeholder="password"
            {...register("password")}
          />
          <div className="h-8">
            <p>{errors.username?.message}</p>
            <p>{errors.password?.message}</p>
          </div>
          <input
            className="border-2 border-customGray rounded-xl w-fit m-auto px-6 py-2 mt-12"
            type="submit"
          />
        </form>
      </section>
    </>
  );
};

export default LoginForm;
