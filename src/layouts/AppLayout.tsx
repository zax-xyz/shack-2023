import { type ReactElement } from "react";
import Navbar from "~/components/Navbar";
import { Toaster } from "react-hot-toast";

const AppLayout = (page: ReactElement) => (
  <div tw="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <div tw="max-w-5xl mx-auto flex-1 w-full flex">
      <div tw="p-4 flex-1">{page}</div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
        }}
      />
    </div>
  </div>
);

export default AppLayout;
