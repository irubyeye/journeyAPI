# journeyAPI

Performing aggregation by MongoDB
/controllers/tourController.js

In the getTourStats function, the aggregation pipeline includes stages like $match, $group, and $sort. These stages filter tours based on the ratingsAverage, group the tours by difficulty, and calculate various statistics such as the number of tours, total ratings, and average prices. Finally, the results are sorted in ascending order based on the average price.

In the getMonthlyPlan function, the pipeline stages include $unwind, $match, $group, $addFields, $project, and $sort. These stages unwind the startDates array, filter tours based on the specified year, group the tours by the month of their start dates, calculate the number of tours and create an array of tour names for each month, add a month field, remove the _id field, and sort the results based on the number of tour starts.
