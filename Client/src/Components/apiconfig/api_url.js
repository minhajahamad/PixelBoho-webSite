export const API_URL = {
  MESSAGES: {
    POST_MESSAGE: '/messages',
  },
  APPLICATIONS: {
    POST_APPLICATION: '/applications',
  },
  JOB_OPENINGS: {
    GET_JOB_OPENINGS: '/openings',
  },
  SEO: {
    GET_SEO_BY_SLUG: slug => `/seo/${slug}`,
  },
  BLOG:{
    GET_BLOG:'/blog'
  }
};
