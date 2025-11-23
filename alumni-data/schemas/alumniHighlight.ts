import { defineType } from 'sanity';

export const alumniHighlightType = defineType({
  name: 'alumniHighlight',
  title: 'Alumni Highlight',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'gradYear',
      title: 'Graduation Year',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }
  ]
});
