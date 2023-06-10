import {Feed} from 'feed'
import fs from 'fs'
import {getProducts} from '@/context/product-list-context'

const getBlogPostdata = async () => {
  return await (async (context) => {
    const keys = context.keys()
    const data = []
    const uniqueKeys = keys.filter((fileName) => {
      const regex = /^src.*/i
      const matches = fileName.match(regex)
      return matches === null
    })
    for (const key of uniqueKeys) {
      const fileName = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const postData = await import(`../content/posts/${fileName}.md`)
      data.push({
        content: postData.html, attributes: postData.attributes, slug: fileName
      })
    }
    return data
  })(require.context('../content/posts', true, /\.md$/))
}

export const generateRssFeed = async () => {
  const posts = await getBlogPostdata()
  const siteURL = process.env.SITE_URL
  const date = new Date()
  const author = {
    name: 'Jacky Cyntia Seumo', email: 'contact@overcomewithchrist.com'
  }

  const feed = new Feed({
    title: 'Overcome with Christ',
    description: 'John 16:33',
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/logo-icon.png`,
    favicon: `${siteURL}/favico.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Overcome with Christ`,
    updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`, json: `${siteURL}/rss/feed.json`, atom: `${siteURL}/rss/atom.xml`
    },
    author
  })
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.attributes.date)
    const dateB = new Date(b.attributes.date)
    return dateA < dateB ? 1 : -1
  })
  sortedPosts.forEach((post) => {
    const url = `${siteURL}/posts/${post.slug}`

    feed.addItem({
      title: post.attributes.title,
      id: url,
      link: url,
      image: post.attributes.featuredImage,
      description: post.attributes.summary,
      category: post.attributes.category,
      author: [{ name: post.attributes.author}],
      contributor: [{ name: post.attributes.author}],
      date: new Date(post.attributes.date),
      content: post.content
    })
  })

  fs.mkdirSync('./public/rss', {recursive: true})
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
  fs.writeFileSync('./public/rss/feed.json', feed.json1())
}
