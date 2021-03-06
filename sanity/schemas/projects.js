export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    // {
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    // },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { value: 'personal', title: 'Personal' },
          { value: 'school', title: 'School' }
        ]
      }
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean'
    },
    {
      name: 'repository',
      type: 'url',
    },
    {
      name: 'demo',
      type: 'url',
    },
    {
      name: 'techs',
      type: 'array',
      of: [{
        type: 'string'
      }],
      options: {
        layout: 'tags'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    }
  }
}
