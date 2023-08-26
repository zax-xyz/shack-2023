import { type ReactElement } from "react";
import Navbar from "~/components/Navbar";

const AppLayout = (page: ReactElement) => (
  <div tw="min-h-screen bg-gray-50 p-4">
    <div tw="max-w-5xl mx-auto">
      <Navbar />
      {page}
    </div>
  </div>
);

export default AppLayout;
