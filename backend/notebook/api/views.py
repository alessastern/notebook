from rest_framework.viewsets import ModelViewSet
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from api.serializers import NoteSerizalizer
from rest_framework.permissions import IsAuthenticated

from notes.models import Note


class NoteViewSet(ModelViewSet):
    serializer_class = NoteSerizalizer
    permission_classes = (IsAuthenticated,)
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    ordering = ('-updated_at')

    def get_queryset(self):
        user = self.request.user
        return user.notes.all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
