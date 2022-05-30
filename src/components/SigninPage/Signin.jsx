import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Signin.module.css";
import { useMutation } from "@apollo/client";
import { AUTHORIZATION } from "../graphql/mutations/authorization";

const Signin = ({ setToken }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [userData] = useMutation(AUTHORIZATION);

  const onSubmit = ({ username, password }) => {
    userData({
      variables: {
        input: {
          username,
          password,
        },
      },
    }).then(({ data }) => {
      localStorage.setItem("token", data.login.token);
      setToken(localStorage.getItem("token"));
    });
  };

  return (
    <div className={styles.signin}>
      <div className={styles.content}>
        <div className={styles.title}>Вход</div>

        <div className={styles.description}>
          Уникальная технология доступная для вашего бизнеса уже сейчас!
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Логин"
            {...register("username", {
              required: "Поле обязательно к заполнению",
            })}
          />

          <div className={styles.error}>
            {errors?.username && (
              <div>{errors?.username?.message || "error"}</div>
            )}
          </div>

          <input
            placeholder="Пароль"
            {...register("password", {
              required: "Поле обязательно к заполнению",
            })}
          />

          <div className={styles.error}>
            {errors?.password && (
              <div>{errors?.password?.message || "error"}</div>
            )}
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Signin;
