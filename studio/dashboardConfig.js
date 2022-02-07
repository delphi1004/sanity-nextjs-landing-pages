export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6201064db1d71b0f136dee6f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ctnudx3a',
                  apiId: '7fcdd412-386a-4a86-81f2-ea9d72726dd3'
                },
                {
                  buildHookId: '6201064df1f7760cfc7802b3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-brffje4t',
                  apiId: 'a7a7fcaf-e78c-424e-bc69-665d2e3c330a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/delphi1004/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-brffje4t.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
