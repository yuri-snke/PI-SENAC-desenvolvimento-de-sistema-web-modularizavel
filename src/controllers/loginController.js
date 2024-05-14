import { ValidarLogin } from "../data/repositories/loginRepository.js";

const Userlogin = async (req, resp) => {
    try{
        let userLogin = req.body;

        if(!userLogin.login)
            return 'Necessário informar o login!'

        if(!userLogin.login)
            return 'Necessário informar a senha!'

        const linhas = await ValidarLogin(userLogin);
        
        if(linhas.length > 0)
            resp.status(200).json({ message: "Autorizado" });  
        else
            resp.status(404).json({ message: "Nenhum resultado encontrado" });

    }catch(err){
        console.log(err)
    }

}

export {Userlogin}