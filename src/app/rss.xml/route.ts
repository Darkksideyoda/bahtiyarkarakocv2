import { NextResponse } from 'next/server';
import { blogPosts } from '@/data/blog-posts';

export function GET() {
  const baseUrl = 'https://bahtiyarkarakoc.com';
  
  const rssItems = blogPosts.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>contact@bahtiyarkarakoc.com (Bahtiyar Karakoç)</author>
      <category>${post.category}</category>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bahtiyar Karakoç - Blog</title>
    <description>Thoughts on technology, development practices, and lessons learned from real-world projects</description>
    <link>${baseUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>contact@bahtiyarkarakoc.com (Bahtiyar Karakoç)</managingEditor>
    <webMaster>contact@bahtiyarkarakoc.com (Bahtiyar Karakoç)</webMaster>
    <image>
      <url>${baseUrl}/og-image.jpg</url>
      <title>Bahtiyar Karakoç</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}