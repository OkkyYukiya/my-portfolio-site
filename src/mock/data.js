// HEAD DATA
export const headData = {
  title: 'Yukiya Okita', // e.g: 'Name | Developer'
  lang: 'ja', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio site!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Yukiya Okita',
  subtitle: 'Welcom to my portfolio site!',
  cta: 'view more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.JPG',
  paragraphOne:
    '1995年生まれ。高校卒業後地元の化成品メーカーに就職。その後、HR業界で法人を対象にコンサルティング営業、マーケティングを経験。現在はフロントエンドエンジニアを目指しプログラミングを学習中。',
  paragraphTwo: `Skils:JavaScript/TypeScript/React.js/Gatsby.js/Firebase`,
  paragraphThree: 'Sub: Photoshop/Go',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: 1,
    img: 'news.jpg',
    title: 'News Quu(Original Application)',
    info:
      'ビジネスや経済、株価等のマーケット情報に特化したニュースアプリケーション。アカウントを作成することで、記事をclipすることが可能。',
    info2: 'TECH:React.js/react-router-dom/react-chartjs-2/node-sass/firebase',
    url: 'https://news-app-8efb7.web.app/',
    repo: 'https://github.com/OkkyYukiya/News_APP', // if no repo, the button will not show up
  },
  {
    id: 2,
    img: 'youtube-clone.jpg',
    title: 'Youtube Clone App',
    info:
      'Reactの"react-router-dom", "useContext"の学習をするためUdemyの教材を参考に作成。主にページ遷移、global stateの管理方法を学習。',
    info2: '',
    url: 'https://clone-efa56.web.app/',
    repo: 'https://github.com/OkkyYukiya/Youtube-clone', // if no repo, the button will not show up
  },
  {
    id: 3,
    img: 'tweet.jpg',
    title: 'Tweeter Clone App',
    info:
      'Firebase Auth, FireStoreを学習するために作成。Tweet機能を実装することでそれらを体系的に学習',
    info2: '',
    url: 'https://ts-app-7ad5b.web.app',
    repo: 'https://github.com/OkkyYukiya/twitter-clone', // if no repo, the button will not show up
  },
  {
    id: 4,
    img: 'portfolio.jpg',
    title: 'My Portfolio Site',
    info: '今まで作成したprojectをこのportfolio siteに掲載しております。',
    info2: 'Tech: Gatsby.js',
    url: 'https://ts-app-7ad5b.web.app',
    repo: 'https://github.com/OkkyYukiya/twitter-clone', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'contact',
  email: 'ykyokky1206developmentrr@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: 1,
      name: 'github',
      url: 'https://github.com/OkkyYukiya',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
