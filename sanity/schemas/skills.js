export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'skill_cat',
      title: 'Skill Category',
      type: 'string',
    },
    {
      name: 'skill_list',
      title: 'Skills',
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
      title: 'skill_cat'
    }
  }
}
