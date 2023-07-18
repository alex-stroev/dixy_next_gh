import "./scss/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="ru-RU">
      <body>{children}</body>
    </html>
  );
}
