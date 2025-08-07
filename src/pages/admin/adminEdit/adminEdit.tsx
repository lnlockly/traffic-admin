import type { FC } from "react";
import {
  Edit,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

import { ADMIN_FIELDS_lABELS, adminRoleChoices } from "../const";

export const AdminEdit: FC = () => {
  return (
    <Edit
      transform={(data) => ({
        username: data.username,
        role: data.role,
        password: data.password,
        repeatPassword: data.repeatPassword,
      })}
    >
      <SimpleForm>
        <TextInput source="username" label={ADMIN_FIELDS_lABELS.USERNAME} />
        {/* <TextInput source="password" /> */}
        {/* <TextInput source="repeatPassword" /> */}
        <SelectInput
          source="role"
          choices={adminRoleChoices}
          validate={required()}
          label={ADMIN_FIELDS_lABELS.ROLE}
        />
      </SimpleForm>
    </Edit>
  );
};
