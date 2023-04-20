from rest_framework import viewsets

from ..models import Product, ResponsibleCompany
from .serializers import ProductSerializer, ResponsibleCompanySerializer


class ResponsibleCompanyViewSet(viewsets.ModelViewSet):
    queryset = ResponsibleCompany.objects.all()
    serializer_class = ResponsibleCompanySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
