from django.contrib.auth.models import User
from api.models import SnapCapsule
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'password')
        write_only_fields = ('password',)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
        )

        user.set_password(validated_data['password'])
        user.save()

        return user



class SnapCapsuleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SnapCapsule
        fields = ('path', 'username', 'dateposted')
