import { type FC } from "react";
import { SimpleShowLayout, TextField } from "react-admin";

import { GAMES_FIELDS_LABELS } from "../../const";

export const GamesContent: FC = () => {
  return (
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="userId" label={GAMES_FIELDS_LABELS.USER_ID} />
      <TextField source="amount" label={GAMES_FIELDS_LABELS.AMOUNT} />
      <TextField source="multiplier" label={GAMES_FIELDS_LABELS.MULTIPLIER} />
      <TextField source="result" label={GAMES_FIELDS_LABELS.RESULT} />
    </SimpleShowLayout>
  );
};
