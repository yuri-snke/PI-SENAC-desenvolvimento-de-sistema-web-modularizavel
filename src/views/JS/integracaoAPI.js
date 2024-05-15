const baseURL = 'http://localhost:5000'

async function PostAPI(route, body){
    
    const token = await BuscaToken();

    const result =  await fetch(baseURL + route, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },

      body: JSON.stringify(body)
    }).then(async function(response){
       const teste = await response.json()
        return teste;
    });

    return result;
}

async function GetAPI(route){

    const token = await BuscaToken();


    const result =  await fetch(baseURL + route, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }).then(async function(response){
       const teste = await response.json()
        return teste;
    });

    return result;
}


async function BuscaToken(){

   return localStorage.getItem('token');
}

async function ValidaToken(){

  const token = await BuscaToken();

  
  if(!token)
      window.location.href = './login.html'
}

async function Logoff(){

  localStorage.removeItem('token');
  
  window.location.href = './login.html'
}


