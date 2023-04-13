from django.db import models


# Create your models here.
class ResponsibleCompany(models.Model):
    identification_number = models.PositiveSmallIntegerField(unique=True)
    company_name = models.CharField(max_length=250)
    brand_name = models.CharField(max_length=250)
    municipal_registration = models.PositiveSmallIntegerField(blank=True, null=True)
    state_registration = models.PositiveSmallIntegerField(blank=True, null=True)
    email = models.EmailField()
    phone = models.SmallIntegerField(blank=True, null=True)
    mobile_phone = models.SmallIntegerField()
    address_name = models.CharField(max_length=250)
    address_number = models.SmallIntegerField()
    address_complement = models.CharField(max_length=250)
    neighborhood = models.CharField(max_length=250)
    city = models.CharField(max_length=250)
    state = models.CharField(max_length=2)
    postal_code = models.SmallIntegerField()
    color = models.CharField(max_length=10)
    logo = models.ImageField(upload_to="company_logos/%Y/%m/%d/", blank=True, null=True)

    def __str__(self) -> str:
        return self.brand_name
