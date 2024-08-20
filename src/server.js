const express = require('express')
const path = require('path')

const app = express()

const storageUsers = []

app.set('view engine', 'ejs') //seta configurações especificas da aplicação, o view engune é o motor de visualização, no caso o ejs
app.set('views', path.join (__dirname, 'views')) //seta  pagina em q estão as vies (os html)

//configuração do body
app.use(express.urlencoded({extended: true})) //urlencoded faz com q o body da requisição seja reconhecido

app.get('/', (req, res) => {
    const title = "Titulo pelo node"
    const message = "Aprendendo inda como funciona tudo isso de backend e tals"
    res.render('index') //como tá configurado as views ali no segundo set, da pra usar o metoso render e o nome do arquivo, o segundo parametro é um objeto com variáveis q podem ser usadas no ejs
})

app.get('/formulario', (req, res) => { //rota pra página do formulário
    res.render('form')
})

app.post('/register', (req, res) => { //rota pro envio do formulário
    const username = req.body.userName //corpo da requisição, mostra o conteúdo enviado, vem como um objeto, lembra de confgurar o body
    storageUsers.push(username)
    res.redirect('/usuarios') //redireciona para a rota de redirecionamento
})

app.get('/usuarios', (req, res) => {
    res.render('user', {users: storageUsers})
    console.log(storageUsers)
})

const PORT = 3000
app.listen(PORT, () => console.log("Server iniciado na porta 3000"))

//escrever "node --watch arquivo" o node vai vigiar o arquivo procurando por qualquer mudança e atualizar o servidor sozinho