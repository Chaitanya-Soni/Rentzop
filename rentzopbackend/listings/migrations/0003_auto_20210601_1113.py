# Generated by Django 3.1 on 2021-06-01 05:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('listings', '0002_auto_20210426_1121'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listing',
            name='realtor',
        ),
        migrations.AddField(
            model_name='listing',
            name='relator',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL),
        ),
    ]
