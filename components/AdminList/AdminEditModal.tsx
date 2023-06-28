import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Stack, Button, Select, TextInput, ActionIcon } from "@mantine/core";

import { useForm } from "@mantine/form";
import { IconPencil } from "@tabler/icons-react";

export const AdminEditModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      surname: "",
      name: "",
      patronymic: "",
      email: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  });

  return (
    <>
      <Modal opened={opened} onClose={close}>
        <form onSubmit={form.onSubmit(() => ({}))}>
          <Stack>
            <TextInput
              required
              label="Имя"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
            />
            <TextInput
              required
              label="Фамилия "
              value={form.values.surname}
              onChange={(event) =>
                form.setFieldValue("surname", event.currentTarget.value)
              }
              radius="md"
            />
            <TextInput
              required
              label="Отчество"
              value={form.values.patronymic}
              onChange={(event) =>
                form.setFieldValue("patronymic", event.currentTarget.value)
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
            <Select
              required
              label="Выберите роль"
              data={["Администратор"]}
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
          </Stack>

          <Group position="apart" mt="xl" className="justify-center">
            <Button type="submit" radius="md" variant="outline">
              Подтвердить
            </Button>
          </Group>
        </form>
      </Modal>
      <ActionIcon color="yellow" variant="outline" radius="xs" onClick={open}>
        <IconPencil size="1rem" stroke={1.5} />
      </ActionIcon>
    </>
  );
};
