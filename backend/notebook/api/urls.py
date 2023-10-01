from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.views import NoteViewSet, ImageViewSet
from notebook.token_serializer import MyTokenObtainPairView


router = DefaultRouter()
router.register('notes', NoteViewSet, basename='notes')
router.register('images', ImageViewSet, basename='images')

urlpatterns = [
    path('', include(router.urls)),
    path('auth/jwt/create/', MyTokenObtainPairView.as_view(), name='customtoken'),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
