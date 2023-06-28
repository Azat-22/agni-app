import axios from "axios";
import { LoginDto, RegisterDeleteDto, RegisterDto, ResponseUser } from "./type";
import { BrandDto, ResponseBrand, TypeDto, ResponseType } from "./catalogType";

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
    const { data } = await instance.post<LoginDto, { data: ResponseUser }>(
      "auth/login",
      dto
    );
    return data;
  },

  async userMe(access_token: string) {
    const { data } = await instance.get<ResponseUser>(`users/me`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return data;
  },
  async users(access_token: string) {
    const { data } = await instance.get<ResponseUser[]>(`users`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return data;
  },
  async createUser(dto: RegisterDto) {
    const { data } = await instance.post<RegisterDto, { data: ResponseUser }>(
      `users/createUser`,
      dto
    );
    return data;
  },
  async deleteUser(id: string) {
    const { data } = await instance.delete(`users/${id}`);
    return data;
  },
  async createBrand(dto: BrandDto) {
    const { data } = await instance.post<BrandDto, { data: ResponseBrand }>(
      `brands/create`,
      dto
    );
    return data;
  },
  async brands(access_token: string) {
    const { data } = await instance.get<ResponseBrand[]>(`brands`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return data;
  },
  async deleteBrand(id: string) {
    const { data } = await instance.delete(`brands/${id}`);
    return data;
  },
  async createType(dto: TypeDto) {
    const { data } = await instance.post<TypeDto, { data: ResponseType }>(
      `types/create`,
      dto
    );
    return data;
  },
  async types(access_token: string) {
    const { data } = await instance.get<ResponseType[]>(`types`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return data;
  },
  async deleteType(id: string) {
    const { data } = await instance.delete(`types/${id}`);
    return data;
  },
};
