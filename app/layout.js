import MainHeader from "@/components/header/main-header";
import "./globals.css";

export const metadata = {
  title: "Next Feed",
  description: "Browse and share amazing feeds.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
