from drf_yasg.utils import swagger_auto_schema
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from .opensky import open_sky
from .serializers import AllStateSerializer
from rest_framework.request import Request
from .schema import lamin, lamax, lomin, lomax


class AllStatesView(ListAPIView):
    serializer_class = AllStateSerializer

    @swagger_auto_schema(manual_parameters=[lamin, lamax, lomin, lomax])
    def get(self, request, *args, **kwargs):
        return super(AllStatesView, self).get(request, *args, **kwargs)

    def list(self, request: Request, *args, **kwargs):
        all_states_data = open_sky.get_all_states(params=request.query_params)
        # ser = self.get_serializer(data=list(all_states_data), many=True)
        # ser.is_valid(raise_exception=True)
        return Response(data=all_states_data)
