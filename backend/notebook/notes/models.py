from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Tag(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.title


class Note(models.Model):
    title = models.CharField(max_length=50, blank=True)
    text = models.TextField(blank=True, )
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='notes')
    tags = models.ManyToManyField(Tag, through='TagNote', related_name='notes')

    def __str__(self) -> str:
        return self.title


class TagNote(models.Model):
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)
    note = models.ForeignKey(Note, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.tag} {self.note}'


class Image(models.Model):
    image = models.ImageField(upload_to='images')
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='images')
    description = models.TextField(blank=True,)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __str__(self) -> str:
        return self.author
