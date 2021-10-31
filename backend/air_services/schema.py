from drf_yasg.openapi import Parameter, TYPE_NUMBER, IN_QUERY

lamin = Parameter(
    name="lamin",
    description="latitude minimum coordinate",
    type=TYPE_NUMBER,
    in_=IN_QUERY,
    required=False
)
lamax = Parameter(
    name="lamax",
    description="latitude maximum coordinate",
    type=TYPE_NUMBER,
    in_=IN_QUERY,
    required=False
)
lomin = Parameter(
    name="lomin",
    description="longitude minimum coordinate",
    type=TYPE_NUMBER,
    in_=IN_QUERY,
    required=False
)
lomax = Parameter(
    name="lomax",
    description="longitude maximum coordinate",
    type=TYPE_NUMBER,
    in_=IN_QUERY,
    required=False
)
