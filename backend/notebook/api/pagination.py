from rest_framework.pagination import PageNumberPagination


class ImagePagination(PageNumberPagination):
    page_size = 5
