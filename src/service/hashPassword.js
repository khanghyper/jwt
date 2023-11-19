const bcrypt = require('bcrypt');

const hassPassword = async (password) => {
    const saltRounds = 10; // Số vòng lặp hash
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

module.exports = hassPassword;
