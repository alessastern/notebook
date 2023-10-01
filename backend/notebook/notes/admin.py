from django.contrib import admin
from notes.models import Note, Tag, TagNote, Image

admin.site.register(Note)
admin.site.register(Tag)
admin.site.register(TagNote)
admin.site.register(Image)
