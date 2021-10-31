from collections import defaultdict
from requests import Session, Response
from typing import Dict, Any, Tuple, Union, Mapping
from urllib3.exceptions import InsecureRequestWarning
from urllib3 import disable_warnings

disable_warnings(InsecureRequestWarning)

all_states_map = [
    "icao24",
    "callsign",
    "origin_country",
    "time_position",
    "last_contact",
    "longitude",
    "latitude",
    "baro_altitude",
    "on_ground",
    "velocity",
    "true_track",
    "vertical_rate",
    "sensors",
    "geo_altitude",
    "squawk",
    "spi",
    "position_source",
    "anonymous"
]


class OpenSky(object):
    content_header = "Content-Type"
    domain = "https://opensky-network.org/api"

    def __init__(self):
        self.__session = Session()
        self.__session.verify = False

    def __get__(self, url, params={}):
        return self.__parse_response(
            self.__session.get(
                url=url,
                params=params
            )
        )

    def __is_json_response(self, headers: Mapping) -> bool:
        if "json" in headers.get(self.content_header):
            return True
        return False

    def __parse_response(self, response: Response) -> Tuple[bool, Dict[str, Any], Union[str, Any]]:
        if response.ok:
            if self.__is_json_response(response.headers):
                return response.ok, response.json(), None
        return response.ok, {}, response.reason

    def get_all_states(self, params={}) -> Mapping:
        url = f"{self.domain}/states/all"
        ok, response, reason = self.__get__(url, params=params)
        data = defaultdict(lambda: [])
        if not ok:
            raise Exception(reason)
        for i in response.get("states"):
            data[i[2]].append(dict(zip(all_states_map, i)))
        return data


open_sky = OpenSky()
