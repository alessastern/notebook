from rest_framework.viewsets import ModelViewSet

from api.serializers import NoteSerizalizer
from notes.models import Note


class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerizalizer
