from django.db import models


class Note(models.Model):
    title = models.CharField(max_length=50)
    body = models.TextField()

    def __str__(self) -> str:
        return self.title
