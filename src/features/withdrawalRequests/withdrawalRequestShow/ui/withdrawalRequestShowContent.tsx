import { Button, Card, CardContent, Typography } from "@mui/material";
import type { FC } from "react";
import {
  ReferenceField,
  SelectField,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from "react-admin";

import { useChangeStatus } from "@/api/entities/withdrawalRequests";

import {
  WITHDRAWAL_REQUESTS_FIELDS_LABELS,
  withdrawalRequestChoices,
} from "../../const";

import { useAdminStore } from "@/entities/admin/model/store/admin.store";
import { WITHDRAW_STATUS } from "@/entities/withdrawalRequest/model/types/withdrawalRequest.type";

export const WithdrawalRequestShowContent: FC = () => {
  const record = useRecordContext();
  const { mutate: changeStatus } = useChangeStatus();

  const isInProgress = record?.status === WITHDRAW_STATUS.IN_PROGRESS;
  const isFinished =
    record?.status === WITHDRAW_STATUS.CONFIRMED ||
    record?.status === WITHDRAW_STATUS.CANCELED;
  const isTakenByAdminId = record?.takenByAdminId;
  const adminId = useAdminStore((state) => state.adminId);

  const takenByAnother = isTakenByAdminId && isTakenByAdminId !== adminId;
  const onHandleClick = (status: WITHDRAW_STATUS) => {
    if (!record) return null;
    changeStatus({
      id: record.id.toString(),
      status,
    });
  };
  return (
    <>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField
          source="userId"
          label={WITHDRAWAL_REQUESTS_FIELDS_LABELS.USER_ID}
        />
        <TextField
          source="gameUserId"
          label={WITHDRAWAL_REQUESTS_FIELDS_LABELS.GAME_USER_ID}
        />
        <TextField
          source="amount"
          label={WITHDRAWAL_REQUESTS_FIELDS_LABELS.AMOUNT}
        />
        <SelectField
          source="status"
          choices={withdrawalRequestChoices}
          label={WITHDRAWAL_REQUESTS_FIELDS_LABELS.STATUS}
        />
        <ReferenceField
          source="takenByAdminId"
          reference="admins"
          label={WITHDRAWAL_REQUESTS_FIELDS_LABELS.TAKEN_BY_ADMIN_ID}
        >
          <TextField source="username" />
        </ReferenceField>

        {/* <UserTaskAnswersList /> */}
      </SimpleShowLayout>
      <Card sx={{ mt: 2 }}>
        {isFinished && (
          <CardContent>
            <Typography color="primary" fontWeight="bold">
              Заявка завершена
            </Typography>
          </CardContent>
        )}
        {!isFinished && (
          <>
            <CardContent>
              {takenByAnother && (
                <Typography color="warning" fontWeight="bold">
                  Другой админ уже взял в работу
                </Typography>
              )}
            </CardContent>

            <CardContent
              sx={{
                display: takenByAnother ? "none" : "flex",

                gap: 2,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  onHandleClick(
                    isTakenByAdminId === adminId
                      ? WITHDRAW_STATUS.PENDING
                      : WITHDRAW_STATUS.IN_PROGRESS,
                  )
                }
              >
                {isInProgress ? "Отказаться" : "Взять в работу"}
              </Button>
              <Button
                variant="contained"
                color="success"
                disabled={isTakenByAdminId !== adminId || !isInProgress}
                onClick={() => onHandleClick(WITHDRAW_STATUS.CONFIRMED)}
              >
                Подтвердить
              </Button>
              <Button
                variant="contained"
                color="error"
                disabled={isTakenByAdminId !== adminId || !isInProgress}
                onClick={() => onHandleClick(WITHDRAW_STATUS.CANCELED)}
              >
                Отказать
              </Button>
            </CardContent>
          </>
        )}
      </Card>
    </>
  );
};
