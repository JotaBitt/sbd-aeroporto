const Voo = require('../models/voo');

exports.createVoo = async (req, res) => {
  try {
    const voo = await Voo.create(req.body);
    res.status(201).json(voo);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar voo', details: error.message });
  }
};

exports.getVoos = async (req, res) => {
  try {
    const voos = await Voo.findAll();
    res.json(voos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar voos', details: error.message });
  }
};

exports.updateVoo = async (req, res) => {
  try {
    const voo = await Voo.findByPk(req.params.id);
    if (!voo) {
      return res.status(404).json({ error: 'Voo não encontrado' });
    }
    await voo.update(req.body);
    res.json(voo);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar voo', details: error.message });
  }
};

exports.deleteVoo = async (req, res) => {
  try {
    const voo = await Voo.findByPk(req.params.id);
    if (!voo) {
      return res.status(404).json({ error: 'Voo não encontrado' });
    }
    await voo.destroy();
    res.json({ message: 'Voo deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar voo', details: error.message });
  }
};
