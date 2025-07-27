import { type FC, useState } from "react";
import {
  ResourceContextProvider,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
  useNotify,
} from "react-admin";

import { useSendBroadcastToAllUsers } from "@/api/entities/notifications/hooks/useSendBroadcastToAllUsers";

export const BroadcastPage: FC = () => {
  const { mutate: sendBroadcastToAllUsers } = useSendBroadcastToAllUsers();
  const [submitting, setSubmitting] = useState(false);
  const notify = useNotify();
  const onChangeText = () => {
    setSubmitting(false);
  };

  const onHandleSubmit = async (values: any) => {
    if (submitting) return;
    setSubmitting(true);

    try {
      sendBroadcastToAllUsers(values);
      notify("Рассылка начата", { type: "success" });
    } catch {
      notify("Ошибка, попробуйте снова", { type: "error" });
      setSubmitting(false);
    }
  };

  const CustomToolbar = (
    <Toolbar>
      <SaveButton label="Отправить" disabled={submitting} />
    </Toolbar>
  );

  return (
    <ResourceContextProvider value="notifications">
      <SimpleForm onSubmit={onHandleSubmit} toolbar={CustomToolbar}>
        <TextInput
          source="message"
          label="Сообщение"
          required
          onChange={onChangeText}
        />
        <TextInput
          source="buttonText"
          label="Текст у кнопки"
          onChange={onChangeText}
        />
      </SimpleForm>
    </ResourceContextProvider>
  );
};
