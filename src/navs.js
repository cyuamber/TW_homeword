// <!-- auto generated navs start -->
const autoGenHeaderNavs = [];
const autoGenAsideNavs = [];

// <!-- auto generated navs end -->

const customHeaderNavs = [
];

const customAsideNavs = [
  {
    text: 'DASHBOARD',
    to: '/',
    icon: 'home',
  },
  {
    text: 'AGENT',
    to: '/agent',
    icon: 'home',
  },
  {
    text: 'MY CRUISE',
    to: '/mycurise',
    icon: 'home',
  },
  {
    text: 'HELP',
    to: '/help',
    icon: 'home',
  },
];

function transform(navs) {
  // custom logical
  return [...navs];
}

export const headerNavs = transform([
  ...autoGenHeaderNavs,
  ...customHeaderNavs,
]);

export const asideNavs = transform([...autoGenAsideNavs, ...customAsideNavs]);
