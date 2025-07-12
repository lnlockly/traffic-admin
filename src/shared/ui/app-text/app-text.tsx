import { type VariantProps, cva } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/model/utils";

import { HighlightText } from "@/shared/lib/high-light-text";

import {
  TEXT_SIZES,
  TEXT_VARIANTS,
  TEXT_VARIANTS_VARIABLES,
} from "./constants";
import { TAG } from "./model";

const textVariant = cva("", {
  variants: {
    variant: {
      default: TEXT_VARIANTS[TEXT_VARIANTS_VARIABLES.default],
      link: TEXT_VARIANTS[TEXT_VARIANTS_VARIABLES.link],
    },
    size: {
      default: TEXT_SIZES[TEXT_VARIANTS_VARIABLES.default],
    },
  },
  defaultVariants: {
    variant: TEXT_VARIANTS_VARIABLES.default,
    size: TEXT_VARIANTS_VARIABLES.default,
  },
});

type AppTextProps = HTMLAttributes<HTMLDivElement> & {
  highlight?: string | string[];
  classNameHighLight?: string;
  variant?: keyof typeof TEXT_VARIANTS_VARIABLES;
  size?: keyof typeof TEXT_VARIANTS_VARIABLES;
  tag?: TAG;
} & VariantProps<typeof textVariant> & {
    asChild?: boolean;
  };

export const AppText = ({
  children,
  className,
  classNameHighLight,
  highlight,
  variant,
  size,
  tag,
}: AppTextProps) => {
  return (
    <TextWrapper variant={variant} size={size} tag={tag} className={className}>
      <HighlightText highlight={highlight} className={classNameHighLight}>
        {children}
      </HighlightText>
    </TextWrapper>
  );
};

function TextWrapper({
  children,
  variant,
  size,
  className,
  tag = TAG.p,
}: AppTextProps) {
  const Tag = tag;

  return (
    <Tag className={cn(textVariant({ variant, size, className }))}>
      {children}
    </Tag>
  );
}
