import PersonIcon from "@mui/icons-material/Person";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import { deepmerge } from "@mui/utils";
import { Admin, Layout, Menu, Resource, defaultDarkTheme } from "react-admin";

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
      {/* <Menu.ResourceItems />
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
      )} */}
    </Menu>
  );
};
const MyLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout menu={MyMenu}>{children}</Layout>
);
const App = () => {
  useInitAdmin();
  // const role = useAdminStore((state) => state.role);
  return (
    <Admin
      theme={theme}
      layout={MyLayout}
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
    >
      {/* <CustomRoutes>
        <Route path="/config" element={<ConfigPage />} />
      </CustomRoutes> */}

      {/* {role === ADMIN_ROLES.SUPER_ADMIN && (
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
      )} */}

      <Resource
        name="user"
        list={UserList}
        edit={UserEdit}
        show={UserShow}
        options={{ label: "Пользователи" }}
        icon={PersonIcon}
      />
      <Resource
        name="withdrawal"
        list={WithdrawalRequestList}
        show={WithdrawalRequestShow}
        options={{ label: "Запросы на вывод" }}
        icon={RequestPageIcon}
      />
      {/* <Resource
        name="tasks"
        list={TaskList}
        show={TaskShow}
        edit={TaskEdit}
        create={TaskCreate}
        options={{ label: "Задания" }}
        icon={TaskIcon}
      />
      
      <Resource
        name="games"
        list={GamesList}
        show={GamesShow}
        options={{ label: "Игры" }}
        icon={SportsEsportsIcon}
      /> */}
    </Admin>
  );
};

export default App;
