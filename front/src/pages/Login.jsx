import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userRedux";
import axios from "axios";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Sign = styled.span`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email: email,
        password: password,
      };

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        body
      );
      if (res.data.success) {
        console.log(res.data);
        localStorage.setItem("token", res.data.accessToken);
        dispatch(login(res.data));
        navigate("/");
      }
    } catch (e) {}
  };

  return (
    <Container>
      <Wrapper>
        <Title>로그인</Title>
        <Form>
          <Input
            placeholder="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <Button onClick={handleLogin}>로그인</Button>

          <Sign onClick={handleClick}>가입하기</Sign>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
