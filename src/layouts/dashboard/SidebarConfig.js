// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Tableau de bord',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: getIcon('eva:people-fill')
  // },
  {
    title: 'Accueil',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill')
  },
  {
    title: 'Etudiant',
    path: '/dashboard/user',
    icon: getIcon('eva:file-text-fill')
  },
  {
    title: 'Professeurs',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill')
  },
  {
    title: 'Groupes',
    path: '/login',
    icon: getIcon('eva:lock-fill')
  },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill')
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill')
  // }
];

export default sidebarConfig;
