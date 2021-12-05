
import { useEffect, useState } from 'react';
import useSubjectService from '../../../hooks/useSubjectService';
import Subject from '../../common/subject';

export default function Home() {
  const [subject, setSubject] = useState()
  const { getAll } = useSubjectService()
  useEffect(() => {
    getAll()
      .then(setSubject)
      .catch(console.error)
  }, [getAll])
  return (
   <div>
      {subject?.map(item =>(
       <Subject key={item._id} subj={item} />
      ))}
    
   </div>
    

  )

}