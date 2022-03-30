class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

export default new HomeController();
// exportando a classe já instanciada, porque queremos já o objeto
// da instância, e não a classe em si
