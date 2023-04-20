from django.urls import include, path
from rest_framework import routers

from .api.views import ProductViewSet, ResponsibleCompanyViewSet

router = routers.DefaultRouter()
router.register("responsible_companies", ResponsibleCompanyViewSet)
router.register("products", ProductViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
