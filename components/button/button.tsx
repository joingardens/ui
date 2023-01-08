import React, { forwardRef, HTMLAttributes, useRef } from 'react';
import classNames from '../../utils/classnames';
import { mergeRefs } from '../../utils/mergeRefs';
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


export interface LowLevelButtonProps extends React.PropsWithChildren<any>, VariantsToProps<typeof ButtonVariants> {
  style?: HTMLAttributes<HTMLButtonElement>["style"],
  /** Use for width */
  className?: string
}

const Button = forwardRef<unknown, LowLevelButtonProps>((props, buttonRef) => {
  const {
    children,
    loading = false,
    disabled = false,
    style,
    intent,
    className
  } = props;
  const ref = useRef(null);

  const isDisabled = loading ? loading : disabled

  return (
    <button
      ref={mergeRefs([ref, buttonRef])}
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
    >
      {!loading && children}
      {loading && (
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      )}
    </button>
  );
});

Button.displayName = "Button"

export default Button;