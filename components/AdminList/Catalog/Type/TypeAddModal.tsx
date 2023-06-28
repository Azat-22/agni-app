import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Group,
  Button,
  TextInput,
  ActionIcon,
} from "@mantine/core";

import { useForm } from "@mantine/form";
import { IconPlus } from "@tabler/icons-react";
import { useAppDispath } from "@/api/redux/hooks";
import { UserApi } from "@/api/axios";
import { TypeDto } from "@/api/catalogType";

import { setTypeAddData } from "@/api/redux/slices/type";

export const TypeAddModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    validateInputOnChange: false,
    initialValues: {
      typeName: "",
    },
  });
  const dispatch = useAppDispath();
  const addOnSubmit = async (dto: TypeDto) => {
    try {
      const data = await UserApi.createType(dto);
      dispatch(setTypeAddData(data));
      console.log(form.values);
    } catch (error) {
      alert("Не удалось добавить бренд");
      console.warn("Brand error", error);
    }
  };
  return (
    <>
      <Modal opened={opened} onClose={close}>
        <form onSubmit={form.onSubmit(addOnSubmit)}>
          <TextInput
            required
            label="Тип"
            onChange={(event) =>
              form.setFieldValue("typeName", event.currentTarget.value)
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
