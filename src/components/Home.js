import React, {useState, useEffect} from 'react'

function Home() {

    const [users, setUsers] = useState(null);


    useEffect(() => {
        getData();
    
        
        async function getData() {
          const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
          const data = await response.json();
          
    
          
          setUsers(data) ;
        }
      }, []); // <- y
   
return (

    <div>
    <h1>Users</h1>

    {/* display users API */}
    {users && (
      <div className="books">

        {/* loop over the users */}
        {users.map((users, index) => (
          <div key={index}>
              <h2>{users.userId}</h2>
              <h2>{users.id}</h2>
            <h2>{users.title}</h2>            
            <h2>{users.completed}</h2>
          </div>
        ))}

      </div>
    )}
  </div>













  );
}


export default Home
