import { useToggle } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Anchor, Container, PasswordInput, PaperProps } from "@mantine/core";
import { Select, Stack, TextInput, Title } from "@mantine/core";
import { Group, Paper, Button } from "@mantine/core";
import { LoginDto, RegisterDto } from "../../api/type";
import { UserApi } from "../../api/axios";
import { setCookie } from "nookies";
import { useAppDispath } from "../../api/redux/hooks";
import { setLoginData, setUserData } from "../../api/redux/slices/user";
import { useRouter } from "next/router";

export const Auth = (props: PaperProps) => {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({

    validateInputOnChange: false,
    initialValues: {
      email: "",
      username: "",
      rawPassword: "",
      roleName: "",
      lastName: "",
      firstName: "",
      patronymic: "",
      phoneNumber: "",
    },
    validate: {
      username: (value) => (value.length < 6 ? "Invalid name" : null),
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      rawPassword: (val) => (val.length <= 8 ? "Invalid password" : null),
    },
  });

  const dispatch = useAppDispath();
  const registerOnSubmit = async (dto: RegisterDto) => {
    try {
      const data = await UserApi.register(dto);
      dispatch(setUserData(data));
      console.log(data);
      console.log(form.values)
    } catch (error) {
      alert("Ошибка при регистрации");
      console.warn("Register error", error);
    }
  };
 const router = useRouter();
  const loginOnSubmit = async (dto: LoginDto) => {
    try {
      const data = await UserApi.login(dto);
      setCookie(null, "loginToken", data.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      dispatch(setLoginData(data));
      console.log(data);
      router.push("/");
    } catch (error) {
      alert("Ошибка при логине");
      console.warn("Login error", error);
    }
  };

  const roles = ["Администратор", "Преподаватель", "Студент", "Модератор"];

  return (
    <Container size={420} my={40} ml="xl">
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
          marginBottom: "20px",
        })}
      >
        Добро пожаловать
      </Title>

      <Paper radius="md" p="xl" withBorder {...props}>
        <form
          onSubmit={form.onSubmit(
            type === "register" ? registerOnSubmit : loginOnSubmit
          )}
        >
          <Stack>
            <TextInput
              required
              label="Никнейм"
              value={form.values.username}
              onChange={(event) =>
                form.setFieldValue("username", event.currentTarget.value)
              }
              error={
                form.errors.username &&
                "Никнейм должен состоять как минимум из 6 букв"
              }
              radius="md"
            />
            {type === "register" && (
              <TextInput
                required
                label="Электронная почта"
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                }
                error={form.errors.email && "Неверный адрес электронной почты"}
                radius="md"
              />
            )}
            {type === "register" && (
              <TextInput
                required
                label="Имя"
                onChange={(event) =>
                  form.setFieldValue("lastName", event.currentTarget.value)
                }
                radius="md"
              />
            )}
            {type === "register" && (
              <TextInput
                required
                label="Фамилия"
                onChange={(event) =>
                  form.setFieldValue("firstName", event.currentTarget.value)
                }
                radius="md"
              />
            )}
            {type === "register" && (
              <TextInput
                required
                label="Отчество"
                onChange={(event) =>
                  form.setFieldValue("patronymic", event.currentTarget.value)
                }
                radius="md"
              />
            )}
            {type === "register" && (
              <Select
                required
                label="Выберите роль"
                value={form.values.roleName}
                onChange={(event) => {
                  form.setFieldValue("roleName", event as string);
                }}
                data={roles}
                styles={(theme) => ({
                  item: {
                    "&[data-selected]": {
                      "&, &:hover": {
                        backgroundColor:
                          theme.colorScheme === "dark"
                            ? theme.colors.teal[9]
                            : theme.colors.teal[1],
                        color:
                          theme.colorScheme === "dark"
                            ? theme.white
                            : theme.colors.teal[9],
                      },
                    },

                    "&[data-hovered]": {},
                  },
                })}
              />
            )}

            <PasswordInput
              required
              label="Пароль"
              value={form.values.rawPassword}
              onChange={(event) =>
                form.setFieldValue("rawPassword", event.currentTarget.value)
              }
              error={
                form.errors.rawPassword &&
                "Пароль должен содержать не менее 8 символов"
              }
              radius="md"
            />
            {type === "register" && (
              <TextInput
                required
                label="Номер телефона"
                onChange={(event) =>
                  form.setFieldValue("phoneNumber", event.currentTarget.value)
                }
                radius="md"
              />
            )}
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "У вас уже есть аккаунт? Войдите"
                : "У вас нет аккаунта? Зарегистрируйтесь"}
            </Anchor>
            <Button type="submit" radius="md" variant="outline">
              {type === "register" ? "Регистрация" : "Войти"}
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};
