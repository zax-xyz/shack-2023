import { type ReactElement } from "react";
import Navbar from "~/components/Navbar";

const AppLayout = (page: ReactElement) => (
  <div tw="min-h-screen bg-gray-50">
    <div tw="max-w-5xl mx-auto">
      <Navbar />
      <div tw="p-4 pt-0">{page}</div>
    </div>
  </div>
);

export default AppLayout;
