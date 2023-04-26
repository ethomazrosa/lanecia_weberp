from django.contrib import admin

from .models import Product, ResponsibleCompany, Service

# Register your models here.
admin.site.register(ResponsibleCompany)
admin.site.register(Product)
admin.site.register(Service)
