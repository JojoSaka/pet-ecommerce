import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar"
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
        <div className="block lg:hidden">
          <MobileNav />
        </div>
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </main>
  );
}
