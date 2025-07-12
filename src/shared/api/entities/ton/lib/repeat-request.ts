import { showErrorForDevelop } from "@/shared/lib/show-error-for-develop";

import { isFetchError } from "../../lib/is-fetch-error";

export const repeatRequest = async <T>(
  callback: () => Promise<T>,
  retries: number = 5,
  delay: number = 2000,
): Promise<T> => {
  try {
    const result = await callback();

    if (result instanceof Response && result.status === 429) {
      const error = new Error("Rate limit exceeded. Status: 429") as Error & {
        status?: number;
      };
      error.status = 429;
      throw error;
    }

    return result;
  } catch (error) {
    if (isFetchError(error) && error.status === 429 && retries > 0) {
      showErrorForDevelop("Rate limit exceeded, retrying...", error);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return repeatRequest(callback, retries - 1, delay);
    }

    showErrorForDevelop("Error fetching address:", error);
    throw error;
  }
};
