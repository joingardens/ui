import React, { HTMLAttributes } from 'react';
import classNames from '../../utils/classnames';
import LoadingDots from '../loading-dots/LoadingDots';


export const ButtonVariants = {
  intent: {
    PRIMARY: "primary",
    SECONDARY: "secondary"
  },
  disabled: {
    TRUE: true,
    FALSE: false
  },
  loading: {
    TRUE: true,
    FALSE: false
  }
} as const

export type ObjectValues<T> = T[keyof T]

export type VariantsToProps<T> = {
  [R in keyof T]: ObjectValues<T[R]>
}


export interface LowLevelButtonProps extends
  React.PropsWithChildren<VariantsToProps<typeof ButtonVariants>>,
  Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  keyof VariantsToProps<typeof ButtonVariants>> {
  style?: HTMLAttributes<HTMLButtonElement>["style"],
  /** Use for width */
  className?: string
}

export const Button: React.FC<LowLevelButtonProps> = (props) => {
  const {
    children,
    loading = false,
    disabled = false,
    style,
    intent,
    className,
    ...rest
  } = props;

  const isDisabled = loading ? loading : disabled

  return (
    <button
      className={
        classNames({
          "bg-primary enabled:hover:bg-primary-hover": intent === "primary",
          "bg-secondary enabled:hover:bg-secondary-hover": intent === "secondary"
        }, {
          "opacity-50": isDisabled,
          "cursor-not-allowed": disabled,
          "cursor-wait": loading
        },
          `inline-flex 
        transition-all
        duration-300
        px-10 
        rounded-sm 
        leading-6  
        shadow-sm font-semibold text-center 
        justify-center 
        uppercase 
        py-4 border  
        items-center`, className)
      }
      disabled={isDisabled}
      style={{
        ...style
      }}
      {...rest}
    >
      {!loading && children}
      {loading && (
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      )}
    </button>
  );
};

Button.displayName = "Button"

