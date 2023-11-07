import React from 'react'

import './Design.css'

export default function Design() {
  const fun = async () => {
    const api =
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc'

    const options = {
      method: 'GET',
    }

    const res = await fetch(api, options)
    const data = await res.json()
    console.log(data)
  }
  fun()

  const fun1 = async () => {
    const api =
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2'

    const options = {
      method: 'GET',
    }

    const res = await fetch(api, options)
    const data = await res.json()
    console.log(data)
  }
  fun1()

  const fun2 = async () => {
    const api = 'https://api.github.com/repos/{owner}/{repo}'

    const options = {
      method: 'GET',
    }

    const res = await fetch(api, options)
    const data = await res.json()
    console.log(data)
  }
  fun2()

  const fun3 = async () => {
    const api = 'https://api.github.com/repos/facebookarchive/redux-react-hook'

    const options = {
      method: 'GET',
    }

    const res = await fetch(api, options)
    const data = await res.json()
    console.log(data)
  }
  fun3()

  return (
    <div>
      <h1 className="heading"> Most Starred Repos</h1>

      <div className="items">
        <p>image url</p>

        <div className="items">
          <h2>Repository name</h2>
          <p> Repository description</p>
          <p>nb stars</p>
          <p>nb issues</p>
          <p> last published</p>
        </div>
      </div>
    </div>
  )
}
