# Generated by Django 3.1.5 on 2021-01-29 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_auto_20210129_1241'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='description',
            field=models.CharField(default='TBD', max_length=200, null=True),
        ),
    ]