const usuariosGet= (req, res=response) => {
  const {q, nombre='no name', apikey, page, limit}= req.query;
    res.json({
        msg:'get Api-controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
  }

const usuariosPost = (req, res) => {
    const {nombre, edad } =req.body;

    res.status(201).json({
        msg:'post Api',
        nombre,
        edad
    });
  }
  const usuariosPut = (req, res) => {
    const id=req.params.id;

    res.status(400).json({
        msg:'put Api',
        id
    });
  }
  const usuariosPatch= (req, res) => {
    res.json({
        msg:'pacht Api'
    });
  }

  const usuariosDelete = (req, res) => {
    res.json({
        msg:'delete Api'
    });
  }

  module.exports={
      usuariosGet,
      usuariosPost,
      usuariosPut,
      usuariosPatch,
      usuariosDelete
  }