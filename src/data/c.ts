import { Category } from './types';

export const cData: Category = {
  id: 'c',
  title: 'C Language',
  icon: '©️',
  color: '#a8b9cc',
  gradient: 'linear-gradient(135deg, #283593, #a8b9cc)',
  description: 'C fundamentals, pointers, memory, structs, and file I/O',
  sections: [
    {
      id: 'basics',
      title: 'Basics & Data Types',
      snippets: [
        { code: `// Data Types
int    a = 10;         // 4 bytes
float  b = 3.14f;      // 4 bytes
double c = 3.14;       // 8 bytes
char   d = 'A';        // 1 byte
long   e = 100000L;    // 8 bytes
short  f = 32767;      // 2 bytes
unsigned int g = 42;   // no negatives

// Constants
#define PI 3.14159
const int MAX = 100;

// Type casting
int x = (int)3.9;     // x = 3 (truncates)`, description: 'Data types and constants', language: 'c' },
        { code: `// Input / Output
#include <stdio.h>

printf("Hello, %s!\\n", name);
printf("Int: %d, Float: %.2f\\n", a, b);
scanf("%d", &x);       // read int
scanf("%s", str);      // read string (no &)

// Format specifiers
// %d  - int          %f  - float
// %lf - double       %c  - char
// %s  - string       %p  - pointer
// %x  - hex          %o  - octal
// %ld - long         %u  - unsigned`, description: 'printf / scanf format specifiers', language: 'c' },
      ]
    },
    {
      id: 'control-flow',
      title: 'Control Flow',
      snippets: [
        { code: `// If / else
if (x > 0) {
    printf("positive");
} else if (x == 0) {
    printf("zero");
} else {
    printf("negative");
}

// Ternary
int abs_x = (x >= 0) ? x : -x;

// Switch
switch (ch) {
    case 'a': printf("A"); break;
    case 'b': printf("B"); break;
    default:  printf("other");
}`, description: 'Conditionals and switch', language: 'c' },
        { code: `// Loops
for (int i = 0; i < n; i++) { }

while (condition) {
    // ...
    break;    // exit
    continue; // next iteration
}

do {
    // runs at least once
} while (condition);

// goto (avoid in practice)
goto label;
label:
    printf("jumped here");`, description: 'Loops and goto', language: 'c' },
      ]
    },
    {
      id: 'arrays-strings',
      title: 'Arrays & Strings',
      snippets: [
        { code: `// Arrays
int arr[5] = {1, 2, 3, 4, 5};
int matrix[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
int n = sizeof(arr) / sizeof(arr[0]); // length

// Array decay: arr == &arr[0]
// Passing to function
void print_arr(int *arr, int n) {
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
}`, description: 'Arrays and 2D arrays', language: 'c' },
        { code: `// Strings (char arrays)
#include <string.h>
char s[] = "Hello";
char *p = "World";   // string literal (read-only)

strlen(s)            // length (excl. '\\0')
strcpy(dst, src)     // copy src to dst
strncpy(dst, src, n) // safe copy, max n chars
strcat(dst, src)     // concatenate
strcmp(s1, s2)       // 0 if equal
strncmp(s1, s2, n)   // compare n chars
strchr(s, 'e')       // pointer to first 'e'
strstr(s, "ll")      // pointer to substring`, description: 'String operations with string.h', language: 'c' },
      ]
    },
    {
      id: 'pointers',
      title: 'Pointers & Memory',
      snippets: [
        { code: `// Pointer basics
int x = 10;
int *p = &x;    // p holds address of x
*p = 20;        // dereference — x is now 20
p++;            // move to next int address

// Pointer arithmetic
int arr[] = {10, 20, 30};
int *ptr = arr;
*(ptr + 1)      // 20 — same as arr[1]

// Null pointer
int *np = NULL;
if (np != NULL) { /* safe */ }

// const with pointers
const int *cp = &x;  // can't change *cp
int * const pc = &x; // can't change pc (address)`, description: 'Pointer basics and arithmetic', language: 'c' },
        { code: `// Dynamic memory (heap)
#include <stdlib.h>
int *arr = malloc(n * sizeof(int));
int *arr = calloc(n, sizeof(int));  // zero-init
arr = realloc(arr, new_size);
free(arr);         // always free!
arr = NULL;        // prevent dangling pointer

// Common pitfalls
// 1. Memory leak — forgetting to free
// 2. Dangling pointer — using after free
// 3. Double free — freeing twice
// 4. Buffer overflow — writing past bounds`, description: 'Dynamic memory allocation', language: 'c' },
        { code: `// Function pointers
int add(int a, int b) { return a + b; }
int (*fp)(int, int) = add;
fp(3, 4);   // 7

// typedef for readability
typedef int (*Op)(int, int);
Op operation = add;
operation(5, 3);   // 8`, description: 'Function pointers', language: 'c' },
      ]
    },
    {
      id: 'structs',
      title: 'Structs & Unions',
      snippets: [
        { code: `// Struct
struct Point {
    int x;
    int y;
};

struct Point p1 = {3, 4};
p1.x = 10;

// Pointer to struct
struct Point *ptr = &p1;
ptr->x = 20;   // arrow operator

// typedef
typedef struct {
    char name[50];
    int age;
} Person;

Person p = {"Alice", 30};`, description: 'Struct definition and usage', language: 'c' },
        { code: `// Union (shares memory)
union Data {
    int  i;
    float f;
    char  c;
};

union Data d;
d.i = 10;    // setting int
d.f = 3.14;  // overwrites same memory

// Enum
typedef enum {
    MON, TUE, WED, THU, FRI, SAT, SUN
} Day;
Day today = WED;  // today == 2`, description: 'Union and enum', language: 'c' },
      ]
    },
    {
      id: 'file-io',
      title: 'File I/O',
      snippets: [
        { code: `// File operations
#include <stdio.h>
FILE *fp = fopen("file.txt", "r");  // modes: r,w,a,r+,w+,a+
if (fp == NULL) { /* handle error */ }

// Reading
char ch = fgetc(fp);
char line[256];
fgets(line, sizeof(line), fp);
fscanf(fp, "%d", &num);

// Writing
fputc('A', fp);
fputs("hello\\n", fp);
fprintf(fp, "Value: %d\\n", x);

// Binary
fread(&data, sizeof(data), 1, fp);
fwrite(&data, sizeof(data), 1, fp);

fclose(fp);  // always close!`, description: 'File read/write operations', language: 'c' },
      ]
    },
    {
      id: 'preprocessor',
      title: 'Preprocessor',
      snippets: [
        { code: `// Macros
#define MAX(a,b) ((a) > (b) ? (a) : (b))
#define SQUARE(x) ((x)*(x))

// Include guards
#ifndef MYHEADER_H
#define MYHEADER_H
// ... header content ...
#endif

// Conditional compilation
#ifdef DEBUG
    printf("debug mode\\n");
#endif

// Predefined macros
__FILE__   // current filename
__LINE__   // current line number
__DATE__   // compile date
__func__   // current function name`, description: 'Macros, include guards, conditional compilation', language: 'c' },
      ]
    },
  ]
};
