import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "acme_corp.settings")

import django

django.setup()

import pandas as pd
from air_services.opensky import open_sky
from collections import defaultdict

data = open_sky.get_all_states()

df = pd.DataFrame(data)
group = df.groupby("origin_country")
data = defaultdict(lambda: list())

for g in group.groups:
    data[g].extend(group.get_group(g).to_dict("records"))
