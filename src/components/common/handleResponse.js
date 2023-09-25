export async function getLoginData(url , data,password) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'X-Auth': 'MTIzNA==',
        'X-Auth': btoa(password),
      },
      body: JSON.stringify({"userName": data}) // body data type must match "Content-Type" header
    });
    return response; // parses JSON response into native JavaScript objects
  }

  export async function getOrderDetails(url ,token) {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Token': token,
        
      }
    });
    return response; // parses JSON response into native JavaScript objects
  }