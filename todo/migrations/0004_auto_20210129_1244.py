# Generated by Django 3.1.5 on 2021-01-29 19:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0003_auto_20210129_1243'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='description',
            field=models.CharField(default='TBD', max_length=200),
            preserve_default=False,
        ),
    ]