
import axios from 'axios';
import { useEffect, useState } from 'react';
import Subject from '../../common/subject';

export default function Home() {
  const [subject, setSubject] = useState()
  const fetchUsers = async () => {
    const response = await axios.get("https://proyectonest.herokuapp.com/api/subject")
    console.log(response)
    setSubject(response.data)
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
   <div>
      {subject?.map(item =>(
       <Subject key={item._id} subj={item} />
      ))}
    
   </div>
    

  )

}