/*import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) =>{
    const user = await User.findOne({
        where: {
            name : req.body.name
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(400).json({msg: "Wrong Password"});
    req.session.userId = user.id;
    const id = user.id;
    const name = user.name;
    
    const role = user.role;
    res.status(200).json({id, name, role});
}

export const Me = async (req, res) =>{
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login ke akun Anda!"});
    }
    const user = await User.findOne({
        attributes:['id','name','role'],
        where: {
            id: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    res.status(200).json(user);
}

export const logOut = (req, res) =>{
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg: "Tidak dapat logout"});
        res.status(200).json({msg: "Anda telah logout"});
    });
}
*/

// authController.js
import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) =>{
    try {
        const user = await User.findOne({
            where: {
                name : req.body.name
            }
        });
        if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
        
        const match = await argon2.verify(user.password, req.body.password);
        if(!match) return res.status(400).json({msg: "Password salah"});
        
        req.session.userId = user.id;
        const { id, name, role } = user;
        res.status(200).json({ id, name, role });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
}

export const Me = async (req, res) =>{
    try {
        if(!req.session.userId){
            return res.status(401).json({msg: "Mohon login ke akun Anda!"});
        }
        const user = await User.findOne({
            attributes:['id','name','role'],
            where: {
                id: req.session.userId
            }
        });
        if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
}

export const logOut = (req, res) =>{
    req.session.destroy((err)=>{
        if(err) {
            console.error(err);
            return res.status(500).json({msg: "Tidak dapat logout"});
        }
        res.status(200).json({msg: "Anda telah logout"});
    });
}
