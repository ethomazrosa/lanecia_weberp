from django.db import models


# Create your models here.
class Address(models.Model):
    address_name = models.CharField(max_length=250)
    address_number = models.SmallIntegerField()
    address_complement = models.CharField(max_length=250, blank=True, null=True)
    neighborhood = models.CharField(max_length=250)
    city = models.CharField(max_length=250)
    state = models.CharField(max_length=2)
    postal_code = models.SmallIntegerField()

    class Meta:
        abstract = True


class ContactInformation(models.Model):
    email = models.EmailField()
    phone = models.SmallIntegerField(blank=True, null=True)
    mobile_phone = models.SmallIntegerField()

    class Meta:
        abstract = True


class ResponsibleCompany(Address, ContactInformation):
    identification_number = models.PositiveSmallIntegerField(unique=True)
    company_name = models.CharField(max_length=250)
    brand_name = models.CharField(max_length=250)
    municipal_registration = models.PositiveSmallIntegerField(blank=True, null=True)
    state_registration = models.PositiveSmallIntegerField(blank=True, null=True)
    color = models.CharField(max_length=10)
    logo = models.ImageField(upload_to="company_logos/%Y/%m/%d/", blank=True, null=True)

    def __str__(self) -> str:
        return self.brand_name


class Product(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(max_length=1000)
    ncm_naladish = models.PositiveSmallIntegerField(blank=True, null=True)
    o_cst = models.PositiveSmallIntegerField(blank=True, null=True)
    cfop = models.PositiveSmallIntegerField(blank=True, null=True)
    measurement_unit = models.CharField(max_length=25, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    profit_percentage = models.DecimalField(max_digits=7, decimal_places=4)
    icms_base_calc = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True
    )
    icms_price = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True
    )
    icms_rate = models.DecimalField(
        max_digits=5, decimal_places=2, blank=True, null=True
    )
    ipi_price = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True
    )
    ipi_rate = models.DecimalField(
        max_digits=5, decimal_places=2, blank=True, null=True
    )

    def __str__(self) -> str:
        return self.name
