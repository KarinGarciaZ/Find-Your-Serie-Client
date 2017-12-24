export const navigation = [
  {
    name: 'Anime',
    icon: 'icon-magic-wand',
    url: '',
    children: [
      {
        name: 'Registrar',
        url: '/warehouse/anime/create',        
        icon: 'icon-note',
      },
      {
        name: 'Consulta General',
        url: '/warehouse/anime/all',        
        icon: 'icon-doc',
      }      
    ]
  },
  {
    name: 'Páginas',
    icon: 'icon-login',
    url: '',
    children: [
      {
        name: 'Registrar',
        url: '/warehouse/page/create',        
        icon: 'icon-note',
      },
      {
        name: 'Consulta General',
        url: '/warehouse/page/all',        
        icon: 'icon-doc',
      }      
    ]
  },
  {
    name: 'Manga',
    icon: 'icon-ghost',
    url: '',
    children: [
      {
        name: 'Registrar',
        url: '/warehouse/manga/create',        
        icon: 'icon-note',
      },
      {
        name: 'Consulta General',
        url: '/warehouse/manga/all',        
        icon: 'icon-doc',
      }      
    ]
  }
  
];
