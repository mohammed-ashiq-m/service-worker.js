const { Router } = require('express');
const router = Router();

const webPush= require('../webpush');
let pushSubscripton;

router.post("/subscription", async (req, res) => {
  pushSubscripton = req.body;
  console.log(pushSubscripton);

  // Server's Response
  res.status(201).json();
});


router.post("/new-message", async (req, res) => {
        const { message } = req.body;
        // Payload Notification
        const payload = JSON.stringify({
          title: "Push Notification",
          message 
        });
        res.status(200).json();
        try {
          await webPush.sendNotification(pushSubscripton, payload);
        } catch (error) {
          console.log(error);
        }
      });
module.exports = router;
