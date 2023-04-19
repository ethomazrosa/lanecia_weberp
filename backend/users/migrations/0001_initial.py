# Generated by Django 4.1.7 on 2023-04-19 21:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Profile",
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
                    models.PositiveIntegerField(blank=True, null=True),
                ),
                ("phone_number", models.PositiveIntegerField(blank=True, null=True)),
                (
                    "profile_picture",
                    models.ImageField(
                        blank=True, null=True, upload_to="profile_pictures/%Y/%m/%d/"
                    ),
                ),
                (
                    "employee",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
