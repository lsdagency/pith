import { defineField, defineType } from 'sanity';

// One client story. Every number here must be sourced: the portfolio deck or Liam.
export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case study',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'URL slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'client', title: 'Client', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'sector', title: 'Sector', type: 'string' }),
    defineField({
      name: 'relationship',
      title: 'Relationship',
      type: 'string',
      description: 'Direct client, or agency-side work. This decides how the credit is worded on the site.',
      options: { list: ['Direct client', 'Agency-side'], layout: 'radio' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'summary', title: 'One-line summary', type: 'text', rows: 2 }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      description: 'Up to three. Figure first, then what it measures, e.g. "£43" and "cost per qualified lead".',
      validation: (r) => r.max(3),
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'figure', title: 'Figure', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'label', title: 'What it measures', type: 'string', validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'figure', subtitle: 'label' } },
        },
      ],
    }),
    defineField({ name: 'quote', title: 'Client quote', type: 'text', rows: 3 }),
    defineField({ name: 'quoteBy', title: 'Quote attribution', type: 'string', description: 'Name, role, company.' }),
    defineField({ name: 'body', title: 'The story', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'image', title: 'Lead image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'logo', title: 'Client logo', type: 'image' }),
    defineField({ name: 'order', title: 'Display order', type: 'number' }),
    defineField({ name: 'publishedAt', title: 'Published', type: 'datetime' }),
  ],
  orderings: [{ title: 'Display order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'client', media: 'image' } },
});
