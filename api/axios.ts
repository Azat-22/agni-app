import axios from "axios";
import {
  LoginDto,
  RegisterDto,
  ResponseLogin,
  ResponseUser,
} from "./type";

// const token = "loginToken";

const instance = axios.create({
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // },
  baseURL: "http://localhost:8080/api/v1/",
});

export const UserApi = {
  async register(dto: RegisterDto) {
    const { data } = await instance.post<RegisterDto, { data: ResponseUser }>(
      "auth/register",
      dto
    );
    return data;
  },
  async login(dto: LoginDto) {
    const { data } = await instance.post<LoginDto, { data: ResponseLogin }>(
      "auth/login",
      dto
    );
    return data;
  },
}