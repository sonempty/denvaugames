export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5ee24458d3f54b074eb930c4',
                  title: 'Sanity Studio',
                  name: 'denvaugames-studio',
                  apiId: 'e7d46094-8b97-49b2-b5f7-b9099f12532b'
                },
                {
                  buildHookId: '5ee244583aee2a64d7e203c7',
                  title: 'Blog Website',
                  name: 'denvaugames',
                  apiId: '7b52c6cd-345b-4690-9e01-338278f6909f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sonempty/denvaugames',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://denvaugames.netlify.app', category: 'apps'}
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
