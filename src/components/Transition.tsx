import { Transition as HeadlessUiTransition } from "@headlessui/react";
import { css } from "twin.macro";

import type { ComponentType, HTMLAttributes, PropsWithChildren } from "react";
import type { TwStyle } from "twin.macro";

/**
 * HeadlessUI "Transition"
 * Customized for twin.macro + typescript
 * https://headlessui.dev/react/transition
 */

const toCss = (styles?: TwStyle) =>
  styles ? css(styles).toString() : undefined;

type Props = HTMLAttributes<HTMLElement> & {
  as?: ComponentType;
  show?: boolean;
  appear?: boolean;
  enter?: TwStyle;
  enterFrom?: TwStyle;
  enterTo?: TwStyle;
  entered?: TwStyle;
  leave?: TwStyle;
  leaveFrom?: TwStyle;
  leaveTo?: TwStyle;
  beforeEnter?: () => void;
  afterEnter?: () => void;
  beforeLeave?: () => void;
  afterLeave?: () => void;
};

const getProps = (props: Props) => ({
  ...props,
  enter: toCss(props.enter),
  enterFrom: toCss(props.enterFrom),
  enterTo: toCss(props.enterTo),
  entered: toCss(props.entered),
  leave: toCss(props.leave),
  leaveFrom: toCss(props.leaveFrom),
  leaveTo: toCss(props.leaveTo),
  beforeEnter: () => props.beforeEnter?.(),
  afterEnter: () => props.afterEnter?.(),
  beforeLeave: () => props.beforeLeave?.(),
  afterLeave: () => props.afterLeave?.(),
});

const Transition = (props: PropsWithChildren<Props>) => (
  <HeadlessUiTransition {...getProps(props)} />
);

Transition.Child = function Child(props: PropsWithChildren<Props>) {
  return <HeadlessUiTransition.Child {...getProps(props)} />;
};

export default Transition;
