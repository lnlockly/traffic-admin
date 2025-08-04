import type { FC } from "react";
import {
  Create,
  FormDataConsumer,
  PasswordInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import type { FieldValues } from "react-hook-form";

import { ADMIN_FIELDS_lABELS, adminRoleChoices } from "../const";

const validateRepeatPassword = (value: string, allValues: FieldValues) => {
  if (!value) return "Повторите пароль";
  if (value !== allValues.password) {
    return "Пароли не совпадают";
  }
  return undefined;
};
export const AdminCreate: FC = ({ ...props }) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          required
          source="username"
          label={ADMIN_FIELDS_lABELS.USERNAME}
        />

        <PasswordInput
          required
          source="password"
          label={ADMIN_FIELDS_lABELS.PASSWORD}
        />
        <FormDataConsumer>
          {({ formData, ...rest }) => (
            <>
              <PasswordInput
                source="repeatedPassword"
                required
                label={ADMIN_FIELDS_lABELS.REPEATED_PASSWORD}
                validate={(value) => validateRepeatPassword(value, formData)}
                {...rest}
              />
            </>
          )}
        </FormDataConsumer>
        <SelectInput
          required
          source="role"
          choices={adminRoleChoices}
          label={ADMIN_FIELDS_lABELS.ROLE}
          defaultValue={adminRoleChoices[0].id}
        />
      </SimpleForm>
    </Create>
  );
};
