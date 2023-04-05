exports.healthcheck = (_, res) => {
  try {
    const data = {
      uptime: process.uptime(),
      message: 'API is healthy',
      date: new Date(),
    };
    res.status(200).send(data);
  } catch (error) {
    console.error("Controller: Error in healthcheck", error);
  }
}
