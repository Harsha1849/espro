module.exports = {
  // Server configuration
  port: process.env.PORT || 5000,
  nodeEnv: 'production',

  // Database configuration
  mongoUri: process.env.MONGODB_URI,

  // Security configuration
  jwtSecret: process.env.JWT_SECRET,

  // CORS configuration
  corsOptions: {
    origin: process.env.CLIENT_URL || 'https://your-domain.com',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  },

  // Static file serving configuration
  staticOptions: {
    dotfiles: 'deny',
    etag: true,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('X-Content-Type-Options', 'nosniff');
    }
  }
};