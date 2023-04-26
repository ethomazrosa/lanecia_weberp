from rest_framework import viewsets

from ..models import Product, ResponsibleCompany, Service
from .serializers import (
    ProductSerializer,
    ResponsibleCompanySerializer,
    ServiceSerializer,
)


class ResponsibleCompanyViewSet(viewsets.ModelViewSet):
    queryset = ResponsibleCompany.objects.all()
    serializer_class = ResponsibleCompanySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
