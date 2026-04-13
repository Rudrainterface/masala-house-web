import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Masala House | The Magic of Flavour - Fresh Spices, Powders & Batters in Hyderabad",
  description:
    "Masala House - Premium fresh whole spices, ground powders, ginger garlic paste, dosa & idli batters, dry fruits and millets. Located at Bakaram, Gandhi Nagar, Hyderabad. Free local delivery. Call 9885594984.",
  keywords:
    "spices Hyderabad, masala shop, fresh spices, ginger garlic paste, dosa batter, idli batter, dry fruits, millets, Bakaram, Gandhi Nagar, Musheerabad, whole spices, ground masala, turmeric, chilli powder, cumin, coriander, Masala House",
  openGraph: {
    title: "Masala House | The Magic of Flavour",
    description:
      "Fresh whole spices, powders, pastes, batters & dry fruits from Hyderabad's trusted spice store.",
    type: "website",
    locale: "en_IN",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://masalahouse.in"),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#800020" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
      </head>
      <body className="antialiased font-body">
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-31LN7PX92T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-31LN7PX92T');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
