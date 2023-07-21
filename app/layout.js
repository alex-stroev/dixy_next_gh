import "./scss/globals.scss";
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru-RU">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
