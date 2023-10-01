import base64

from django.core.files.base import ContentFile
from rest_framework import serializers

from notes.models import Note, Image, Tag, TagNote


class Base64ImageField(serializers.ImageField):
    def to_internal_value(self, data):
        if isinstance(data, str) and data.startswith('data:image'):
            format, imgstr = data.split(';base64,')
            ext = format.split('/')[-1]
            data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)
        return super().to_internal_value(data)


class ImageSerializer(serializers.ModelSerializer):
    image = Base64ImageField()
    author = serializers.SlugRelatedField(
        read_only=True, slug_field='username')

    class Meta:
        model = Image
        fields = ('id', 'image', 'author', 'description', 'created_at')
        read_only_fields = ('id', 'author', 'created_at')


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = ('id', 'title', )
        read_only_fields = ('id', )


class NoteSerizalizer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, required=False)
    author = serializers.SlugRelatedField(
        read_only=True, slug_field='username')

    class Meta:
        model = Note
        fields = ('id', 'title', 'text', 'author',
                  'created_at', 'updated_at', 'tags')
        read_only_fields = ('id', 'created_at', 'updated_at', 'author')

    def create(self, validated_data):
        print(self.initial_data)
        print(validated_data)
        if 'tags' not in self.initial_data:
            note = Note.objects.create(**validated_data)
            return note
        tags = validated_data.pop('tags')
        note = Note.objects.create(**validated_data)
        for tag in tags:
            current_tag, _ = Tag.objects.get_or_create(**tag)
            TagNote.objects.create(
                tag=current_tag, note=note)
        return note

    def update(self, instance, validated_data):
        print(instance.tags)
        instance.title = validated_data.get('title', instance.title)
        instance.text = validated_data.get('text', instance.text)
        if 'tags' in validated_data:
            tags = validated_data.pop('tags')
            tag_list = []
            for tag in tags:
                current_tag, _ = Tag.objects.get_or_create(**tag)
                tag_list.append(current_tag)
            instance.tags.set(tag_list)
        instance.save()
        return instance
