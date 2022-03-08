module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'df21172d3d9536cfe4302d2b4781d988'),
  },
});
