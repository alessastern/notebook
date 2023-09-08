from rest_framework.serializers import ModelSerializer

from notes.models import Note


class NoteSerizalizer(ModelSerializer):

    class Meta:
        model = Note
        fields = ('id', 'title', 'text', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')
