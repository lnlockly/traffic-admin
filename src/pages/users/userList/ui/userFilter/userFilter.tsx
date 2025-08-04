import { TextInput } from "react-admin";

import { USERS_FIELDS_LABELS } from "@/pages/users/const";

export const UserFilter = [
  <TextInput source="id" label="id" />,
  <TextInput source="tgId" label={USERS_FIELDS_LABELS.TG_ID} />,
  <TextInput source="username" label={USERS_FIELDS_LABELS.USERNAME} />,
];
// export const UserFilter: FC = ({ ...props }) => {

//   return (
//     <Filter {...props}>

//     </Filter>
//   );
// };
