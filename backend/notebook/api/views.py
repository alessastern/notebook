from rest_framework.viewsets import ModelViewSet
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from api.serializers import NoteSerizalizer
from notes.models import Note


class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerizalizer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    ordering = ('-updated_at')
