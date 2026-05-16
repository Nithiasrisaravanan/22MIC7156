const express = require("express");
const router = express.Router();
const { getApi } = require("../utils/apiClient");
const optimizeTasks = require("../services/knapsackService");

router.get("/schedule/:depotId", async (req, res) => {
  try {
    const depotId = parseInt(req.params.depotId);
    const api = await getApi();

    const depotResponse = await api.get("/depots");
    const vehicleResponse = await api.get("/vehicles");

    const depots = depotResponse.data.depots;
    const vehicles = vehicleResponse.data.vehicles;

    const depot = depots.find((d) => d.ID === depotId);

    if (!depot) {
      return res.status(404).json({ error: "Depot not found" });
    }

    const maxHours = depot.MechanicHours;
    const selectedTasks = optimizeTasks(vehicles, maxHours);

    res.json({
      depotId,
      mechanicHours: maxHours,
      scheduledTasks: selectedTasks
    });

  } catch (error) {
    console.error("Schedule error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;