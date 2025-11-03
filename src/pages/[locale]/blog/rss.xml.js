import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export function getStaticPaths() {
  return [{ params: { locale: 'en' } }, { params: { locale: 'id' } }];
}

export async function GET(context) {
  const { locale } = context.params;
  const blog = await getCollection('blog', ({ slug }) => slug.startsWith(locale));
  return rss({
    title: 'Tsurayya Blog',
    description: 'The latest news and articles from Tsurayya',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/${locale}/blog/${post.slug.replace(`${locale}/`, '')}/`,
    })),
  });
}
