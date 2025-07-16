import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Admin,
  CustomRoutes,
  Layout,
  Menu,
  Resource,
  ShowGuesser,
} from "react-admin";
import { Route } from "react-router-dom";

import { ConfigPage } from "@/pages/config/configPage";

import authProvider from "./authProvider";
import { dataProvider } from "./dataProvider";
import { i18nProvider } from "./i18nProvider";
import { useInitAdmin } from "./model/hooks/useInitAdminRole";
import { useAdminStore } from "@/entities/admin/model/store/admin.store";
import { ADMIN_ROLES } from "@/entities/admin/model/types/admin.type";
import { AdminCreate } from "@/features/admins/adminCreate/adminCreate";
import { AdminEdit } from "@/features/admins/adminEdit/adminEdit";
import { AdminList } from "@/features/admins/adminList/adminList";
import { UserEdit } from "@/features/users/userEdit/userEdit";
import { UserList } from "@/features/users/userList/userList";
import { UserShow } from "@/features/users/userShow/userShow";
import { WithdrawalRequestEdit } from "@/features/withdrawalRequests/withdrawalRequestEdit/withdrawalRequestEdit";
import { WithdrawalRequestList } from "@/features/withdrawalRequests/withdrawalRequestList/withdrawalRequestList";
import { WithdrawalRequestShow } from "@/features/withdrawalRequests/withdrawalRequestShow/withdrawalRequestShow";

const MyMenu = () => {
  const role = useAdminStore((state) => state.role);
  return (
    <Menu>
      <Menu.ResourceItems />
      {role === ADMIN_ROLES.SUPER_ADMIN && (
        <Menu.Item
          to="/config"
          primaryText="Конфигурация"
          leftIcon={<SettingsIcon />}
        />
      )}
    </Menu>
  );
};
const MyLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout menu={MyMenu}>{children}</Layout>
);
const App = () => {
  useInitAdmin();
  const role = useAdminStore((state) => state.role);
  return (
    <Admin
      layout={MyLayout}
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
    >
      <CustomRoutes>
        <Route path="/config" element={<ConfigPage />} />
      </CustomRoutes>

      {role === ADMIN_ROLES.SUPER_ADMIN && (
        <Resource
          name="admins"
          list={AdminList}
          show={ShowGuesser}
          edit={AdminEdit}
          create={AdminCreate}
          options={{ label: "Админы" }}
          icon={AdminPanelSettingsIcon}
        />
      )}

      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        show={UserShow}
        options={{ label: "Пользователи" }}
        icon={PersonIcon}
      />
      <Resource
        name="withdrawal-requests"
        list={WithdrawalRequestList}
        edit={WithdrawalRequestEdit}
        show={WithdrawalRequestShow}
        options={{ label: "Запросы на вывод" }}
        icon={RequestPageIcon}
      />
    </Admin>
  );
};

export default App;
