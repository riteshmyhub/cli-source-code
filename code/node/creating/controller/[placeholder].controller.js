async function placeholderController(req, res, next) {
   try {
      const {} = req.body;
      const {} = req.query;

      return res.status(200).json({
         success: true,
         message: "placeholder res successfully message",
      });
   } catch (error) {
      next(error);
   }
}

module.exports = placeholderController;
