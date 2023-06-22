import {useEffect, useState} from 'react'
import './App.css'

const apiUrlPackages = 'https://apis.ccbp.in/tg/packages'

// Replace your code here
const App = () => {
  const [packages, setPackages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(apiUrlPackages)
      .then(response => response.json())
      .then(data => {
        setPackages(data.packages)
        setIsLoading(false)
      })
      .then(error => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <div>
      {isLoading ? (
        <p data-testid="loader">Loading...</p>
      ) : (
        <div>
          <h1 className="bg">Travel Guide</h1>
          <div className="bg2">
            <ul>
              {packages.map(pack => (
                <li key={pack.id}>
                  <h1>{pack.name}</h1>
                  <img
                    src={pack.image_url}
                    alt={pack.name}
                    style={{
                      width: '200px',
                      height: '200px',
                    }}
                  />
                  <p>{pack.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
