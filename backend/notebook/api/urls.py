from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.views import NoteViewSet

router = DefaultRouter()
router.register('notes', NoteViewSet, basename='notes')

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt'))
]
