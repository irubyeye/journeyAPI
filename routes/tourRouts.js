const express = require("express");

const {
  getAllTours,
  createNewTour,
  getTourById,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = require("../controllers/tourController");
const authController = require("../controllers/authController");

const router = express.Router();

// router.param("id", checkID); alias
router.route("/monthly-plan/:year").get(getMonthlyPlan);

router.route("/top-5-cheap").get(aliasTopTours, getAllTours);

router.route("/tour-stats").get(getTourStats);

router.route("/").get(authController.protect, getAllTours).post(createNewTour);

router
  .route(`/:id`)
  .get(getTourById)
  .patch(updateTour)
  .delete(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    deleteTour
  );

module.exports = router;
