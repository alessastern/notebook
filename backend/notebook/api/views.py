from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.viewsets import ModelViewSet
from rest_framework import filters
from rest_framework.permissions import IsAuthenticated

from api.pagination import ImagePagination
from api.serializers import NoteSerizalizer, ImageSerializer
from notes.models import Note, Image, Tag


class NoteViewSet(ModelViewSet):
    serializer_class = NoteSerizalizer
    permission_classes = (IsAuthenticated,)
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    search_fields = ('title', 'tags__title')
    ordering = ('-updated_at')

    def get_queryset(self):
        user = self.request.user
        return user.notes.all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class ImageViewSet(ModelViewSet):
    serializer_class = ImageSerializer
    permission_classes = (IsAuthenticated,)
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    ordering = ('-created_at')
    pagination_class = ImagePagination

    def get_queryset(self):
        user = self.request.user
        return user.images.all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
