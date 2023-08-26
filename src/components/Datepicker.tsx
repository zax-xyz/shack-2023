import { Datepicker } from "@aliakbarazizi/headless-datepicker";
import { type ComponentProps } from "react";
import tw, { styled } from "twin.macro";

const Picker = (props: ComponentProps<typeof Datepicker.Picker>) => (
  <Datepicker.Picker
    defaultType="day"
    tw="p-4 max-w-xl mx-auto bg-white rounded-md shadow"
    alwaysOpen
    {...props}
  />
);

const Items = (props: ComponentProps<typeof Datepicker.Items>) => (
  <Datepicker.Items
    tw="grid w-full auto-rows-max gap-4 grid-cols-7 justify-items-center"
    {...props}
  />
);

const Item = styled(Datepicker.Item, {
  ...tw`
    h-8 w-8 py-1.5
    flex items-center justify-center
    text-sm leading-none font-medium
    border-2 border-transparent rounded-full select-none transition
    outline-none focus:(ring ring-purple-400)
  `,

  variants: {
    isHeader: {
      true: tw`cursor-default`,
      false: tw`hover:bg-gray-700`,
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
      true: tw`border border-purple-400`,
    },
  },

  compoundVariants: [
    {
      isHeader: false,
      disabled: false,
      isColored: false,
      css: tw`hover:text-white`,
    },
    {
      isColored: false,
      isSelected: true,
      css: tw`bg-purple-600 text-white hocus:bg-purple-800`,
    },
    {
      isColored: true,
      isSelected: true,
      css: tw`border-purple-600 text-purple-800!`,
    },
  ],
});

export default Object.assign(Datepicker, {
  Picker,
  Items,
  Item,
});
