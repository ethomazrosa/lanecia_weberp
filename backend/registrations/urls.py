from django.urls import include, path
from rest_framework import routers

from .api.views import ResponsibleCompanyViewSet

router = routers.DefaultRouter()
router.register("responsible_companies", ResponsibleCompanyViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
