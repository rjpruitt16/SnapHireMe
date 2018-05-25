from django.db import models

# Create your models here.
class SnapCapsule(models.Model):
    username = models.CharField(max_length=100)
    date_joined = models.DateTimeField(auto_now=True)
    path = models.FileField(upload_to="image/")
    app_label = 'snap'
