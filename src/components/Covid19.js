import './Covid19.scss'
import { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment'
import { FcHeadset } from "react-icons/fc";
function Covid19() {

    const [dataCovid, setDataCovid] = useState([])

    useEffect(async () => {
        let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2022-01-01T00:00:00Z&to=2022-02-10T00:00:00Z')
        let data = res && res.data ? res.data : [];
        if(data && data.length > 0) {
            data.map(item => (
                item.Date = moment(item.Date).format('DD/MM/YYYY')
            ))
        }
        setDataCovid(data)
    }, [])

    return (
        <div style={{background: '#282c34'}}>
            
            <h2>Covid19 tại Việt Nam</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date <FcHeadset /></th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCovid && dataCovid.length > 0 && dataCovid.map(item => (
                        <tr key={item.ID}>
                            <td>{item.Date}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.Active}</td>
                            <td>{item.Deaths}</td>
                            <td>{item.Recovered}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Covid19;