import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Stack, Button, Select, TextInput, ActionIcon } from "@mantine/core";

import { useForm } from "@mantine/form";
import { IconPencil } from "@tabler/icons-react";

export const TypeEditModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      typeName:""
    },
  });
  return (
    <>
      <Modal opened={opened} onClose={close}>
        <form onSubmit={form.onSubmit(() => ({}))}>
          <TextInput
            required
            label="Имя Типа"
            onChange={(event) =>
              form.setFieldValue("typeName", event.currentTarget.value)
            }
            radius="md"
          />
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
