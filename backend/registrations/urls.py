from django.urls import include, path
from rest_framework import routers

from .api.views import ProductViewSet, ResponsibleCompanyViewSet, ServiceViewSet

router = routers.DefaultRouter()
router.register("responsible_companies", ResponsibleCompanyViewSet)
router.register("products", ProductViewSet)
router.register("services", ServiceViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
