import tw, { globalStyles } from "twin.macro";
import type { TwStyle } from "twin.macro";
import { globalCss } from "~/../stitches.config";

const customStyles = {
  body: tw`font-sans antialiased`,
  strong: tw`font-semibold`,
};

const styles = () => {
  globalCss(globalStyles as Record<string, TwStyle>)();
  globalCss(customStyles)();
};

export default styles;
