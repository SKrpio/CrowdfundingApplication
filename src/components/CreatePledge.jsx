import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import postPledge from '../api/post-pledge'
import DropDown from './DropDown';

function CreatePledge(props) {

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [pledgeData, setPledgeData] = useState({
    project: props.projectId,
    amount: 0,
    comment: '',
    anonymous: false
  })

  const handleChange = (e) => {
    setPledgeData({
      ...pledgeData, 
      [e.target.id]: e.target.value
    })
  }

  const handleChecked = (e) => {
    setPledgeData({
      ...pledgeData,
      [e.target.id]: e.target.checked
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    postPledge(pledgeData)
      .then(() => {
        navigate(0)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <DropDown />
        <label htmlFor="amount">Donation:  </label>
        <input 
          type="text" 
          id="amount" 
          placeholder='Enter the amount' 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:  </label>
        <input 
          type="text" 
          id="comment" 
          placeholder='Enter a comment' 
          onChange={handleChange} 
        />
      </div>
      <div> 
        <label htmlFor='anonymous'>Remain Anonymous?  </label>
        <input
          type='checkbox'
          id='anonymous'
          onChange={handleChecked}
        />
      </div>
      <input type="submit" value="Pledge" />
    </form>
  )
}

export default CreatePledge