import ArticleReduxPage from "@/pagesComponents/articleComponents/ArticleReduxPage";
export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug;

  try {
    const article = await fetch(
      `https://cms.mg.com.gh/wp-json/wp/v2/posts?slug=${slug}`
    ).then((res) => res.json());
    return {
      title: article[0]?.yoast_head_json?.title,
      description: article[0]?.yoast_head_json?.og_description,
      alternates: {
        canonical: `/article/${article[0]?.slug}`,
      },
      authors: [
        {
          name: article[0]?.yoast_head_json?.author,
          url: article[0]?.yoast_head_json?.article_publisher,
        },
      ],
      publisher: article[0]?.yoast_head_json?.article_publisher,
      openGraph: {
        images: [
          {
            url: article[0]?.yoast_head_json?.og_image[0]?.url,
            height: "630",
            width: "1200",
            alt: "Article Image",
          },
        ],
        title: article[0]?.yoast_head_json?.og_title,
        description: article[0]?.yoast_head_json?.og_description,
        url: `https://www.mg.com.gh/article/${article[0]?.slug}`,
        siteName: article[0]?.yoast_head_json?.og_site_name,
        locale: article[0]?.yoast_head_json?.og_locale,
        type: article[0]?.yoast_head_json?.og_type,
      },
      twitter: {
        title: article[0]?.yoast_head_json?.title,
        description: article[0]?.yoast_head_json?.og_description,
        site: article[0]?.yoast_head_json?.twitter_site,
        card: article[0]?.yoast_head_json?.twitter_card,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
const page = () => {
  return <ArticleReduxPage />;
};
export default page;
