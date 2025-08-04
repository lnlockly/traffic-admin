import type { FC } from "react";
import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

import { TASK_FIELDS_lABELS } from "../const";

export const TaskCreate: FC = ({ ...props }) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="chatId" label={TASK_FIELDS_lABELS.CHAT_ID} />
        <NumberInput source="reward" label={TASK_FIELDS_lABELS.REWARD} />
        <NumberInput
          source="checkAfterHours"
          label={TASK_FIELDS_lABELS.CHECK_AFTER_HOURS}
        />
        <NumberInput
          source="turnOffAfter"
          label={TASK_FIELDS_lABELS.TURN_OFF_AFTER}
        />
      </SimpleForm>
    </Create>
  );
};
