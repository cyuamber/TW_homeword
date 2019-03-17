// <!-- auto generated navs start -->
const autoGenHeaderNavs = [];
const autoGenAsideNavs = [];

// <!-- auto generated navs end -->

const customHeaderNavs = [
];

const customAsideNavs = [
  {
    text: <span><i className = "icon-dashboard nav-icon"></i>DASHBOARD</span>,
    to: '/',
    icon:'',
  },
  {
    text: <span><i className = "icon-sitemap nav-icon"></i>AGENT</span>,
    to: '/agent',
    icon: '',
  },
  {
    text: <span><i className = "icon-boat nav-icon"></i>MY CRUISE</span>,
    to: '/mycurise',
    icon: '',
  },
  {
    text: <span><i className = "icon-life-bouy nav-icon"></i>HELP</span>,
    to: '/help',
    icon: '',
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
