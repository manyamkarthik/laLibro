export async function login(authDetail) {
    const requestOptions={
           method:"POST",
           headers:{"content-Type":"application/json"},
           body: JSON.stringify(authDetail)
         }
         const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions);
         if(!response.ok){
          throw { message: response.statusText, status: response.status }; //eslint-disable-line
      }
         const data=await response.json();
         if(data.accessToken){
          sessionStorage.setItem("token",JSON.stringify(data.accessToken));
          sessionStorage.setItem("id",JSON.stringify(data.user.id));
         }
         return data;
    
    
}

export async function registerUser(authDetail) {
  const requestOptions={
        method:"POST",
        headers:{"content-Type":"application/json"},
        body: JSON.stringify(authDetail)
      }
      const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions);
      if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
      const data=await response.json();
          if(data.accessToken){
            sessionStorage.setItem("token",JSON.stringify(data.accessToken));
            sessionStorage.setItem("id",JSON.stringify(data.user.id));
           }
           return data;
}

export async function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("id");
}