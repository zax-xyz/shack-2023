import { type AppProps, type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import globalStyles from "~/styles/globalStyles";
import { type NextPage } from "next";
import { type ReactElement } from "react";
import AppLayout from "~/layouts/AppLayout";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  globalStyles();
  const getLayout = Component.getLayout ?? AppLayout;

  return getLayout(<Component {...pageProps} />);
};

export default api.withTRPC(MyApp);
