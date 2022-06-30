function bookedDays() {
    
    const url = "http://127.0.0.1:5984/green_cottage/_all_docs"; 
      
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify({
                    "name": "userID",
                    "password": "password"
                }),
            }).then( data => {
                console.log(data)
            }).catch(e => {
                console.log('Error', e)
            })
}

bookedDays();
