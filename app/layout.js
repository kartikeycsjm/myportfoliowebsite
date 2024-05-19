import Header from "./_components/Header";
import "./globals.css";
import Footer from "./_components/Footer";
export const metadata = {
  title: "Kartikey Mishra",
  description: "I have to fly high.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="main" className="w-full min-h-screen bg-[#000625] flex justify-center items-center flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
