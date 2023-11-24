const db = require('../models/index');
const hassPassword = require('../service/hashPassword');


const getTestPage = (req, res) => {
    return res.status(200).json({
        message: 'hello world',
        data: [
            {
                id: 1,
                name: 'khang',
            },
            {
                id: 2,
                name: 'tom',
            }
        ]
    })
}

const getUsers = async (req, res) => {
    try {
        const users = await db.User.findAll({
            attributes: ['id', 'userName', 'email'],
            include: {model: db.Group, attributes: ['name', 'description']},
            raw: true,
            nest: true,
        });
        const roles = await db.Role.findAll({
            include: { model: db.Group, where: { id: 1 } },
            raw: true,
            nest: true,
        })
        console.log(users);
        return res.render('user.ejs', { users: users });
    } catch (err) {
        console.log(err);
    }
}

const createUser = async (req, res) => {
    let userName = req.body.userName;
    let password = await hassPassword(req.body.password);
    let email = req.body.email;
    let phone = req.body.phone;
    console.log();
    try {
        await db.User.create({
            userName: userName,
            password: password,
            email: email,
            phone: phone
        })
        return res.status(200).json({
            message: 'create user sussessfully !',
        })
    } catch (err) {
        return res.staus(500).json({
            message: 'error !', 
        })
    }
}

const userDetail = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await db.User.findOne({ where: { id: userId } });
        if (user === null) {
            return res.status(500).json({message: "u"})
        } else {
            return res.render('userDetail.ejs', {user});
        }
    } catch (err) {
        console.log(err);
    }
}

const updateUser = async (req, res) => {
    const userId = req.params.id;
    let userName = req.body.userName;
    let email = req.body.email;
    try {
        await db.User.update({
            email: email,
            userName: userName
        },{
            where: {
                id: userId,
            },
        });
        res.redirect('/user');
    } catch (err) {
        console.log(err);
    }
}

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        await db.User.destroy({
            where: {
                id: userId,
            },
        });
        res.redirect('/user');
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getTestPage,
    createUser,
    getUsers,
    deleteUser,
    userDetail,
    updateUser
}