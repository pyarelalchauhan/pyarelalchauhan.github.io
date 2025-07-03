export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        {/* Only render portfolio-specific layout */}
        {children}
      </body>
    </html>
  );
}
