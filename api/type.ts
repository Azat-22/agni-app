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
export type LoginDto = {
  username: string;
  rawPassword: string;
};
export type ResponseLogin = {
  id: string;
  username: string;
  profile: UserProfile;
  role: UserRole;
  access_token: string;
};

export type UserProfile = {
  lastName: string;
  firstName: string;
  patronymic: string;
};
export type ResponseUser = {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  lastName: string;
  firstName: string;
  patronymic: string;
  phoneNumber: string;
  access_token: string;
};

export type UserRole = {
  id: string;
  name: string;
};
export type UserGroup = {
  id: string;
  name: string;
};

