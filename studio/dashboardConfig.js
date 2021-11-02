export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618175a1ac1c5f00973652d1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7p53nyie',
                  apiId: '9461e1f3-9a8c-4b46-80b6-a12da86e90a4'
                },
                {
                  buildHookId: '618175a205d9bc00c8f439fd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-97agranx',
                  apiId: '78290939-ecac-448e-9357-561bd8495a63'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beelarr/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-97agranx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
