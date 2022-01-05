import React from "react";
import "../style/Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
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

  const BASE_URL = "http://api-for-missions-and-railways.herokuapp.com/signin";

  const loginUser = async () => {
    //フォームの値を受け取る
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    //受け取った値をjsonオブジェクトに変換
    const json = { email: email, password: password };

    const res = await fetch(BASE_URL, {
      method: "POST",
      //headersで"content-type":"application/json"を指定
      headers: { "Content-Type": "application/json" },
      //bodyにjsonオブジェクトをJSON文字列化して指定
      body: JSON.stringify(json),
    });
    return handleError(res);
  };

  return (
    <div className="login">
      <form className="form">
        <input
          id="email"
          type="email"
          placeholder="email"
          className="email_box"
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          className="email_box"
        />
        <button className="btn" onClick={loginUser}>
          ログイン
        </button>
      </form>

      <h1>これはログインコンポーネントです</h1>
      <Link to="/signup">sign in</Link>
    </div>
  );
};
