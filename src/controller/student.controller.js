import { getData, setData } from "../helpers/fileData.js";
import { hashingPassword } from "../helpers/hashing.js";
const withoutPassword = ({ password, ...user }) => user;
class UsersController {
  async getAll(req, res) {
    try {
      const users = await getData("students.json");
      if (!users) {
        return res.status(404).json({
          success: false,
          message: `Malumot topilmadi`,
        });
      }
      const safeUsers = users.map(withoutPassword);
      
      return res.status(201).json({
        success: true,
        message: `Malumot topildi`,
        data: safeUsers,
      });
    } catch (err) {
      return res.status(404).json({
        success: false,
        message: `Malumot topilmadi`,
      });
    }
  }
  async getId(req, res) {
    try {
      const id = +req.params.id;
      const users = await getData("students.json");
      const user = users.find((el) => el.id == id);

      if (!user) {
        res.status(404).json({
          success: false,
          message: `Malumot topilmadi`,
        });
      }
      return res.status(200).json({
        success: true,
        message: `Malumot topildi`,
        data: withoutPassword(user),
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: `Malumot topilmadi`,
      });
    }
  }
  async creat(req, res) {
    try {
      const users = await getData("students.json");
         
      const {email,fullName, password,age,id,course} =req.body
      const hashed = await hashingPassword(password)
      const newUser = {
        id: users.length ? users.at(-1).id + 1 : 1,
        id:id,
        fullName:fullName,
        email:email,
        password:hashed,
        age:age,
        course:course
      };
      users.push(newUser);
      await setData(users,'students.json');

      res.status(200).json({
        succes: true,
        message: `Yangi malumot qushildi`,
        data: withoutPassword(newUser),
      });
    } catch (error) {
      console.log(`Malumot qushilmagan `);
    }
  }
  async update(req, res) {
    try {
      const id = +req.params.id;
      const users = await getData("students.json");
      const user = users.findIndex((el) => el.id === id);

      if (user != -1) {
        users[user] = {
          id: id,
          ...req.body,
        };
        await setData(users, "students.json");
        return res.status(200).json({
          succes: true,
          message: `Malumot yangilandi`,
        });
      }
      return res.status(404).json({
        succes: false,
        message: `Bunday ${id}li user yuq`,
      });
    } catch (err) {
      return res.status(404).json({
        succes: false,
        message: `Bunday ${id}li user yuq`,
      });
    }
  }
  async delete(req,res){
    const id = +req.params.id
    const users = await getData('students.json')
    const user = users.findIndex((el)=>el.id===id)

    users.splice(user,1)
    await setData(users,'students.json')
    return res.status(200).json({
        succes:true,
        message:`Malumot o'chirildi`
    })
  }
}

export default new UsersController();
