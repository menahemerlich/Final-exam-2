import { useLaunchers } from '../store/store'
import { useNavigate } from 'react-router'

function HomePage() {
    const navigete = useNavigate()
    const launchers = useLaunchers((state) => state.launchers)
  return (
    <div>
        {launchers.length > 0 ? (
            launchers.map(item =>{
                return (
                    <div key={item.id} onClick={()=> navigete(`/details/${item.id}`)}>
                        <p>{item.name}</p>
                        <p>{item.rocketType}</p>
                        <p>{item.latitude}</p>
                        <p>{item.longitude}</p>
                        <p>{item.city}</p>
                    </div>
                )
            })
        ):<p>No launchers listed.</p>}
    </div>
  )
}

export default HomePage