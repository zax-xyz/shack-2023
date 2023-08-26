import { type ComponentProps } from "react";

const Checkbox = (props: ComponentProps<"input">) => (
  <input
    type="checkbox"
    tw="rounded border-gray-300 text-violet-600 shadow-sm focus:border-violet-300 focus:ring focus:ring-offset-0 focus:ring-violet-200 focus:ring-opacity-50"
    {...props}
  />
);

export default Checkbox;
