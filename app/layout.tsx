
import PrelineScriptWrapper from "./components/PrelineScriptWrapper";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <PrelineScriptWrapper/>
      </body>
    </html>
  );
}
