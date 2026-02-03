import pandas as pd

df = pd.read_csv('./youtube_data.csv')

column_types = df.dtypes
print(column_types)
