import { Table, Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import * as _ from 'lodash';

const columns = [
    {
        title: 'icao24',
        dataIndex: 'icao24',
        key: 'icao24',
    },
    {
        title: 'callsign',
        dataIndex: 'callsign',
        key: 'callsign',
    },
    {
        title: 'origin_country',
        dataIndex: 'origin_country',
        key: 'origin_country',
    },
]

export default function States() {
    const state = useSelector(state => state.map.selectedState);
    const [data, setdata] = useState(null);

    useEffect(() => {
        let u = process.env.REACT_APP_BACKEND_DOMAIN;
        if (u === "") {
            u = window.origin
        }
        const url = new URL(`${u}/all_states/`)

        if (state) {
            url.searchParams.append("lamin", state.lamin)
            url.searchParams.append("lamax", state.lamax)
            url.searchParams.append("lomin", state.lomin)
            url.searchParams.append("lomax", state.lomax)
            fetch(url.toString()).then(
                res => res.json()
            ).then(
                data =>
                    setdata(data[state.name])
            )
        }
    }, [state]);
    if (!state || _.isEmpty(state)) {
        return <p>No State Selected ...</p>
    }
    return data != null ? (
        <>
            <p>Found {data.length} flights</p>
            <Table columns={columns}
                dataSource={data}
                pagination={{ pageSize: 5 }} />
        </>
    ) : <Skeleton paragraph={3} avatar />
}