import type { FC } from "react";
import {
  BooleanInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";

import { TASK_FIELDS_lABELS } from "../const";

export const TaskEdit: FC = () => {
  return (
    <Edit
      transform={(data) => ({
        chatId: data.chatId,
        reward: data.reward,
        checkAfterHours: data.checkAfterHours,
        isActive: data.isActive,
      })}
    >
      <SimpleForm>
        <TextInput source="chatId" label={TASK_FIELDS_lABELS.CHAT_ID} />
        <NumberInput source="reward" label={TASK_FIELDS_lABELS.REWARD} />
        <NumberInput
          source="checkAfterHours"
          label={TASK_FIELDS_lABELS.CHECK_AFTER_HOURS}
        />
        <BooleanInput source="isActive" label={TASK_FIELDS_lABELS.IS_ACTIVE} />
      </SimpleForm>
    </Edit>
  );
};
