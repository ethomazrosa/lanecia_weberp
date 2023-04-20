from rest_framework import serializers

from ..models import Product, ResponsibleCompany


class ResponsibleCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = ResponsibleCompany
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
