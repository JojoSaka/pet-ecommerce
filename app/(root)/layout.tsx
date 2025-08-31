import Navbar from "@/components/Custom/Navbar";
import MobileNav from "@/components/MobileNav";
import NewFooter from "@/components/NewFooter";

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
          <NewFooter />
        </div>
      </main>
  );
}
