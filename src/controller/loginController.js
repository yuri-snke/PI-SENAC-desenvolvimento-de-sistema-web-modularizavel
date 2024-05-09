const Userlogin = async (req, resp, db) => {
    try{
        let userLogin = req.body;

        if(!userLogin.login)
            return 'Necessário colocar o login'

        let comando = `SELECT * FROM tbl_usuario WHERE login = ? and senha = ?`;
        const [linhas] = await db.query(comando, [userLogin.login, userLogin.senha]);
        
        console.log(linhas)
        if(linhas.length > 0)
            resp.status(200).json({ message: "Autorizado" });  
        else
            resp.status(404).json({ message: "Nenhum resultado encontrado" });

    }catch(err){
        console.log(err)
    }

}

export {Userlogin}