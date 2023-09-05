from rest_framework.serializers import ModelSerializer

from notes.models import Note


class NoteSerizalizer(ModelSerializer):
    class Meta:
        model = Note
        fields = ('title', 'body')
