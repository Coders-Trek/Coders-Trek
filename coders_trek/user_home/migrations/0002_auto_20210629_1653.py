# Generated by Django 3.0.5 on 2021-06-29 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='create_new_team_class',
            name='image',
            field=models.ImageField(upload_to='uploads/team_image/'),
        ),
    ]
