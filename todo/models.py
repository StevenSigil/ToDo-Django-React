from django.db import models


class Todo(models.Model):
    id = models.UUIDField(primary_key=True)
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
