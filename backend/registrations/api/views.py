from rest_framework import viewsets

from ..models import ResponsibleCompany
from .serializers import ResponsibleCompanySerializer


class ResponsibleCompanyViewSet(viewsets.ModelViewSet):
    queryset = ResponsibleCompany.objects.all()
    serializer_class = ResponsibleCompanySerializer
