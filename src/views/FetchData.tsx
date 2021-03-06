import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  [k: string]: string | Repo[]
}

interface Repo {
  id: number,
  name: string,
  description: string
}


function FetchData() {
  const [user, setUser] = useState<User>({})
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    axios.get('/api').then(rsp => {
      const { data } = rsp;
      const { repos } = data
      delete data.repos
      console.log(data)
      setUser(data)
      setRepos(repos)
    })
  }, [])
  
  return (
    <div className="App">
      {
        Object.keys(user).map(key => <div key={key}>
        <span style={{width: 30}}>{key}:</span>
        <span>{user[key]}</span>
        </div>)
      }
      <hr />
      {
        repos.map((repo: Repo) => <div key={repo.id}>
        <span style={{width: 30}}>{repo.name}:</span>
        <span>{repo.description}</span>
        </div>)
      }
    </div>
  );
}

export default FetchData;
