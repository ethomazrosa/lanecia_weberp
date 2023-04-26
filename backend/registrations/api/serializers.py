from rest_framework import serializers

from ..models import Product, ResponsibleCompany, Service


class ResponsibleCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = ResponsibleCompany
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"
