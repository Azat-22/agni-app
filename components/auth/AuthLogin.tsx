import { useToggle } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Anchor, Container, PasswordInput, PaperProps } from "@mantine/core";
import { TextInput, Title, Text } from "@mantine/core";
import { Group, Paper, Button } from "@mantine/core";
import { LoginDto } from "../../api/type";
import { UserApi } from "../../api/axios";
import { setCookie } from "nookies";
import { useAppDispath } from "../../api/redux/hooks";
import { setUserData } from "../../api/redux/slices/user";
import { useRouter } from "next/router";
import Link from "next/link";

export const AuthLogin = (props: PaperProps) => {
  const form = useForm({
    validateInputOnChange: false,
    initialValues: {
      username: "",
      rawPassword: "",
    },
    validate: {
      username: (value) => (value.length < 6 ? "Invalid name" : null),
      rawPassword: (val) => (val.length <= 8 ? "Invalid password" : null),
    },
  });

  const dispatch = useAppDispath();
  const router = useRouter();
  const loginOnSubmit = async (dto: LoginDto) => {
    try {
      const data = await UserApi.login(dto);
      setCookie(null, "loginToken", data.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      dispatch(setUserData(data));
      console.log(data);
      router.push("/");
    } catch (error) {
      alert("Ошибка при логине");
      console.warn("Login error", error);
    }
  };

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
        <form onSubmit={form.onSubmit(loginOnSubmit)}>
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

          <Group position="apart" mt="xl">
            <Anchor component="button" type="button" color="dimmed" size="xs">
              <Text>
                <Link href="/auth/register">
                  У вас нет аккаунта? Зарегистрируйтесь
                </Link>
              </Text>
            </Anchor>
            <Button type="submit" radius="md" variant="outline">
              Войти
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};
