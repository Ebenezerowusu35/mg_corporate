import NewsPageRedux from "@/pagesComponents/newsPageComponents/NewsPageRedux";
import { useRouter } from "next/navigation";
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  const currentPage = searchParams.page;
    return {
      title: "News",
      alternates: {
        canonical: `/news?page=${currentPage}`,
      },
      openGraph: {
        title: "News - Media General Ghana",
        description:
          "Media General Ghana is a leading media company in Ghana, providing news, information, and entertainment to Ghanaians.",
        url: `https://www.mg.com.gh/news?page=${currentPage}`,
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
