import React from "react";
import "../style/SignUp.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const SignUp = () => {
  //APIからのレスポンスを受け取り、受け取ったステータスコードによって状況を伝える
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
        alert("登録完了");
        break;
    }
  };

  //APIのURL
  const BASE_URL = "http://api-for-missions-and-railways.herokuapp.com/users";

  //react hook formの
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, //フォームを空にする
  } = useForm({
    mode: "onSubmit", // バリデーションが実行されるタイミング
    defaultValues: {
      // 初回レンダリング時のフォームのデフォルト値
      name: "",
      email: "",
      password: "",
    },
  });

  const SignUp = async (data) => {
    const json = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const res = await fetch(BASE_URL, {
      method: "POST",
      //headersで"content-type":"application/json"を指定
      headers: { "Content-Type": "application/json" },
      //bodyにjsonオブジェクトをJSON文字列化して指定
      body: JSON.stringify(json),
    });
    console.log(JSON.stringify(json));
    reset();
    return handleError(res);
  };

  return (
    <div className="sign_in">
      <form className="form" onSubmit={handleSubmit(SignUp)}>
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
            {...register("name", { required: true })}
          />
          {errors.name && "名前が入力されていません"}
          <TextField
            fullWidth={true}
            id="email"
            label="email"
            variant="standard"
            type="email"
            {...register("email", {
              required: true,
              pattern:
                /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/,
            })}
          />
          {errors.email && "example@gmail.comの形式で入力してください"}
          <TextField
            fullWidth={true}
            id="password"
            label="password"
            variant="standard"
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && "パスワードは6文字以上です"}
        </Box>
        <Stack spacing={2} direction="row">
          <Button type="submit" variant="contained">
            ユーザー作成
          </Button>
        </Stack>
      </form>

      <p>これはサインアップコンポーネントです</p>
      <Link to="/login">ログイン</Link>
    </div>
  );
};
