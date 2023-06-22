import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button, ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
export const AdminDeleteModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close}>
        <form onSubmit={() => ({})}>
          <div>Удалить?</div>

          <Group position="apart" mt="xl" className="justify-center">
            <Button type="submit" radius="md" variant="outline">
              Подтвердить
            </Button>
          </Group>
        </form>
      </Modal>
            <ActionIcon
              color="red"
              variant="outline"
              radius="xs"
              onClick={open}
            >
              <IconTrash size="1rem" stroke={1.5} />
            </ActionIcon>
    </>
  );
};
