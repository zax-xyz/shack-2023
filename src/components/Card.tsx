import { type ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
  header?: string;
  bodyProps?: ComponentProps<"div">;
};

const Card = ({ header, children, bodyProps, ...props }: Props) => (
  <div tw="bg-white rounded-md shadow max-w-xl" {...props}>
    {header !== undefined && (
      <div tw="bg-violet-100 py-2 px-3">
        <h2 tw="font-semibold">{header}</h2>
      </div>
    )}
    <div tw="p-3" {...bodyProps}>
      {children}
    </div>
  </div>
);

export default Card;
