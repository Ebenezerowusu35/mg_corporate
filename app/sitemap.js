let cat = new Map([
  [4, "3foundation"],
  [3, "awards"],
  [10, "media"],
  [9, "media-general"],
  [2, "news"],
  [8, "onua"],
  [5, "tv3"],
  [1, "uncategorized"],
]);

const data = [
  {
    id: 4,
    slug: "3foundation",
  },
  {
    id: 3,
    slug: "awards",
  },
  {
    id: 10,
    slug: "media",
  },
  {
    id: 9,
    slug: "media-general",
  },
  {
    id: 2,
    slug: "news",
  },
  {
    id: 8,
    slug: "onua",
  },
  {
    id: 5,
    slug: "tv3",
  },
  {
    id: 1,
    slug: "uncategorized",
  },
];

export default async function sitemap({ params, searchParams }) {
  const article = await fetch(
    "https://cms.mg.com.gh/wp-json/wp/v2/posts?per_page=100"
  ).then((res) => res.json());
  const categories = await fetch(
    "https://cms.mg.com.gh/wp-json/wp/v2/categories"
  ).then((res) => res.json());
  const articleUrls = article.map((ele) => {
    return {
      url: `https://www.mg.com.gh/article/${ele?.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    };
  });

  let pages = Math.ceil(article.length / 9) ?? 1;

  const allNews = new Array(pages).fill(1).map((_, i) => {
    return {
      url: `https://www.mg.com.gh/news?page=${i + 1}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    };
  });

  let catLen = categories.length;
  const categorisedArticles = categories.map((ele) => {
    return fetchCat(ele.id);
  });

  const ca = await Promise.all(categorisedArticles);

  async function fetchCat(id) {
    return await fetch(
      `https://cms.mg.com.gh/wp-json/wp/v2/posts?per_page=9&categories=${id}`
    ).then((res) => res.json());
  }

  let cartList = [];
  // let catMap = new Map();
  // ca.map((cart) => {
  //   cart.map((ele, i) => {
  //     let cat = ele.categories;
  //     cat.map((j) => {
  //       if (catMap.has(j)) {
  //         let val = catMap.get(j);
  //         catMap.set(j, val);
  //       } else {
  //         catMap.set(j, 1);
  //       }
  //     });
  //   });
  // });

// return {
//   url: `https://www.mg.com.gh/news/all/${ele.name}?page=${i + (1 % 9)}`,
//   lastModified: new Date(),
//   changeFrequency: "yearly",
//   priority: 1,
// };

// .flat();

// return cart
//   .map((ele, i) => {
//     return {
//       url: `https://www.mg.com.gh/news/all/${ele.name}?page=${i + (1 % 9)}`,
//       lastModified: new Date(),
//       changeFrequency: "yearly",
//       priority: 1,
//     };
//   })
//   .flat();
  
  return [
    {
      url: "https://www.mg.com.gh",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.mg.com.gh/about-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.mg.com.gh/contact-us",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.mg.com.gh/companies",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.mg.com.gh/our-brands",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...articleUrls,
    ...allNews,
    // ...allCategorisedNews.flat(),
  ];
}


