import {test, expect} from '@playwright/test'

test('Get User ApI', async({request})=>{
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
    expect(body.username).toBe('Bret')
})


test ('Post User', async({request})=>{
    const resposne = await request.post('https://jsonplaceholder.typicode.com/users', {
        data :{
            name : "Vishnu",
            username : "vishnus",
            email : "vishn@test.com"
        }
    });
    expect(resposne.status()).toBe(201);
    const body = await resposne.json();
    console.log(body);
    expect(body.name).toBe("Vishnu")

})


test ('Update API', async({request})=>{
    const response = await request.put('https://jsonplaceholder.typicode.com/users/1', {
        data : {
            name : "Vishnu Update",
            email : "vishnutest@email.com",
            username : "vishnus",
        }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
    expect(body.name).toBe("Vishnu Update")
})


test ('Delete API', async({request})=>{
    const reposne = await request.delete('https://jsonplaceholder.typicode.com/users/1');

    expect(reposne.status()).toBe(200);
})