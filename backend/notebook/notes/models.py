from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Note(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='notes')

    def __str__(self) -> str:
        return self.title
