import BrandsReduxPage from "@/pagesComponents/brandsPageComponents/BrandsReduxPage";

export const metadata = {
  title: "Our Brands",
  alternates: {
    canonical: "/our-brands",
  },
  openGraph: {
    title: "Our Brands - Media General Ghana",
    description:
      "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
    url: "https://www.mg.com.gh/our-brands",
    siteName: "Media General Ghana",
    type: "article",
    local: "en_US",
  },
  twitter: {
    title: "Our Brands - Media General Ghana",
    description:
      "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
    handle: "@mediageneralgh",
    site: "Media General Ghana",
    card: "summary_large_image",
  },
};
const BrandPage = () => {
  return <BrandsReduxPage />;
};
export default BrandPage;
