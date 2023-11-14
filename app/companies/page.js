import CompaniesReduxPage from "@/pagesComponents/companiesComponents/CompaniesReduxPage";

export const metadata = {
    title: "Companies",
    alternates: {
      canonical: "/companies",
    },
    openGraph: {
      title: "Companies - Media General Ghana",
      description:
        "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
      url: "https://www.mg.com.gh/companies",
      siteName: "Media General Ghana",
      type: "article",
      local: "en_US",
    },
    twitter: {
      title: "Companies - Media General Ghana",
      description:
        "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
      handle: "@mediageneralgh",
      site: "Media General Ghana",
      card: "summary_large_image",
    },
  };
  const CompanyPage = () => {
    return <CompaniesReduxPage />;
  };
  export default CompanyPage;