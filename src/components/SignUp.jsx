import React from "react";
import "../style/SignUp.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const SignUp = () => {
  const handleError = async (res) => {
    const resJson = await res.json();

    switch (resJson.ErrorCode) {
      case 400:
        alert(resJson.ErrorMessageJP);
        break;

      case 403:
        alert(resJson.ErrorMessageJP);
        break;

      case 403:
        alert(resJson.ErrorMessageJP);
        break;
      default:
        console.log(resJson.token);
        break;
    }
  };

  const BASE_URL = "http://api-for-missions-and-railways.herokuapp.com/users";
  const makeUser = async () => {
    //フォームの値を受け取る
    // const name = document.getElementById("name").value;
    // const email = document.getElementById("email").value;
    // const password = document.getElementById("password").value;
    // const json = { name: name, email: email, password: password };
    // const res = await fetch(BASE_URL, {
    //   method: "POST",
    //   //headersで"content-type":"application/json"を指定
    //   headers: { "Content-Type": "application/json" },
    //   //bodyにjsonオブジェクトをJSON文字列化して指定
    //   body: JSON.stringify(json),
    // });
    // return handleError(res);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const json = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
  };

  return (
    <div className="sign_in">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {/* <input
          id="name"
          type="text"
          placeholder="name"
          className="name_box"
          {...register("name")}
        />

        <input
          id="email"
          type="email"
          className="email_box"
          placeholder="email"
          {...register("email")}
        />

        <input
          id="password"
          type="password"
          placeholder="password"
          className="password_box"
          {...register("password", { required: true, minLength: 8 })}
        />

        {errors.password && "Password in valid"}
        <button type="submit" onClick={makeUser} className="btn">
          ユーザー作成
        </button> */}
        <Box
          component="form"
          sx={{
            m: 5,
            mx: "auto",
            width: "25ch",
          }}
        >
          <TextField
            fullWidth={true}
            id="name"
            label="name"
            variant="standard"
            type="text"
            {...register("name")}
          />
          <TextField
            fullWidth={true}
            id="email"
            label="email"
            variant="standard"
            type="email"
            {...register("email")}
          />
          <TextField
            fullWidth={true}
            id="password"
            label="password"
            variant="standard"
            type="password"
            {...register("password")}
          />
        </Box>
        <Stack spacing={2} direction="row">
          <Button type="submit" onClick={makeUser} variant="contained">
            ユーザー作成
          </Button>
        </Stack>
      </form>

      <p>これはサインアップコンポーネントです</p>
      <Link to="/login">ログイン</Link>
    </div>
  );
};
