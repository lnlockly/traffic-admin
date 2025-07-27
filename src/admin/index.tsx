import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CellTowerIcon from "@mui/icons-material/CellTower";
import PersonIcon from "@mui/icons-material/Person";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import SettingsIcon from "@mui/icons-material/Settings";
import TaskIcon from "@mui/icons-material/Task";
import {
  Admin,
  CustomRoutes,
  Layout,
  Menu,
  Resource,
  ShowGuesser,
} from "react-admin";
import { Route } from "react-router-dom";

import { BroadcastPage } from "@/pages/broadcastPage/broadcastPage";
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
import { TaskCreate } from "@/features/tasks/taskCreate/taskCreate";
import { TaskEdit } from "@/features/tasks/taskEdit/taskEdit";
import { TaskList } from "@/features/tasks/taskList/taskList";
import { TaskShow } from "@/features/tasks/taskShow/taskShow";
import { UserEdit } from "@/features/users/userEdit/userEdit";
import { UserList } from "@/features/users/userList/userList";
import { UserShow } from "@/features/users/userShow/userShow";
import { WithdrawalRequestList } from "@/features/withdrawalRequests/withdrawalRequestList/withdrawalRequestList";
import { WithdrawalRequestShow } from "@/features/withdrawalRequests/withdrawalRequestShow/withdrawalRequestShow";

const MyMenu = () => {
  const role = useAdminStore((state) => state.role);
  return (
    <Menu>
      <Menu.ResourceItems />
      {role === ADMIN_ROLES.SUPER_ADMIN && (
        <>
          <Menu.Item
            to="/config"
            primaryText="Конфигурация"
            leftIcon={<SettingsIcon />}
          />
          <Menu.Item
            to="/broadcast"
            primaryText="Рассылки"
            leftIcon={<CellTowerIcon />}
          />
        </>
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
        <Route path="/broadcast" element={<BroadcastPage />} />
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
        name="tasks"
        list={TaskList}
        show={TaskShow}
        edit={TaskEdit}
        create={TaskCreate}
        options={{ label: "Задания" }}
        icon={TaskIcon}
      />
      <Resource
        name="withdrawal-requests"
        list={WithdrawalRequestList}
        show={WithdrawalRequestShow}
        options={{ label: "Запросы на вывод" }}
        icon={RequestPageIcon}
      />
    </Admin>
  );
};

export default App;
