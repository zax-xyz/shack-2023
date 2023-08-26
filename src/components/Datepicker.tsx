import { Datepicker } from "@aliakbarazizi/headless-datepicker";
import { type ComponentProps } from "react";
import tw, { styled } from "twin.macro";

const Picker = (props: ComponentProps<typeof Datepicker.Picker>) => (
  <Datepicker.Picker
    defaultType="day"
    tw="max-w-xl mx-auto bg-white rounded-md shadow"
    alwaysOpen
    {...props}
  />
);

const Items = Datepicker.Items;

const headerBodyStyles =
  "grid w-full auto-rows-max gap-4 grid-cols-7 justify-items-center";
const Header = tw.div`px-4 py-2 bg-gray-100 rounded-t-md ${headerBodyStyles}`;
const Body = tw.div`p-4 pt-3 ${headerBodyStyles}`;

const Item = styled(Datepicker.Item, {
  ...tw`
    h-8 w-8 py-1.5
    flex items-center justify-center
    text-sm leading-none font-medium
    border-2 border-transparent rounded-full select-none transition
    outline-none focus:(ring ring-violet-200)
  `,

  variants: {
    isHeader: {
      true: tw`cursor-default font-semibold`,
      false: tw`hover:bg-violet-200`,
    },
    disabled: {
      true: tw`text-gray-500`,
    },
    isSelected: {
      true: {},
    },
    isColored: {
      true: {},
    },
    isToday: {
      true: tw`border border-violet-400`,
    },
  },

  compoundVariants: [
    {
      isColored: false,
      isSelected: true,
      css: tw`bg-violet-600 text-white hocus:bg-violet-800`,
    },
    {
      isColored: true,
      isSelected: true,
      css: tw`border-violet-400 text-purple-800!`,
    },
  ],

  defaultVariants: {
    isHeader: false,
    disabled: false,
    isColored: false,
    isToday: false,
  },
});

export default Object.assign(Datepicker, {
  Picker,
  Items,
  Header,
  Body,
  Item,
});
