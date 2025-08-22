import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CategoryIcon from "@mui/icons-material/Category";
import CellTowerIcon from "@mui/icons-material/CellTower";
import PersonIcon from "@mui/icons-material/Person";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TaskIcon from "@mui/icons-material/Task";
import { deepmerge } from "@mui/utils";
import {
  Admin,
  CustomRoutes,
  Layout,
  Menu,
  Resource,
  ShowGuesser,
  defaultDarkTheme,
} from "react-admin";
import { Route } from "react-router-dom";

import { AdminCreate } from "@/pages/admin/adminCreate/adminCreate";
import { AdminEdit } from "@/pages/admin/adminEdit/adminEdit";
import { AdminList } from "@/pages/admin/adminList/adminList";
import { BroadcastPage } from "@/pages/broadcastPage/broadcastPage";
import { ConfigPage } from "@/pages/config/configPage";
import { GamesList } from "@/pages/games/gamesList/gamesList";
import { GamesShow } from "@/pages/games/gamesShow/gamesShow";
import { ItemViewCreate } from "@/pages/itemView/itemViewCreate/itemViewCreate";
import { ItemViewEdit } from "@/pages/itemView/itemViewEdit/itemViewEdit";
import { ItemViewList } from "@/pages/itemView/itemViewList/itemViewList";
import { MarketCellCreate } from "@/pages/marketCell/marketCellCreate/marketCellCreate";
import { MarketCellEdit } from "@/pages/marketCell/marketCellEdit/marketCellEdit";
import { MarketCellList } from "@/pages/marketCell/marketCellList/marketCellList";
import { PurchaseList } from "@/pages/purchase/purchaseList/purchaseList";
import { TaskCreate } from "@/pages/tasks/taskCreate/taskCreate";
import { TaskEdit } from "@/pages/tasks/taskEdit/taskEdit";
import { TaskList } from "@/pages/tasks/taskList/taskList";
import { TaskShow } from "@/pages/tasks/taskShow/taskShow";
import { TransactionList } from "@/pages/transaction/transactionList/transactionList";
import { UserEdit } from "@/pages/users/userEdit/userEdit";
import { UserList } from "@/pages/users/userList/userList";
import { UserShow } from "@/pages/users/userShow/userShow";
import { WithdrawalRequestList } from "@/pages/withdrawalRequests/withdrawalRequestList/withdrawalRequestList";
import { WithdrawalRequestShow } from "@/pages/withdrawalRequests/withdrawalRequestShow/withdrawalRequestShow";

import authProvider from "./authProvider";
import { dataProvider } from "./dataProvider";
import { i18nProvider } from "./i18nProvider";
import { useInitAdmin } from "./model/hooks/useInitAdminRole";
import { useAdminStore } from "@/entities/admin/model/store/admin.store";
import { ADMIN_ROLES } from "@/entities/admin/model/types/admin.type";

const theme = deepmerge(defaultDarkTheme, {
  components: {
    RaCreateButton: {
      styleOverrides: {
        root: {
          "&.RaCreateButton-floating": {
            display: "inline-flex",
            position: "relative",
            top: "auto",
            right: "auto",
            left: "auto",
            bottom: "auto",
            width: "22px",
            height: "22px",
            "min-height": "auto",
          },
        },
      },
    },
  },
});

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
      theme={theme}
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
        <>
          <Resource
            name="admins"
            list={AdminList}
            show={ShowGuesser}
            edit={AdminEdit}
            create={AdminCreate}
            options={{ label: "Админы" }}
            icon={AdminPanelSettingsIcon}
          />
          <Resource
            name="item-views"
            list={ItemViewList}
            create={ItemViewCreate}
            edit={ItemViewEdit}
            options={{ label: "Предметы" }}
            icon={CategoryIcon}
          />
          <Resource
            name="market-cells"
            list={MarketCellList}
            create={MarketCellCreate}
            edit={MarketCellEdit}
            options={{ label: "Рынок" }}
            icon={StorefrontIcon}
          />
          <Resource
            name="purchases"
            list={PurchaseList}
            options={{ label: "Покупки" }}
            icon={ShoppingCartIcon}
          />
          <Resource
            name="transactions"
            list={TransactionList}
            options={{ label: "Транзакции" }}
            icon={ShoppingCartIcon}
          />
        </>
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
      <Resource
        name="games"
        list={GamesList}
        show={GamesShow}
        options={{ label: "Игры" }}
        icon={SportsEsportsIcon}
      />
    </Admin>
  );
};

export default App;
