import { useToggle } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Anchor, Container, PasswordInput, PaperProps } from "@mantine/core";
import { Select, Stack, TextInput, Title, Text } from "@mantine/core";
import { Group, Paper, Button } from "@mantine/core";
import { LoginDto, RegisterDto } from "../../api/type";
import { UserApi } from "../../api/axios";
import { setCookie } from "nookies";
import { useAppDispath } from "../../api/redux/hooks";
import { setUserData } from "../../api/redux/slices/user";
import { useRouter } from "next/router";
import Link from "next/link";

export const AuthRegister = (props: PaperProps) => {
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
  const router = useRouter();
  const dispatch = useAppDispath();
  const registerOnSubmit = async (dto: RegisterDto) => {
    try {
      const data = await UserApi.register(dto);
      console.log(form.values);
      router.push("/auth/login");
    } catch (error) {
      alert("Ошибка при регистрации");
      console.warn("Register error", error);
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
        <form onSubmit={form.onSubmit(registerOnSubmit)}>
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
          <TextInput
            required
            label="Имя"
            onChange={(event) =>
              form.setFieldValue("lastName", event.currentTarget.value)
            }
            radius="md"
          />
          <TextInput
            required
            label="Фамилия"
            onChange={(event) =>
              form.setFieldValue("firstName", event.currentTarget.value)
            }
            radius="md"
          />
          <TextInput
            required
            label="Отчество"
            onChange={(event) =>
              form.setFieldValue("patronymic", event.currentTarget.value)
            }
            radius="md"
          />

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
          <TextInput
            required
            label="Номер телефона"
            onChange={(event) =>
              form.setFieldValue("phoneNumber", event.currentTarget.value)
            }
            radius="md"
          />
          <Group position="apart" mt="xl">
            <Anchor component="button" type="button" color="dimmed" size="xs">
              <Text>
                <Link href="/auth/login">У вас уже есть аккаунт? Войдите</Link>
              </Text>
            </Anchor>
            <Button type="submit" radius="md" variant="outline">
              Регистрация
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};
