import jwt from 'jsonwebtoken';

const secret = 'ptidesenvolvimento';

function gerarToken(usuario) {
    const user = {
        userId: usuario.id
    };
    return jwt.sign(user, secret, { expiresIn: '1h' });
}

// Função para verificar o token JWT
function verificarToken(req, res, next) {
    // const token = req.headers['authorization'];
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ mensagem: 'Token não fornecido' });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ mensagem: 'Token inválido' });
        }
        req.usuario = decoded;
        next();
    });
}

export { gerarToken, verificarToken };
