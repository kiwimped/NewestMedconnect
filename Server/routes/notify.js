const express = require('express');
const NotificationModel = require('../models/notify'); // Rename 'notify' to 'NotificationModel'
const router = express.Router();

router.get("/notifications", async (req, res) => {
    const { userId } = req.query; // Assuming userId is sent as a query parameter

    try {
        const notifications = await NotificationModel.find({ userId }).sort({ timestamp: -1 }); // Use NotificationModel here
        console.log(notifications); // Log the notifications for debugging

        res.status(200).json(notifications);
    } catch (error) {
        console.error("Error fetching notifications:", error);
        res.status(500).json({ error: "Failed to fetch notifications" });
    }
});

module.exports = router;
