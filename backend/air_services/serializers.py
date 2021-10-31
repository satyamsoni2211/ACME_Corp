from rest_framework import serializers


class AllStateSerializer(serializers.Serializer):
    icao24 = serializers.CharField()
    callsign = serializers.CharField(allow_null=True, allow_blank=True)
    origin_country = serializers.CharField(allow_null=True, allow_blank=True)
    time_position = serializers.IntegerField(allow_null=True)
    last_contact = serializers.FloatField(allow_null=True)
    longitude = serializers.FloatField(allow_null=True)
    latitude = serializers.FloatField(allow_null=True)
    baro_altitude = serializers.FloatField(allow_null=True)
    on_ground = serializers.BooleanField()
    velocity = serializers.FloatField(allow_null=True)
    true_track = serializers.FloatField(allow_null=True)
    vertical_rate = serializers.FloatField(allow_null=True)
    sensors = serializers.ListField(child=serializers.IntegerField(), allow_null=True, allow_empty=True)
    geo_altitude = serializers.FloatField(allow_null=True)
    squawk = serializers.CharField(allow_null=True, allow_blank=True)
    spi = serializers.BooleanField()
    position_source = serializers.IntegerField()
