import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog AI Writer – Generate Changelogs from Git Commits",
  description: "AI analyzes your git commits and generates user-friendly, categorized changelogs automatically. For product managers, engineering leads, and open source maintainers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="27f491da-7813-49d8-8892-565b057bb02d"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
