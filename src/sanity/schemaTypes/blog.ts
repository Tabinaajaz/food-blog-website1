import {defineField, defineType} from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title:'title'
    }),
    defineField({
      name: 'name',
      type: 'string',
      title:'name'
    }),
  
    defineField ({
      title: 'Description',
      name: 'description',
      type: 'text'
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: "title"
      },
    }),
    defineField({
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      }), 
      defineField  ({
        title: 'Image URL',
        name: 'imageUrl',
        type: 'url'
      }),
      defineField({
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}]
      }),
   
    
  ],
})