// Just a concatenation of some of the snippets from https://en.wikipedia.org/wiki/C_syntax

enum colors { RED, GREEN, BLUE = 5, YELLOW } paint_color;

struct thing {
    int num;
}; /* thing struct type is now completed */

typedef struct Bert Bert;
typedef struct Wilma Wilma;

struct Bert {
    Wilma *wilma;
};

struct Wilma {
    Bert *bert;
};

union u {
    int   x;
    float y;
    char  *z;
} n;

struct f {
    unsigned int  flag : 1;  /* a bit flag: can either be on (1) or off (0) */
    signed int    num  : 4;  /* a signed 4-bit field; range -7...7 or -8...7 */
    signed int         : 3;  /* 3 bits of padding to round out to 8 bits */
} g;

void func() {
    int *p;
    int a, b;
    int (*ptr_to_array)[100] = &array;

    a = 10;
    p = &a;
    b = *p;
    a = malloc(n * sizeof(int));
    a[3] = 10;

    for (int i = 0; i < limit; ++i) {
        printf("helloworld.c: %d: Hello world\n", i);
    }
}

int (*operation)(int x, int y);

int add(int x, int y)
{
    return x + y;
}

int subtract(int x, int y)
{
    return x - y;
}

int main(int argc, char* args[])
{
   int  foo = 1, bar = 1;

   operation = add;
   printf("%d + %d = %d\n", foo, bar, operation(foo, bar));
   operation = subtract;
   printf("%d - %d = %d\n", foo, bar, operation(foo, bar));
   return 0;
}
