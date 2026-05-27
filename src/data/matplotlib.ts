import { Category } from './types';

export const matplotlibData: Category = {
  id: 'matplotlib',
  title: 'Matplotlib',
  icon: '📊',
  color: '#11557c',
  gradient: 'linear-gradient(135deg, #11557c, #e15759)',
  description: 'Matplotlib and Seaborn — plotting, subplots, styling and saving figures',
  sections: [
    {
      id: 'setup',
      title: 'Setup & Basics',
      snippets: [
        { code: `import matplotlib.pyplot as plt
import matplotlib as mpl
import numpy as np

# Jupyter inline display
%matplotlib inline
# Or for interactive plots
%matplotlib widget`, description: 'Standard imports', language: 'python' },
        { code: `# Figure and Axes — the two main objects
fig, ax = plt.subplots()            # single plot
fig, ax = plt.subplots(figsize=(10, 6))  # set size (inches)

# Show and save
plt.show()
plt.savefig('plot.png', dpi=150, bbox_inches='tight')
plt.savefig('plot.pdf')             # vector format
plt.close()                         # free memory
plt.close('all')                    # close all figures`, description: 'Figure creation, show, save, close', language: 'python' },
      ]
    },
    {
      id: 'basic-plots',
      title: 'Basic Plot Types',
      snippets: [
        { code: `x = np.linspace(0, 2*np.pi, 100)
y = np.sin(x)

# Line plot
ax.plot(x, y)
ax.plot(x, y, color='blue', linewidth=2, linestyle='--', label='sin(x)')

# Scatter plot
ax.scatter(x, y, s=20, c='red', alpha=0.5, marker='o')

# Bar chart
categories = ['A', 'B', 'C', 'D']
values = [3, 7, 2, 5]
ax.bar(categories, values, color='steelblue', edgecolor='black')
ax.barh(categories, values)   # horizontal bars

# Histogram
data = np.random.randn(1000)
ax.hist(data, bins=30, color='teal', edgecolor='white', alpha=0.7)`, description: 'Line, scatter, bar, histogram', language: 'python' },
        { code: `# Box plot
data1 = np.random.randn(100)
data2 = np.random.randn(100) + 1
data3 = np.random.randn(100) - 1
ax.boxplot([data1, data2, data3], labels=['A', 'B', 'C'])

# Pie chart
ax.pie(values, labels=categories, autopct='%1.1f%%', startangle=90)

# Fill between
y1 = np.sin(x)
y2 = np.cos(x)
ax.fill_between(x, y1, y2, alpha=0.3, color='green')

# Step plot
ax.step(x, y, where='mid')

# Error bars
ax.errorbar(x, y, yerr=0.1, fmt='o', capsize=5)

# Image / heatmap
matrix = np.random.rand(10, 10)
im = ax.imshow(matrix, cmap='viridis', aspect='auto')
fig.colorbar(im, ax=ax)`, description: 'Box, pie, fill_between, imshow', language: 'python' },
      ]
    },
    {
      id: 'subplots',
      title: 'Subplots & Layouts',
      snippets: [
        { code: `# Grid of subplots
fig, axes = plt.subplots(2, 3, figsize=(12, 8))
axes[0, 0].plot(x, y)          # access by grid position
axes[1, 2].scatter(x, y)

# Flat iteration
for ax in axes.flat:
    ax.set_xlabel('x')

# Share axes
fig, axes = plt.subplots(1, 2, sharey=True, figsize=(10, 4))

# Tight layout (auto-fix overlapping)
plt.tight_layout()
plt.tight_layout(pad=2.0)

# Custom layout with gridspec
from matplotlib.gridspec import GridSpec
fig = plt.figure(figsize=(12, 8))
gs = GridSpec(2, 3, figure=fig)
ax1 = fig.add_subplot(gs[0, :])   # span full top row
ax2 = fig.add_subplot(gs[1, 0:2]) # span 2 cols
ax3 = fig.add_subplot(gs[1, 2])`, description: 'Subplots, GridSpec, shared axes', language: 'python' },
      ]
    },
    {
      id: 'styling',
      title: 'Styling & Customization',
      snippets: [
        { code: `# Labels, title, legend
ax.set_xlabel('X Axis Label', fontsize=12)
ax.set_ylabel('Y Axis Label', fontsize=12)
ax.set_title('Plot Title', fontsize=14, fontweight='bold')
ax.legend(loc='upper right')       # loc options: best, upper left, etc.
ax.legend(loc='upper right', framealpha=0.5, fontsize=10)

# Axis limits and ticks
ax.set_xlim(0, 10)
ax.set_ylim(-1, 1)
ax.set_xticks([0, 2, 4, 6, 8, 10])
ax.set_xticklabels(['zero', '2', '4', '6', '8', 'ten'], rotation=45)
ax.tick_params(axis='both', labelsize=10)

# Grid
ax.grid(True, linestyle='--', alpha=0.7)
ax.grid(axis='y')`, description: 'Labels, legend, ticks, grid', language: 'python' },
        { code: `# Colors
# Named: 'red', 'blue', 'green', 'orange', 'purple'
# Hex: '#FF5733'
# RGB tuple: (0.1, 0.5, 0.9)
# RGBA: (0.1, 0.5, 0.9, 0.5)
# Colormap string: 'viridis', 'plasma', 'Blues', 'RdYlGn'

# Line styles: '-', '--', ':', '-.'
# Markers: 'o', 's', '^', 'D', '*', '+', 'x', '.'

# Built-in styles
plt.style.use('seaborn-v0_8-darkgrid')  # popular
plt.style.use('ggplot')
plt.style.use('fivethirtyeight')
plt.style.use('dark_background')
plt.style.available            # list all styles

# Global rcParams
plt.rcParams['font.size'] = 12
plt.rcParams['axes.linewidth'] = 1.5
plt.rcParams['figure.facecolor'] = '#0d1117'`, description: 'Colors, styles, rcParams', language: 'python' },
        { code: `# Annotations and text
x_peak = np.pi / 2
y_peak = 1.0
ax.annotate('Peak', xy=(x_peak, y_peak),
            xytext=(x_peak+0.5, y_peak+0.1),
            arrowprops=dict(arrowstyle='->', color='red'),
            fontsize=11)
ax.text(0.5, 0.5, 'Label', transform=ax.transAxes,
        ha='center', va='center', fontsize=12)
ax.axhline(y=0, color='black', linewidth=1)  # horizontal line
ax.axvline(x=0, color='black', linewidth=1)  # vertical line
ax.axhspan(ymin=-0.5, ymax=0.5, alpha=0.2, color='yellow')  # shaded band`, description: 'Annotations, reference lines, shading', language: 'python' },
      ]
    },
    {
      id: 'seaborn',
      title: 'Seaborn (Statistical Plots)',
      snippets: [
        { code: `import seaborn as sns

# Load example dataset
df = sns.load_dataset('tips')

# Distribution plots
sns.histplot(df['total_bill'], kde=True)
sns.kdeplot(df['total_bill'], fill=True)
sns.boxplot(x='day', y='total_bill', data=df)
sns.violinplot(x='day', y='total_bill', data=df)

# Relationship plots
sns.scatterplot(x='total_bill', y='tip', hue='sex', data=df)
sns.lineplot(x='size', y='total_bill', data=df)
sns.regplot(x='total_bill', y='tip', data=df)  # + regression line

# Categorical plots
sns.barplot(x='day', y='total_bill', data=df, errorbar='sd')
sns.countplot(x='day', data=df)
sns.stripplot(x='day', y='total_bill', data=df, jitter=True)`, description: 'Seaborn distribution and categorical plots', language: 'python' },
        { code: `# Heatmap (correlation matrix)
corr = df.select_dtypes('number').corr()  # numeric cols only
sns.heatmap(corr, annot=True, fmt='.2f', cmap='coolwarm',
            center=0, square=True)

# Pairplot (scatter matrix)
sns.pairplot(df, hue='sex')

# FacetGrid (multi-panel)
g = sns.FacetGrid(df, col='sex', row='day')
g.map(sns.scatterplot, 'total_bill', 'tip')

# Style and themes
sns.set_style('whitegrid')       # darkgrid, white, ticks
sns.set_context('paper')         # paper, notebook, talk, poster
sns.set_palette('deep')          # muted, pastel, bright, Set1

# Figure-level vs Axes-level
# Figure-level: returns FacetGrid (handles layout)
#   sns.relplot, sns.displot, sns.catplot
# Axes-level: works on existing ax
#   sns.scatterplot(ax=ax, ...)`, description: 'Heatmap, pairplot, FacetGrid, themes', language: 'python' },
      ]
    },
    {
      id: 'quick-patterns',
      title: 'Quick Patterns',
      snippets: [
        { code: `# Complete example: publication-quality plot
fig, ax = plt.subplots(figsize=(8, 5))

x = np.linspace(0, 2*np.pi, 200)
ax.plot(x, np.sin(x), label='sin(x)', color='#58a6ff', linewidth=2)
ax.plot(x, np.cos(x), label='cos(x)', color='#ff7b72', linewidth=2)

ax.set_xlabel('Angle (radians)', fontsize=12)
ax.set_ylabel('Value', fontsize=12)
ax.set_title('Trigonometric Functions', fontsize=14, pad=10)
ax.legend(framealpha=0.8, loc='upper right')
ax.set_xlim(0, 2*np.pi)
ax.set_xticks([0, np.pi/2, np.pi, 3*np.pi/2, 2*np.pi])
ax.set_xticklabels(['0', 'π/2', 'π', '3π/2', '2π'])
ax.grid(True, linestyle='--', alpha=0.4)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

plt.tight_layout()
plt.savefig('trig.png', dpi=150, bbox_inches='tight')`, description: 'Full publication-quality plot example', language: 'python' },
      ]
    },
  ]
};
