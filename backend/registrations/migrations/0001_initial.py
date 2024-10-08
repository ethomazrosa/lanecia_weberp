# Generated by Django 4.1.7 on 2023-04-19 21:25

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="ResponsibleCompany",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "identification_number",
                    models.PositiveSmallIntegerField(unique=True),
                ),
                ("company_name", models.CharField(max_length=250)),
                ("brand_name", models.CharField(max_length=250)),
                (
                    "municipal_registration",
                    models.PositiveSmallIntegerField(blank=True, null=True),
                ),
                (
                    "state_registration",
                    models.PositiveSmallIntegerField(blank=True, null=True),
                ),
                ("email", models.EmailField(max_length=254)),
                ("phone", models.SmallIntegerField(blank=True, null=True)),
                ("mobile_phone", models.SmallIntegerField()),
                ("address_name", models.CharField(max_length=250)),
                ("address_number", models.SmallIntegerField()),
                (
                    "address_complement",
                    models.CharField(blank=True, max_length=250, null=True),
                ),
                ("neighborhood", models.CharField(max_length=250)),
                ("city", models.CharField(max_length=250)),
                ("state", models.CharField(max_length=2)),
                ("postal_code", models.SmallIntegerField()),
                ("color", models.CharField(max_length=10)),
                (
                    "logo",
                    models.ImageField(
                        blank=True, null=True, upload_to="company_logos/%Y/%m/%d/"
                    ),
                ),
            ],
        ),
    ]
