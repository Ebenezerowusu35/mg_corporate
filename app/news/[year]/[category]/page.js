import NewsPageRedux from "@/pagesComponents/newsPageComponents/NewsPageRedux";
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  const category = params.category;
  const year = params.year;
  const currentPage = searchParams.page;
  return {
    title: "News",
    description:
      "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
    alternates: {
      canonical: `/news/${year}/${category}?page=${currentPage}`,
    },
    openGraph: {
      title: "News - Media General Ghana",
      description:
        "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
      url: `https://www.mg.com.gh/news/${year}/${category}?page=${currentPage}`,
      siteName: "Media General Ghana",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      title: "News - Media General Ghana",
      description:
        "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
      handle: "@mediageneralgh",
      site: "Media General Ghana",
      card: "summary_large_image",
    },
  };
}
const page = () => {
  return <NewsPageRedux />;
};

export default page;
