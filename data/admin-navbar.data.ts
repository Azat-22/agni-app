import {
    Icon2fa,
    IconBellRinging,
    IconDatabaseImport,
    IconFingerprint,
    IconKey,
    IconReceipt2, 
} from "@tabler/icons-react";

export const data = [
  { link: "/(admin)/dashboard", label: "Главная", icon: IconBellRinging },
  {
    link: "/(admin)/admins",
    label: "Управление администрацией",
    icon: IconReceipt2,
  },
  {
    link: "/(admin)/teachers",
    label: "Управление преподавателями",
    icon: IconFingerprint,
  },
  {
    link: "/(admin)/students",
    label: "Управление студентами",
    icon: IconKey,
  },
  { link: "", label: "Управление каталогом", icon: IconDatabaseImport },
  { link: "", label: "Управление новостным блогом", icon: Icon2fa },
  
];