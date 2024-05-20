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
      <body id="main" className="w-full h-auto bg-[#000625] flex justify-between items-center flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
