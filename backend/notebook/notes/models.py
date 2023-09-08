from django.db import models


class Note(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    updated_at = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __str__(self) -> str:
        return self.title
