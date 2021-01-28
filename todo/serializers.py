import uuid
from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    """
    Converts the model into JSON a json object.
    """
    id = serializers.UUIDField(read_only=True)

    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')
