import { Category } from './types';

export const pandasData: Category = {
  id: 'pandas',
  title: 'Pandas',
  icon: '🐼',
  color: '#150458',
  gradient: 'linear-gradient(135deg, #e70488, #150458)',
  description: 'DataFrames, Series, I/O, filtering, groupby, merge and reshaping',
  sections: [
    {
      id: 'setup',
      title: 'Getting Started',
      snippets: [
        { code: `import pandas as pd
import numpy as np`, description: 'Standard imports', language: 'python' },
        { code: `pd.__version__     # check version
pd.set_option('display.max_columns', None)  # show all cols
pd.set_option('display.max_rows', 100)      # show 100 rows
pd.set_option('display.float_format', '{:.2f}'.format)`, description: 'Version and display options', language: 'python' },
      ]
    },
    {
      id: 'creating',
      title: 'Creating DataFrames & Series',
      snippets: [
        { code: `# From dict
df = pd.DataFrame({
    'name':  ['Alice', 'Bob', 'Charlie'],
    'age':   [30, 25, 35],
    'score': [85.5, 92.0, 78.3],
})

# From list of dicts
df = pd.DataFrame([
    {'a': 1, 'b': 2},
    {'a': 3, 'b': 4},
])

# Series
s = pd.Series([10, 20, 30], name='values')
s = pd.Series({'a': 1, 'b': 2, 'c': 3})`, description: 'Create DataFrame and Series', language: 'python' },
        { code: `# From NumPy array
df = pd.DataFrame(
    np.random.rand(3, 4),
    columns=['A', 'B', 'C', 'D']
)

# Range index
df = pd.DataFrame({'x': range(10)})

# Empty DataFrame with schema
df = pd.DataFrame(columns=['id', 'name', 'value'])`, description: 'DataFrame from arrays and empty', language: 'python' },
      ]
    },
    {
      id: 'reading-writing',
      title: 'Reading & Writing Data',
      snippets: [
        { code: `pd.read_csv('file.csv')
pd.read_csv('file.csv', sep='\t')            # TSV
pd.read_csv('file.csv', index_col='id')      # set index
pd.read_csv('file.csv', usecols=['a','b'])   # select cols
pd.read_csv('file.csv', nrows=100)           # first 100 rows
pd.read_csv('file.csv', na_values=['N/A'])   # custom NA`, description: 'Read CSV with options', language: 'python' },
        { code: `pd.read_excel('file.xlsx', sheet_name='Sheet1')
pd.read_json('file.json')
pd.read_parquet('file.parquet')     # fast columnar format
pd.read_sql(query, connection)      # from SQL DB
pd.read_html('http://example.com')[0]  # first table on page`, description: 'Read Excel, JSON, Parquet, SQL, HTML', language: 'python' },
        { code: `df.to_csv('out.csv', index=False)
df.to_excel('out.xlsx', sheet_name='Data', index=False)
df.to_json('out.json', orient='records')
df.to_parquet('out.parquet')
df.to_sql('table_name', engine, if_exists='replace')`, description: 'Write to various formats', language: 'python' },
      ]
    },
    {
      id: 'inspecting',
      title: 'Inspecting & Info',
      snippets: [
        { code: `df.head(5)       # first 5 rows (default)
df.tail(5)       # last 5 rows
df.sample(5)     # random 5 rows
df.shape         # (rows, cols) tuple
df.dtypes        # column data types
df.info()        # dtypes + non-null counts + memory
df.describe()    # stats: mean, std, min, max, quartiles
df.describe(include='all')  # include categorical
df.columns       # column names (Index)
df.index         # row index
len(df)          # number of rows
df.size          # total elements
df.nunique()     # unique values per column`, description: 'Quick inspection methods', language: 'python' },
        { code: `df.isnull().sum()           # missing per column
df.isnull().any(axis=1)     # rows with any missing
df.notnull()
df.value_counts()           # frequency count (Series)
df['col'].value_counts()    # freq count for a column
df['col'].unique()          # unique values array
df['col'].nunique()         # count unique values`, description: 'Missing values and unique counts', language: 'python' },
      ]
    },
    {
      id: 'selecting',
      title: 'Selecting & Indexing',
      snippets: [
        { code: `df['col']           # single column → Series
df[['a', 'b']]     # multiple columns → DataFrame
df.loc[0]          # row by label
df.loc[0:3]        # rows 0 to 3 (inclusive)
df.loc[:, 'col']   # all rows, one column
df.loc[df['age'] > 25, 'name']   # filtered rows, one col
df.iloc[0]         # row by position (int)
df.iloc[0:3]       # rows 0,1,2 (exclusive end)
df.iloc[:, 0:2]    # all rows, first 2 cols
df.at[0, 'name']   # fast scalar by label
df.iat[0, 0]       # fast scalar by position`, description: 'loc, iloc, at, iat indexing', language: 'python' },
        { code: `# Boolean filtering
df[df['age'] > 25]
df[(df['age'] > 25) & (df['score'] > 80)]
df[df['name'].isin(['Alice', 'Bob'])]
df[~df['name'].isin(['Alice'])]        # NOT in
df[df['col'].str.contains('pat')]      # string match
df[df['col'].notna()]                  # no missing values

# query() method (readable)
df.query('age > 25 and score > 80')
df.query('name in ["Alice", "Bob"]')
df.query('@threshold < age')           # use local var`, description: 'Boolean and query filtering', language: 'python' },
      ]
    },
    {
      id: 'cleaning',
      title: 'Cleaning & Transforming',
      snippets: [
        { code: `# Missing values
df.dropna()                    # drop rows with any NaN
df.dropna(subset=['col'])      # drop if col is NaN
df.dropna(how='all')           # drop only if ALL NaN
df.fillna(0)                   # fill all NaN with 0
df.fillna({'a': 0, 'b': 'N/A'}) # fill per column
df['col'].fillna(df['col'].mean())  # fill with mean
df.ffill()                     # forward fill
df.bfill()                     # backward fill`, description: 'Handling missing values', language: 'python' },
        { code: `# Type conversion
df['age'] = df['age'].astype(int)
df['date'] = pd.to_datetime(df['date'])
df['price'] = pd.to_numeric(df['price'], errors='coerce')

# String operations (via .str accessor)
df['name'].str.lower()
df['name'].str.upper()
df['name'].str.strip()
df['name'].str.replace('old', 'new')
df['name'].str.split(',', expand=True)  # split to cols
df['name'].str.contains('alice', case=False)
df['name'].str.len()                    # string length`, description: 'Type conversion and string operations', language: 'python' },
        { code: `# Add / modify columns
df['new_col'] = df['a'] + df['b']
df['label'] = df['score'].apply(lambda x: 'pass' if x >= 60 else 'fail')
df['ratio'] = df.apply(lambda row: row['a']/row['b'], axis=1)

# Rename columns
df.rename(columns={'old': 'new', 'a': 'alpha'}, inplace=True)
df.columns = ['a', 'b', 'c']    # set all at once

# Drop columns / rows
df.drop(columns=['col1', 'col2'])
df.drop(index=[0, 1, 2])
df.drop_duplicates()
df.drop_duplicates(subset=['name', 'age'])`, description: 'Adding, renaming, dropping columns', language: 'python' },
      ]
    },
    {
      id: 'groupby',
      title: 'GroupBy & Aggregation',
      snippets: [
        { code: `# Basic groupby
df.groupby('city')['salary'].mean()
df.groupby('city')['salary'].agg(['mean', 'std', 'count'])

# Multiple groupby keys
df.groupby(['city', 'dept'])['salary'].mean()

# agg with dict
df.groupby('dept').agg({
    'salary': ['mean', 'max'],
    'age': 'median',
})

# Named aggregation (pandas ≥0.25)
df.groupby('dept').agg(
    avg_salary=('salary', 'mean'),
    headcount=('name', 'count'),
)

# transform (same size as original)
df['dept_avg'] = df.groupby('dept')['salary'].transform('mean')

# filter (keep groups meeting condition)
df.groupby('dept').filter(lambda g: g['salary'].mean() > 50000)`, description: 'GroupBy aggregation, transform, filter', language: 'python' },
      ]
    },
    {
      id: 'merging',
      title: 'Merging & Joining',
      snippets: [
        { code: `# merge — like SQL JOIN
pd.merge(left, right, on='id')                    # inner join
pd.merge(left, right, on='id', how='left')         # left join
pd.merge(left, right, on='id', how='right')        # right join
pd.merge(left, right, on='id', how='outer')        # full outer
pd.merge(left, right, left_on='lid', right_on='rid')

# join — by index
df1.join(df2, how='left')

# concat — stack vertically or horizontally
pd.concat([df1, df2])                # stack rows
pd.concat([df1, df2], ignore_index=True)  # reset index
pd.concat([df1, df2], axis=1)        # stack columns
pd.concat([df1, df2], keys=['a','b']) # multi-level index`, description: 'merge, join, concat', language: 'python' },
      ]
    },
    {
      id: 'reshaping',
      title: 'Reshaping',
      snippets: [
        { code: `# pivot
df.pivot(index='date', columns='category', values='sales')

# pivot_table (with aggregation)
pd.pivot_table(df,
    values='sales',
    index='region',
    columns='category',
    aggfunc='sum',
    fill_value=0
)

# melt (wide → long)
pd.melt(df, id_vars=['id', 'name'],
    value_vars=['q1', 'q2', 'q3', 'q4'],
    var_name='quarter', value_name='revenue')

# stack / unstack
df.stack()        # cols → rows (wide → long)
df.unstack()      # rows → cols (long → wide)

# sort
df.sort_values('col', ascending=False)
df.sort_values(['a', 'b'], ascending=[True, False])
df.sort_index()`, description: 'pivot, melt, stack/unstack, sort', language: 'python' },
      ]
    },
    {
      id: 'datetime',
      title: 'DateTime Operations',
      snippets: [
        { code: `df['date'] = pd.to_datetime(df['date'])
df['date'].dt.year
df['date'].dt.month
df['date'].dt.day
df['date'].dt.weekday       # 0=Monday, 6=Sunday
df['date'].dt.day_name()    # 'Monday', 'Tuesday', ...
df['date'].dt.date          # date part only
df['date'].dt.strftime('%Y-%m')  # format

# Date arithmetic
df['date'] + pd.Timedelta(days=7)
(df['end'] - df['start']).dt.days  # difference in days

# Resample (time-series groupby)
df.set_index('date').resample('M')['sales'].sum()   # monthly
df.set_index('date').resample('W')['sales'].mean()  # weekly`, description: 'DateTime accessor and resample', language: 'python' },
      ]
    },
    {
      id: 'performance',
      title: 'Performance Tips',
      snippets: [
        { code: `# Use vectorized operations, avoid loops
df['result'] = df['a'] * df['b']          # vectorized ✅
# for i, row in df.iterrows(): ...        # slow ❌

# apply is slower than vectorized but more flexible
df['col'].apply(func)
df.apply(func, axis=1)  # row-wise

# Efficient alternatives
np.where(df['score'] > 80, 'pass', 'fail')  # fast conditional
df['col'].map({'A': 1, 'B': 2})              # fast dict mapping

# Memory optimization
df['cat_col'] = df['cat_col'].astype('category')  # save RAM
df['int_col'] = pd.to_numeric(df['int_col'], downcast='integer')

# Use query() for readable, sometimes faster filters
df.query('age > 25 and city == "NY"')`, description: 'Performance: vectorization, category dtype, query', language: 'python' },
      ]
    },
  ]
};
