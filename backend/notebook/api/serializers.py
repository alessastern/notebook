from rest_framework.serializers import ModelSerializer
from rest_framework.relations import SlugRelatedField

from notes.models import Note


class NoteSerizalizer(ModelSerializer):
    author = SlugRelatedField(read_only=True, slug_field='username')

    class Meta:
        model = Note
        fields = ('id', 'title', 'text', 'author',
                  'created_at', 'updated_at',)
        read_only_fields = ('id', 'created_at', 'updated_at', 'author')
