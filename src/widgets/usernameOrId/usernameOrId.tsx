import type { FC } from "react";
import { FunctionField, ReferenceField } from "react-admin";

export const UsernameOrId: FC = () => {
  return (
    <ReferenceField source="userId" reference="user">
      <FunctionField
        render={(record) =>
          record.username ? `@${record.username}` : `${record.tgId}`
        }
      />
    </ReferenceField>
  );
};
