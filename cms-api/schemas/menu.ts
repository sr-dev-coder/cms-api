import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
    }),
    defineField({
      name: 'submenu',
      title: 'Submenu',
      type: 'boolean',
    })
  ],
})
