import Navbar from "@/components/Navbar";
import "@/public/assets/css/style.css";
import "@/public/assets/css/desktop.css";
import "@/public/assets/css/phone.css";
import "@/public/assets/css/tablet.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import LayoutSub from "@/pagesComponents/layoutComponent/LayoutSub";
// import "@/utils/axios.default"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.mg.com.gh"),
  title: {
    default: "Homepage - Media General Ghana",
    template: "%s - Media General Ghana",
  },
  description:
    "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
  keywords: [
    "Media General Ghana",
    "TV3 Ghana",
    "Onua TV",
    "3FM",
    "3News",
    "Media General Group",
    "Media conglomerate Ghana",
    "Media company in Ghana",
    "Media outlets Ghana",
    "Ghanaian media group",
    "Broadcasting in Ghana",
    "News in Ghana",
    "Entertainment in Ghana",
    "Television in Ghana",
    "Radio in Ghana",
    "Online media Ghana",
    "Digital media Ghana",
    "Media production Ghana",
    "Journalism Ghana",
    "Media diversity in Ghana",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  applicationName: "Media General Ghana",
  authors: [
    {
      name: "Media General Ghana",
      url: "https://facebook.com/mediageneralghana",
    },
  ],
  publisher: "https://facebook.com/mediageneralghana",
  manifest: "https://www.mg.com.gh/manifest.json",
  openGraph: {
    title: "Homepage - Media General Ghana",
    description:
      "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
    url: "https://www.mg.com.gh",
    siteName: "Media General Ghana",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    title: "Homepage - Media General Ghana",
    description:
      "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
    site: "@mediageneralgh",
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="/assets/plugins/fontawesome/css/fontawesome.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/plugins/fontawesome/css/all.min.css"
        />
        <meta name="geo.region" content="Ghana" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <LayoutSub />
        <Navbar />
        {children}
        <Footer />

        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
