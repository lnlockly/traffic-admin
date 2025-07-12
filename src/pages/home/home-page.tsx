import { AppText } from "@/ui/app-text";

import { TEXT } from "@/shared/constants/text";

export const HomePage = () => {
  return (
    <main>
      <AppText>{TEXT.home.title}</AppText>
    </main>
  );
};
