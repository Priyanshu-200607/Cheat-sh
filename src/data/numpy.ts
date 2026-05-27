import { Category } from './types';

export const numpyData: Category = {
  id: 'numpy',
  title: 'NumPy',
  icon: '🔢',
  color: '#4dabcf',
  gradient: 'linear-gradient(135deg, #4dabcf, #013243)',
  description: 'NumPy array operations, math, indexing, and statistics',
  sections: [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Import NumPy and basic setup',
      snippets: [
        { code: `import numpy as np`, description: 'Import NumPy — the standard alias', language: 'python' },
      ]
    },
    {
      id: 'importing-exporting',
      title: 'Importing / Exporting',
      snippets: [
        { code: `np.loadtxt('file.txt')`, description: 'From a text file', language: 'python' },
        { code: `np.genfromtxt('file.csv', delimiter=',')`, description: 'From a CSV file', language: 'python' },
        { code: `np.savetxt('file.txt', arr, delimiter=' ')`, description: 'Writes to a text file', language: 'python' },
        { code: `np.savetxt('file.csv', arr, delimiter=',')`, description: 'Writes to a CSV file', language: 'python' },
      ]
    },
    {
      id: 'creating-arrays',
      title: 'Creating Arrays',
      snippets: [
        { code: `np.array([1, 2, 3])`, description: 'One dimensional array', language: 'python' },
        { code: `np.array([(1,2,3),(4,5,6)])`, description: 'Two dimensional array', language: 'python' },
        { code: `np.zeros(3)`, description: '1D array of length 3, all values 0', language: 'python' },
        { code: `np.ones((3, 4))`, description: '3×4 array with all values 1', language: 'python' },
        { code: `np.eye(5)`, description: '5×5 identity matrix (1 on diagonal, 0 elsewhere)', language: 'python' },
        { code: `np.linspace(0, 100, 6)`, description: 'Array of 6 evenly divided values from 0 to 100', language: 'python' },
        { code: `np.arange(0, 10, 3)`, description: 'Array from 0 to <10 with step 3 → [0,3,6,9]', language: 'python' },
        { code: `np.full((2, 3), 8)`, description: '2×3 array with all values 8', language: 'python' },
        { code: `np.random.rand(4, 5)`, description: '4×5 array of random floats between 0–1', language: 'python' },
        { code: `np.random.rand(6, 7) * 100`, description: '6×7 array of random floats between 0–100', language: 'python' },
        { code: `np.random.randint(5, size=(2, 3))`, description: '2×3 array with random ints between 0–4', language: 'python' },
      ]
    },
    {
      id: 'inspecting',
      title: 'Inspecting Properties',
      snippets: [
        { code: `arr.size`, description: 'Returns number of elements in arr', language: 'python' },
        { code: `arr.shape`, description: 'Returns dimensions of arr (rows, columns)', language: 'python' },
        { code: `arr.dtype`, description: 'Returns type of elements in arr', language: 'python' },
        { code: `arr.astype(dtype)`, description: 'Convert arr elements to type dtype', language: 'python' },
        { code: `arr.tolist()`, description: 'Convert arr to a Python list', language: 'python' },
        { code: `np.info(np.eye)`, description: 'View documentation for np.eye', language: 'python' },
      ]
    },
    {
      id: 'copy-sort-reshape',
      title: 'Copying / Sorting / Reshaping',
      snippets: [
        { code: `np.copy(arr)`, description: 'Copies arr to new memory', language: 'python' },
        { code: `arr.view(dtype)`, description: 'Creates view of arr elements with type dtype', language: 'python' },
        { code: `arr.sort()`, description: 'Sorts arr in place', language: 'python' },
        { code: `arr.sort(axis=0)`, description: 'Sorts specific axis of arr', language: 'python' },
        { code: `two_d_arr.flatten()`, description: 'Flattens 2D array to 1D', language: 'python' },
        { code: `arr.T`, description: 'Transposes arr (rows become columns and vice versa)', language: 'python' },
        { code: `arr.reshape(3, 4)`, description: 'Reshapes arr to 3 rows, 4 columns without changing data', language: 'python' },
        { code: `arr.resize((5, 6))`, description: 'Changes arr shape to 5×6 and fills new values with 0', language: 'python' },
      ]
    },
    {
      id: 'adding-removing',
      title: 'Adding / Removing Elements',
      snippets: [
        { code: `np.append(arr, values)`, description: 'Appends values to end of arr', language: 'python' },
        { code: `np.insert(arr, 2, values)`, description: 'Inserts values into arr before index 2', language: 'python' },
        { code: `np.delete(arr, 3, axis=0)`, description: 'Deletes row on index 3 of arr', language: 'python' },
        { code: `np.delete(arr, 4, axis=1)`, description: 'Deletes column on index 4 of arr', language: 'python' },
      ]
    },
    {
      id: 'combining-splitting',
      title: 'Combining / Splitting',
      snippets: [
        { code: `np.concatenate((arr1, arr2), axis=0)`, description: 'Adds arr2 as rows to the end of arr1', language: 'python' },
        { code: `np.concatenate((arr1, arr2), axis=1)`, description: 'Adds arr2 as columns to end of arr1', language: 'python' },
        { code: `np.split(arr, 3)`, description: 'Splits arr into 3 sub-arrays', language: 'python' },
        { code: `np.hsplit(arr, 5)`, description: 'Splits arr horizontally on the 5th index', language: 'python' },
      ]
    },
    {
      id: 'indexing-slicing',
      title: 'Indexing / Slicing / Subsetting',
      snippets: [
        { code: `arr[5]`, description: 'Returns the element at index 5', language: 'python' },
        { code: `arr[2, 5]`, description: 'Returns the 2D array element on index [2][5]', language: 'python' },
        { code: `arr[1] = 4`, description: 'Assigns array element on index 1 the value 4', language: 'python' },
        { code: `arr[1, 3] = 10`, description: 'Assigns array element on index [1][3] the value 10', language: 'python' },
        { code: `arr[0:3]`, description: 'Returns elements at indices 0,1,2 (On 2D: rows 0,1,2)', language: 'python' },
        { code: `arr[0:3, 4]`, description: 'Returns elements on rows 0,1,2 at column 4', language: 'python' },
        { code: `arr[:2]`, description: 'Returns elements at indices 0,1 (On 2D: rows 0,1)', language: 'python' },
        { code: `arr[:, 1]`, description: 'Returns elements at index 1 on all rows', language: 'python' },
        { code: `arr < 5`, description: 'Returns an array with boolean values', language: 'python' },
        { code: `(arr1 < 3) & (arr2 > 5)`, description: 'Returns an array with boolean values (element-wise)', language: 'python' },
        { code: `~arr`, description: 'Inverts a boolean array', language: 'python' },
        { code: `arr[arr < 5]`, description: 'Returns array elements smaller than 5', language: 'python' },
      ]
    },
    {
      id: 'vector-math',
      title: 'Vector Math',
      snippets: [
        { code: `np.add(arr1, arr2)`, description: 'Elementwise add arr2 to arr1', language: 'python' },
        { code: `np.subtract(arr1, arr2)`, description: 'Elementwise subtract arr2 from arr1', language: 'python' },
        { code: `np.multiply(arr1, arr2)`, description: 'Elementwise multiply arr1 by arr2', language: 'python' },
        { code: `np.divide(arr1, arr2)`, description: 'Elementwise divide arr1 by arr2', language: 'python' },
        { code: `np.power(arr1, arr2)`, description: 'Elementwise raise arr1 to the power of arr2', language: 'python' },
        { code: `np.array_equal(arr1, arr2)`, description: 'Returns True if arrays have same elements and shape', language: 'python' },
        { code: `np.sqrt(arr)`, description: 'Square root of each element', language: 'python' },
        { code: `np.sin(arr)`, description: 'Sine of each element', language: 'python' },
        { code: `np.log(arr)`, description: 'Natural log of each element', language: 'python' },
        { code: `np.abs(arr)`, description: 'Absolute value of each element', language: 'python' },
        { code: `np.ceil(arr)`, description: 'Rounds up to the nearest int', language: 'python' },
        { code: `np.floor(arr)`, description: 'Rounds down to the nearest int', language: 'python' },
        { code: `np.round(arr)`, description: 'Rounds to the nearest int', language: 'python' },
      ]
    },
    {
      id: 'scalar-math',
      title: 'Scalar Math',
      snippets: [
        { code: `np.add(arr, 1)`, description: 'Add 1 to each array element', language: 'python' },
        { code: `np.subtract(arr, 2)`, description: 'Subtract 2 from each array element', language: 'python' },
        { code: `np.multiply(arr, 3)`, description: 'Multiply each array element by 3', language: 'python' },
        { code: `np.divide(arr, 4)`, description: 'Divide each array element by 4 (np.nan for ÷0)', language: 'python' },
        { code: `np.power(arr, 5)`, description: 'Raise each array element to the 5th power', language: 'python' },
      ]
    },
    {
      id: 'statistics',
      title: 'Statistics',
      snippets: [
        { code: `np.mean(arr, axis=0)`, description: 'Returns mean along specific axis', language: 'python' },
        { code: `arr.sum()`, description: 'Returns sum of arr', language: 'python' },
        { code: `arr.min()`, description: 'Returns minimum value of arr', language: 'python' },
        { code: `arr.max(axis=0)`, description: 'Returns maximum value of specific axis', language: 'python' },
        { code: `np.var(arr)`, description: 'Returns the variance of array', language: 'python' },
        { code: `np.std(arr, axis=1)`, description: 'Returns the standard deviation of specific axis', language: 'python' },
        { code: `arr.corrcoef()`, description: 'Returns correlation coefficient of array', language: 'python' },
      ]
    },
  ]
};
