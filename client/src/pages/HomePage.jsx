import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import Context from '../context/Context'

function HomePage() {
    const navigate = useNavigate()
    const { data, setData, setUpdate } = useContext(Context)
    const [search, setSearch] = useState("")
    const [searchType, setSearchType] = useState("")

    const [allData, setAllData] = useState([])

    async function fetchData() {
        try {
            const response = await fetch("http://localhost:3030/api/launchers");
            const result = await response.json();
            setData(result)
            setAllData(result)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (search === "") {
            setData(allData)
        } else {
            setData(
                allData.filter(item =>
                    item.city.toLowerCase().includes(search.toLowerCase())
                )
            )
        }
    }, [search])
    useEffect(() => {
        if (searchType === "") {
            setData(allData)
        } else {
            setData(
                allData.filter(item =>
                    item.rocketType === searchType)
            )

        }
    }, [searchType])
    async function deleteById(id) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow"
        };
        try {
            const response = await fetch(`http://localhost:3030/api/launchers/${id}`, requestOptions);
            const result = await response.json();
            console.log(result)
            fetchData()
        } catch (error) {
            console.error(error);
        };
    }
    return (
        <div className='page'>
            <div className="search">
                <p>Search by...</p>
                <label htmlFor="">City</label>
                <input
                    type="text"
                    value={search}
                    placeholder='city...'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <label htmlFor="">Rocket Type</label>
                <select name="rocketType" id="rocketType" onChange={(e) => setSearchType(e.target.value)}>
                    <option value="">All</option>
                    <option value="Shahab3">Shahab3</option>
                    <option value="Fetah110">Fetah110</option>
                    <option value="Radwan">Radwan</option>
                    <option value="Kheibar">Kheibar</option>
                </select>
            </div>
            <div>
                <button onClick={() => {
                    navigate('new-launcher')
                }}
                >Add new launcher</button>

            </div>
            {data.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>City</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map(item => (
                            <tr key={item._id} >
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.city}</td>
                                <td><button onClick={() => navigate(`/details/${item._id}`)}
                                >Details</button></td>
                                <td><button onClick={() => deleteById(item._id)}
                                >Delete</button></td>
                                <td>
                                    <button onClick={() => {
                                        setUpdate(item)
                                        navigate('update-launcher')
                                    }}
                                    >Update launcher</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No launchers listed.</p>
            )}
        </div>
    )
}

export default HomePage