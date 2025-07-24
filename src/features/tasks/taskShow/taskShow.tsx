import type { FC } from "react";
import { BooleanField, Show, SimpleShowLayout, TextField } from "react-admin";

import { TASK_FIELDS_lABELS } from "../const";

export const TaskShow: FC = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="chatId" label={TASK_FIELDS_lABELS.CHAT_ID} />
        <TextField source="reward" label={TASK_FIELDS_lABELS.REWARD} />
        <TextField
          source="checkAfterHours"
          label={TASK_FIELDS_lABELS.CHECK_AFTER_HOURS}
        />
        <TextField
          source="turnOffAfter"
          label={TASK_FIELDS_lABELS.TURN_OFF_AFTER}
        />
        <BooleanField source="isActive" label={TASK_FIELDS_lABELS.IS_ACTIVE} />
      </SimpleShowLayout>
    </Show>
  );
};
