import React from "react";
import "../style/SignUp.css";

export const SignUp = () => {
  // const handleError = async (res) => {
  //   const resJson = await res.json();

  //   switch (resJson.ErrorCode) {
  //     case 400:
  //       alert(resJson.ErrorMessageJP);
  //       break;

  //     case 403:
  //       alert(resJson.ErrorMessageJP);
  //       break;

  //     case 403:
  //       alert(resJson.ErrorMessageJP);
  //       break;
  //     default:
  //       console.log(resJson.token);
  //       break;
  //   }
  // };

  const BASE_URL =
    "http://localhost:3000/api-for-missions-and-railways.herokuapp.com/users";
  const makeUser = () => {
    //フォームの値を受け取る
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const json = { name: name, email: email, password: password };
    const res = fetch(BASE_URL, {
      method: "POST",
      //bodyにjsonオブジェクトをJSON文字列化して指定
      body: JSON.stringify(json),
      //headersで"content-type":"application/json"を指定
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);
  };

  return (
    <>
      <input type="text" placeholder="name" id="name" />
      <input type="text" placeholder="email" id="email" />
      <input type="text" placeholder="password" id="password" />
      <button type="submit" onClick={makeUser}>
        ユーザー作成
      </button>
      <h1>これはサインアップコンポーネントです</h1>
    </>
  );
};
