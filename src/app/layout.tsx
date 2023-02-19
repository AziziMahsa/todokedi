import "./globals.css";
import AppProviders from "@/context/AppProviders";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <AppProviders>
        <body>{children}</body>
      </AppProviders>
    </html>
  );
}
