from django.db import models

# Create your models here.
class create_new_team_class(models.Model):
	image = models.ImageField(upload_to='uploads/team_image/',blank=False)
	team_name = models.CharField(max_length=255)
	description = models.CharField(max_length=255)
