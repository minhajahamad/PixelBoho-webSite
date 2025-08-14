export const API_URL = {
  APPLICATIONS: {
    POST_APPLICATION: '/applications',
    GET_APPLICATION: '/applications',
    DELETE_APPLICATION: id => `/applications/${id}`,
  },
  JOB_OPENINGS: {
    GET_JOB_OPENINGS: '/openings',
    DELETE_JOB_OPENINGS: id => `/openings/${id}`,
    UPDATE_JOB_OPENINGS: id => `/openings/${id}`,
    POST_JOB_OPENINGS: '/openings',
  },
  SEO: {
    GET_ALL_SEO: '/seo',
    GET_SEO_BY_SLUG: slug => `/seo/${slug}`,
    POST_SEO: '/seo',
    UPDATE_SEO: slug => `/seo/${encodeURIComponent(slug)}`,
    DELETE_SEO: slug => `/seo/${slug}`,
  },
  MESSAGES: {
    GET_MESSAGE: '/messages',
    POST_MESSAGE: '/messages',
    GET_MESSAGE_UNREAD_COUNT: './messages/unread-count',
    UPDATE_MESSAGE: id => `/messages/${id}`,
    DELETE_MESSAGE: id => `/messages/${id}`,
  },
  ADMIN: {
    LOGIN_ADMIN: '/admin/login',
    ADMIN_GET_PROFILE: '/admin/profile',
    UPDATE_ADMIN_PROFILE: '/admin/profile',
    UPLOAD_ADMIN_PROFILE_PICTURE: '/admin/upload-picture',
    ADMIN_CHECK_EMAIL: '/admin/check-email',
    ADMIN_UPDATE_PASSWORD: '/admin/update-password',
  },
  BLOG: {
    POST_BLOG: '/blog',
    GET_BLOG: '/blog',
    DELETE_BLOG: id => `/blog/${id}`,
    UPDATE_BLOG: id => `/blog/${id}`,
  },
};
