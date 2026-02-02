import "./globals.css";

export const metadata = {
  title: "Neshun R - GitHub Streak Card",
  description: "Interactive GitHub streak visualization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
