import './globals.css'
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "../libraries/bootstrap/css/bootstrap.css";
import Footer from "@/components/footer/footer";
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const font = Onest(
  {
    subsets: ["latin"],
  }
);

export const metadata: Metadata = {
  title: "Graviton: Digital Agency",
  description: "Grow your business online. We offer Web and Mobile App Development, UI/UX design, SEO & Digital Marketing to create high-performing websites & apps that convert. ",
  openGraph: {
    title: 'Graviton: Digital Agency',
    description: 'Grow your business online. We offer web and mobile app development, UI/UX design, SEO & digital marketing to create high-performing websites & apps that convert.',
    url: 'gravitonsoftworks.com',
    siteName: 'Graviton: Digital Agency',
    images: [
      {
        url: 'img/graviton-og.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'img/graviton-og.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'graviton logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graviton: Digital Agency',
    description: 'Grow your business online. We offer web and mobile app development, UI/UX design, SEO & digital marketing to create high-performing websites & apps that convert.',
    // siteId: '1467726470533754880',
    creator: 'Graviton',
    // creatorId: '1467726470533754880',
    images: [
      {
        url: 'img/graviton-og.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'img/graviton-og.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'graviton logo',
      },
    ],
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
  metadataBase: new URL('https://gravitonsoftworks.com'),
  alternates: {
    canonical: 'https://gravitonsoftworks.com',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={font.className}>
        <GoogleAnalytics GA_MEASUREMENT_ID={''} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
