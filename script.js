async function test()
{
    const obj = await fetch("./db.json").then((response) => response.json());

    obj.users.forEach(e => {
        $(".main").append(`

            <div class="card">
            <p>id : "${e.id}"</p>
            <p>name : "${e.name}"</p>
            <p>surname : "${e.surname}"</p>
            <p>photo_url : "${e.photo_url}"</p>
            <p>balance : "${e.balance}"</p>
        </div>
            
            
            `)
    }); 
}

test();



