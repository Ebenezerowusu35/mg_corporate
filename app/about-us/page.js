import AboutUsReduxPage from "@/pagesComponents/aboutPageComponents/AboutUsReduxPage";

export const metadata = {
  title: "About US",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us - Media General Ghana",
    description:
      "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
    url: "https://www.mg.com.gh/about-us",
    siteName: "Media General Ghana",
    type: "article",
    local: "en_US",
  },
  twitter: {
    title: "About Us - Media General Ghana",
    description:
      "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
    handle: "@mediageneralgh",
    site: "Media General Ghana",
    card: "summary_large_image",
  },
};
const AboutPage = () => {
  return <AboutUsReduxPage />;
};
export default AboutPage;
