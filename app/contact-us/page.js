import ContactUsReduxPage from "@/pagesComponents/contactUsComponents/ContactUsReduxPage";

export const metadata = {
  title: "Contact US",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us - Media General Ghana",
    description:
      "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
    url: "https://www.mg.com.gh/contact-us",
    siteName: "Media General Ghana",
    type: "article",
    local: "en_US",
  },
  twitter: {
    title: "Contact Us - Media General Ghana",
    description:
      "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
    handle: "@mediageneralgh",
    site: "Media General Ghana",
    card: "summary_large_image",
  },
};
const ContactPage = () => {
  return <ContactUsReduxPage />;
};
export default ContactPage;
