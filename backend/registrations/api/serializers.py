from rest_framework import serializers

from ..models import ResponsibleCompany


class ResponsibleCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = ResponsibleCompany
        fields = "__all__"
