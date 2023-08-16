import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/footer";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <CustomNavbar />
        <div className="my-4">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
