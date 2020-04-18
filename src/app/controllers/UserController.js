import User from '../models/User';

class UserController {

  async store(req,res) {
    const { name, email, password } = req.body;

    const response = await User.create({
      name,
      email,
      password
    });

    return res.status(201).send({msg: "User successfully registered!"})
  }

  async index(req, res) {
    const response = await User.findAll();
    return res.status(200).send(response);
  }

  async show(req,res) {    
    const { id } = req.params;

    const response = await User.findByPk(id);

    if(response)
      return res.status(200).send(response);

    return res.status(404).send({msg: "User not found!"});
  }

  async update(req,res) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await User.findByPk(id);

    if(user){
      const response = await user.update({
        name,
        email,
        password
      });

      return res.status(200).json({ type: "success", msg: "User edited successfully!", produto: response });
    }

     return res.status(404).send({msg: "User not found!"});
  }

  async delete(req,res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if(user){
      const response = await user.destroy();
      return res.status(200).json({ type: "success", msg: "User deleted successfully!" });
    }

     return res.status(404).send({msg: "User not found!"});
  }

}

export default new UserController();
