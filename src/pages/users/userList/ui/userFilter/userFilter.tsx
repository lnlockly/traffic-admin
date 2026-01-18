import { BooleanInput, TextInput } from "react-admin";

import { USERS_FIELDS_LABELS } from "@/pages/users/const";

export const UserFilter = [
  <TextInput source="username" label={USERS_FIELDS_LABELS.USERNAME} />,
  <TextInput source="email" label={USERS_FIELDS_LABELS.EMAIL} />,
  <BooleanInput
    source="subscriptionIsActive"
    label={USERS_FIELDS_LABELS.SUBSCRIPTION_IS_ACTIVE}
  />,
];
// export const UserFilter: FC = ({ ...props }) => {

//   return (
//     <Filter {...props}>

//     </Filter>
//   );
// };
