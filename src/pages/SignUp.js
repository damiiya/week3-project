import React, { useState } from "react";
import styled from "styled-components";
import { signupFB } from "../reduxSlices/user.js";

const SignUp = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [user_name, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd_check, setPwdCheck] = useState("");

  const signup = () => {
    if (pwd !== pwd_check) {
      window.alert("비밀번호가 일치하지 않습니다!");
    }

    if (!emailCheck) {
      window.alert("이메일 형식이 맞지 않습니다!");
    }

    dispatch(signUpFB(id, pwd, user_name));
  };

  return (
    <>
      <h1>SIGN UP</h1>
      <h4>WELCOME!!!!</h4>
      <SignUpCard>
        <Label>ID</Label>
        <Input
          value={id}
          type="email"
          placeholder="아이디를 입력해주세요!"
          _onChange={(e) => {
            id_ref(e.target.value);
          }}
        />
        <Label>NICNAME</Label>
        <Input
          value={user_name}
          type="text"
          placeholder="이름을 입력해주세요!"
          _onChange={(e) => {
            name_ref(e.target.value);
          }}
        />
        <Label>PASSWORD</Label>
        <Input
          value={pwd}
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          _onChange={(e) => {
            pw_ref(e.target.value);
          }}
        />
        <Label>PASSWORD CHECK</Label>
        <Input
          value={pwd_check}
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요!"
          _onChange={(e) => {
            pwch_ref(e.target.value);
          }}
        />
        <button>LOGIN</button>
      </SignUpCard>
    </>
  );
};

const SignUpCard = styled.div`
  width: 80%;
  margin: 20px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid #e4e4e4;
  width: 800px;
  height: 36px;
  margin-bottom: 5px;
  border-radius: 5px;
  font-size: 14px;
  color: #000;
  font-weight: 500;
  padding: 0 10px;
  font-size: 0.5em;
`;

const Label = styled.label`
  color: #aaa;
  font-weight: 500;
  padding-left: 10px;
  margin-bottom: 5px;
`;

export default SignUp;
