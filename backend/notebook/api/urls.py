from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.views import NoteViewSet

router = DefaultRouter()
router.register('notes', NoteViewSet)

urlpatterns = [
    path('', include(router.urls))
]
