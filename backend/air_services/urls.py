from django.urls import path
from .api import AllStatesView

urlpatterns = [
    path("all_states/", AllStatesView.as_view(), name="all_states"),
]
