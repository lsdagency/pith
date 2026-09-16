import { defineField, defineType } from 'sanity';

// A blog post. Drafted by the content agent in Liam's voice, approved by Liam.
export const post = defineType({
  name: 'post',
  title: 'Blog post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'URL slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, description: 'Shown in lists and as the meta description.' }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'image', title: 'Lead image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publishedAt', title: 'Published', type: 'datetime', validation: (r) => r.required() }),
  ],
  orderings: [{ title: 'Newest first', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: { select: { title: 'title', subtitle: 'publishedAt', media: 'image' } },
});
