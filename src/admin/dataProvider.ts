import type { AxiosError } from "axios";
import type { DataProvider } from "react-admin";

import apiInstance from "@/api/axiosInstance";

import { ITEM_TYPE } from "@/entities/itemView/model/type/itemView.type";

function extractErrorMessage(error: AxiosError<{ message: string }>): string {
  const raw = error?.response?.data?.message || error?.message;

  if (Array.isArray(raw)) {
    return raw.join("\n"); // каждый элемент с новой строки
  }

  if (typeof raw === "string") {
    return raw;
  }

  return "Произошла неизвестная ошибка";
}

function withErrorHandler<T>(fn: () => Promise<T>): Promise<T> {
  return fn().catch((error) => {
    throw new Error(extractErrorMessage(error));
  });
}

export const dataProvider: DataProvider = {
  getList: (resource, params) =>
    withErrorHandler(async () => {
      const { page = 1, perPage = 10 } = params.pagination || {};

      let response;
      if (resource === "user") {
        response = await apiInstance.get(`/${resource}/pagination`, {
          params: {
            page,
            limit: perPage,

            username: params.filter?.username,
            email: params.filter?.email,
            subscriptionIsActive: params.filter?.subscriptionIsActive,
          },
        });
      } else if (resource === "purchases") {
        response = await apiInstance.get(`/${resource}/pagination`, {
          params: {
            page,
            limit: perPage,
            id: params.filter?.id,
            tgId: params.filter?.tgId,
            username: params.filter?.username,
            marketCellId: params.filter?.marketCellId,
            itemName: params.filter?.itemName,
          },
        });
      } else if (resource === "transactions") {
        response = await apiInstance.get(`/${resource}/pagination`, {
          params: {
            page,
            limit: perPage,
            id: params.filter?.id,
            toUsername: params.filter?.toUsername,
            toUserTgId: params.filter?.toUserTgId,
            fromUsername: params.filter?.fromUsername,
            fromUserTgId: params.filter?.fromUserTgId,
            type: params.filter?.type,
            status: params.filter?.status,
          },
        });
      } else if (resource === "withdrawal") {
        response = await apiInstance.get(`/${resource}/pagination`, {
          params: {
            page,
            limit: perPage,
            id: params.filter?.id,
            username: params.filter?.username,
            status: params.filter?.status,
          },
        });
      } else if (resource === "games") {
        const { field = "createdAt", order = "DESC" } = params.sort || {};
        response = await apiInstance.get(`/${resource}/pagination`, {
          params: {
            page,
            limit: perPage,
            id: params.filter?.id,
            tgId: params.filter?.tgId,
            username: params.filter?.username,
            sortField: field,
            sortOrder: order,
          },
        });
      } else {
        response = await apiInstance.get(`/${resource}/pagination`, {
          params: {
            page,
            limit: perPage,
          },
        });
      }

      return {
        data: response.data.data.data,
        total: response.data.total,
      };
    }),

  getOne: (resource, params) =>
    withErrorHandler(async () => {
      let response;
      if (resource === "user") {
        response = await apiInstance.get(`/${resource}/by-id/${params.id}`);
      } else if (resource === "market-cells") {
        response = await apiInstance.get(`/${resource}/${params.id}/for-admin`);
      } else {
        response = await apiInstance.get(`/${resource}/${params.id}`);
      }

      return { data: response.data.data };
    }),

  update: (resource, params) =>
    withErrorHandler(async () => {
      const { id, data } = params;
      let response;
      if (resource === "item-views") {
        const formData = new FormData();

        const data = params.data;

        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("type", data.type);
        formData.append("rarity", data.rarity);

        // Если есть новый файл, отправляем img
        if (data.img && data.img.rawFile instanceof File) {
          formData.append("img", data.img.rawFile);
        }

        // Кейс с атрибутами
        if (data.type === ITEM_TYPE.CASE) {
          formData.append("attributes", JSON.stringify(data.attributes));
        }

        response = await apiInstance.put(`/${resource}/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        response = await apiInstance.put(`/${resource}/${id}`, data);
      }

      return { data: response.data };
    }),

  create: (resource, params) =>
    withErrorHandler(async () => {
      let response;
      if (resource === "item-views") {
        const formData = new FormData();

        const data = params.data;

        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("type", data.type);
        formData.append("rarity", data.rarity);
        formData.append("img", data.img.rawFile);

        // Кейс с атрибутами
        if (data.type === ITEM_TYPE.CASE && Array.isArray(data.items)) {
          const itemsWithChances = data.itemsWithChances.map((item: any) => ({
            itemViewId: item.itemViewId,
            chance: parseFloat(item.chance),
          }));

          const attributes = { itemsWithChances };
          formData.append("attributes", JSON.stringify(attributes));
        }

        response = await apiInstance.post(`/${resource}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        response = await apiInstance.post(`/${resource}`, params.data);
      }

      return { data: response.data };
    }),

  getMany: (resource, params) =>
    withErrorHandler(async () => {
      const { ids } = params;

      const response = await apiInstance.get(`/${resource}/many`, {
        params: { ids },
      });
      return { data: response.data.data };
    }),
  getManyReference: (resource, params) =>
    withErrorHandler(async () => {
      const { target, id } = params;
      const { page = 1, perPage = 10 } = params.pagination || {};
      // const { sort = {} } = params;
      // const filter = params.filter || {};

      let response;
      if (resource === "task-answers") {
        //берем только userId для фильтра
        const userId =
          Array.isArray(id) && id.length > 0 && typeof id[0] === "object"
            ? id[0][target]
            : id;
        response = await apiInstance.get(`/${resource}/pagination`, {
          params: {
            page,
            limit: perPage,
            // sort: sort.field,
            // order: sort.order,
            // ...filter,
            [target]: userId,
          },
        });
      } else {
        response = await apiInstance.get(`/${resource}/pagination`, {
          params: {
            page,
            limit: perPage,
          },
        });
      }

      return {
        data: response.data.data.data,
        total: response.data.total,
      };
    }),

  updateMany: () => Promise.reject("Not implemented"),
  delete: (resource, params) =>
    withErrorHandler(async () => {
      const { id } = params;
      const response = await apiInstance.delete(`/${resource}/${id}`);

      return { data: response.data };
    }),
  deleteMany: (resource, params) =>
    withErrorHandler(async () => {
      const { ids } = params; // массив id для удаления
      await apiInstance.delete(`/${resource}`, { data: { ids } });
      return { data: ids }; // возвращаем удалённые id
    }),
};
