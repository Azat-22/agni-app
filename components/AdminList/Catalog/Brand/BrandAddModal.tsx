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
import { BrandDto } from "@/api/catalogType";
import { setBrandAddData } from "@/api/redux/slices/brand";

export const BrandAddModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    validateInputOnChange: false,
    initialValues: {
      brandName: "",
    },
  });
  const dispatch = useAppDispath();
  const addOnSubmit = async (dto: BrandDto) => {
    try {
      const data = await UserApi.createBrand(dto);
      dispatch(setBrandAddData(data));
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
            label="Бренд"
            onChange={(event) =>
              form.setFieldValue("brandName", event.currentTarget.value)
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
