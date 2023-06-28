export type RegisterDto = {
  username: string;
  email: string;
  rawPassword: string;
  roleName: string;
  lastName: string;
  firstName: string;
  patronymic: string;
  phoneNumber: string;
};
export type RegisterDeleteDto = {
  username: string;
};
export type LoginDto = {
  username: string;
  rawPassword: string;
};
export type ResponseUser = {
  id: string,
  username: string,
  email: string,
  profile: UserProfile,
  role: UserRole,
  phoneNumber: string,
  access_token: string,
};
export type ResponseUserDelete = {
  id:string;
  username: string;
};

export type UserProfile = {
  id: string;
  lastName: string;
  firstName: string;
  patronymic: string;
  phoneNumber: string;
};

export type UserRole = {
  id: string;
  name: string;
};

