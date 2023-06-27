
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});