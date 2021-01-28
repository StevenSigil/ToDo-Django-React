from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    """
    Converts the model into JSON a json object.
    """
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')
