from django.contrib.auth.models import User
from api.models import SnapCapsule
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class SnapCapsuleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SnapCapsule
        fields = ('path', 'username', 'dateposted')
