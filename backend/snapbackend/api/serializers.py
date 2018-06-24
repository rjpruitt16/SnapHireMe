from api.models import SnapCapsule
from datetime import datetime
from django.contrib.auth.models import User
from rest_framework import serializers

class SnapCapsuleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SnapCapsule
        fields = ('user', 'dateToPost', 'image', 'caption', 'url')

    def validate_dateToPost(self, value):
        present = datetime.now()
        present = present + datetime.timedelta(minute=1)
        if value < present:
            raise serializers.ValidationError("Date must greater than Present",
               present)
        return value


class UserSerializer(serializers.HyperlinkedModelSerializer):
    snapcapsules = SnapCapsuleSerializer(
        many=True,
        read_only=True,
        allow_null=True,
    )

    class Meta:
        model = User
        fields = ('snapcapsules', 'url', 'username', 'email', 'password')
        write_only_fields = ('password',)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
        )

        user.set_password(validated_data['password'])
        user.save()

        return user

    def update(self, instance, validated_data):
        for capsule in validated_data["snapcapsules"]:
            snapcapsule = SnapCapsule.object.create(user=instance.username,
                                                    **capsule)
            snapcapsule.save()
        return instance
