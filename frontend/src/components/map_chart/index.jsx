import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
} from "react-simple-maps";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Modal } from "react-bootstrap";
import { Tag, Tooltip, Skeleton } from 'antd';
import { mapSliceActions } from "src/lib/map/mapSlice"
import * as _ from 'lodash';
import { useSelector } from "react-redux";

const { CheckableTag } = Tag;

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = () => {
    const state = useSelector(state => state.map)
    const dispatch = useDispatch();
    const [data, setdata] = useState([]);
    const [popoverContent, setpopovercontent] = useState(null);
    const [triggerPopover, settriggerPopover] = useState(false);

    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

    function handleZoomIn() {
        if (position.zoom >= 4) return;
        setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }));
    }

    function handleZoomOut() {
        if (position.zoom <= 1) return;
        setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
    }

    function handleMoveEnd(position) {
        setPosition(position);
    }
    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_BACKEND_DOMAIN}/all_states/`
        ).then(response => response.json()).then(resdata => {
            setdata(resdata)
        })
        const interval = setInterval(() => fetch(
            `${process.env.REACT_APP_BACKEND_DOMAIN}/all_states/`
        ).then(response => response.json()).then(resdata => {
            setdata(resdata)
        }), 60000
        )
        return () => clearInterval(interval)
    }, []);
    return data ? (
        <>
            <ComposableMap
                projection="geoAlbers"
                projectionConfig={{
                    scale: 100
                }}
            >
                <ZoomableGroup
                    zoom={position.zoom}
                    center={position.coordinates}
                    onMoveEnd={handleMoveEnd}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                const { NAME, POP_EST } = geo.properties;
                                let style = {
                                    default: {
                                        fill: "#D6D6DA",
                                        outline: "none"
                                    },
                                    pressed: {
                                        fill: "#E42",
                                        outline: "none"
                                    }
                                };
                                if (data[NAME]) {
                                    style.default = {
                                        fill: "#F53",
                                        outline: "none"
                                    };
                                }
                                return <Tooltip title={NAME}
                                    zIndex={1000}
                                    key={NAME}>
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        style={style}
                                        onClick={() => {
                                            console.log(geo)
                                            const coordinates = geo.geometry.coordinates[0];
                                            console.log(coordinates)
                                            const longitude = coordinates.length == 1 ? coordinates.map(d => d[0][0]) :
                                                coordinates.map(d => d[0])
                                            const latitude = coordinates.length == 1 ? coordinates.map(d => d[0][1]) :
                                                coordinates.map(d => d[1])
                                            if (data[NAME]) {
                                                dispatch(mapSliceActions.selectedState({
                                                    name: NAME,
                                                    lamin: _.min(latitude),
                                                    lamax: _.max(latitude),
                                                    lomin: _.min(longitude),
                                                    lomax: _.max(longitude)
                                                }));
                                                settriggerPopover(true)
                                                setpopovercontent({
                                                    NAME,
                                                    data: data[NAME]
                                                })

                                            }
                                        }}
                                    />
                                </Tooltip>
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <div className="controls">
                <button onClick={handleZoomIn}
                    className="btn btn-danger mr-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                    >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>
                <button onClick={handleZoomOut}
                    className="btn btn-danger">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>
            </div>
            <Modal show={triggerPopover}
                autoFocus
                onEscapeKeyDown={() => settriggerPopover(false)}
                size={'lg'}>
                <Modal.Header>
                    <Modal.Title>{popoverContent && popoverContent.NAME}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p className="text-secondary">Click tags for detailed aircraft tracking </p>
                    {
                        popoverContent && popoverContent.data.map((d, index) => {
                            let colors = [
                                'success', 'error', 'warning', 'default', 'processing'
                            ];
                            return <CheckableTag key={index}
                                className="m-1"
                                checked={state.selectedAircraft === d.icao24}
                                style={{ cursor: "pointer", border: "1px solid gray" }}
                                onChange={(tag, checked) => {
                                    if (tag) {
                                        dispatch(mapSliceActions.setAircraft(d.icao24))
                                    } else {
                                        dispatch(mapSliceActions.clearAircraft())
                                    }
                                }}>{d.icao24}</CheckableTag>
                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary"
                        onClick={() => {
                            settriggerPopover(false);
                        }}>Close</button>
                </Modal.Footer>
            </Modal>
        </>
    ) : (
        <Skeleton avatar paragraph={{ rows: 4 }} />
    );
};

export default MapChart;