from django.contrib import admin

from .models import ResponsibleCompany
from .models import Product

# Register your models here.
admin.site.register(ResponsibleCompany)
admin.site.register(Product)
