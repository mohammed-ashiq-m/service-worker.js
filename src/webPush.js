const webpush = require('web-push');

webpush.setVapidDetails(
    'mailto:occuz.com',
    process.env.PUBLIC_VAPID_KEY,
    process.env.Private_Key
  );

module.exports = webpush;