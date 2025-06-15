
import PrelineScriptWrapper from "./components/PrelineScriptWrapper";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>CI Edil Speranta Costruzioni SRL</title>
        {/* Removed any <link rel="icon" ... /> or similar favicon tags. Only the <title> remains. */}</head>
      <body>
        {children}
        <SpeedInsights/>
        <PrelineScriptWrapper/>
      </body>
    </html>
  );
}
