import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Group,
  Button,
  Select,
  TextInput,
  ActionIcon,
  PasswordInput,
} from "@mantine/core";

import { useForm } from "@mantine/form";
import { IconPlus } from "@tabler/icons-react";
import { RegisterDto } from "@/api/type";
import { useAppDispath } from "@/api/redux/hooks";
import { UserApi } from "@/api/axios";
import { setAddData } from "@/api/redux/slices/adminusers";

export const AdminAddModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
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
  const addOnSubmit = async (dto: RegisterDto) => {
    try {
      const data = await UserApi.createUser(dto);
      dispatch(setAddData(data));
      console.log(form.values);
    } catch (error) {
      alert("Ошибка при регистрации");
      console.warn("Register error", error);
    }
  };
  const roles = ["Администратор", "Преподаватель", "Студент", "Модератор"];
  return (
    <>
      <Modal opened={opened} onClose={close}>
        <form onSubmit={form.onSubmit(addOnSubmit)}>
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
          <Group position="center" mt="xl">
            <Button type="submit" radius="md" variant="outline">
              Добавить
            </Button>
          </Group>
        </form>
      </Modal>
      <ActionIcon color="green" variant="outline" radius="xs" onClick={open}>
        <IconPlus size="1rem" stroke={1.5} />
      </ActionIcon>
    </>
  );
};
