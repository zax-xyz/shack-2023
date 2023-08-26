import { type ReactElement } from "react";
import Navbar from "~/components/Navbar";
import { Toaster } from "react-hot-toast";

const AppLayout = (page: ReactElement) => (
  <div tw="min-h-screen bg-gray-50">
    <Navbar />
    <div tw="max-w-5xl mx-auto">
      <div tw="p-4">{page}</div>
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
