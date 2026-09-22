# Graph3D

One of my favourite pieces of software is the graphing calculator [Desmos](www.desmos.com/calculator). It is beautifully simple and yet immensely powerful. \
Their 3D renderer however, does not have the same universal flexibility that makes Desmos so popular. \
The standard approach to drawing 3D equations is to sample the function at regular intervals, and construct a mesh to join these points. This produces decent quality on basic equations but struggles with more complex forms. I find this unsatisfying.

We need a different approach. In this project, I use a form of ray tracing.

### How to find the intersection between a ray and the surface $f(x, y, z) = 0$

Graph3D uses *interval arithmetic*. Here we deal we intervals in the form $[a,b]$ where $a\leq b$. \
Let us first determine *if* an interval contains a solution to a function:

> If $f(a) < 0$ and $f(b) > 0$, there exists a solution $x$ in the interval $[a,b]$ such that $f(x) = 0$.

Or alternatively,
> Let $[s,t] = f([a,b])$. $[a,b]$ contains a solution if $[s,t]$ contains $0$.

Great. But what if our function changes direction between $a$ and $b$?

--- insert diagram --

Let's construct our output interval differently. Instead of \
$s=f(a)$ \
$t=f(b)$ \
we need \
$s=min(f(x)) \quad where  \ a \leq x \leq b$ \
$t=max(f(x)) \quad where  \ a \leq x \leq b$ \
Or in words: the output interval must enclose *all* values of our function over our input interval.

By manually constructing interval-arithmetic versions of atomic functions, we can compute solutions of any function that is compose of our atomic building blocks. \
Constructing these functions is an interesting problem, as they can become reasonably complex. For example, I implemented interval-arithmetic $cos$ in the following way: 

```glsl
// GLSL

#define ifloat vec2
ifloat icos2(ifloat a) {
    ifloat section = floor(a / PI);
    ifloat cosed = cos(a);
    if (abs(section.s - section.t) < SMALL) { 
        // upper and lower are in the same section
        return ifloat(min(cosed.s, cosed.t), max(cosed.s, cosed.t));
    } else if (abs(section.s - section.t) - 1. < SMALL) {
        // adjacent sections
        if (mod(section.s, 2.) > mod(section.t, 2.)) {
            // lower is in an increasing section, and upper is in the next section (decreasing)
            return ifloat(min(cosed.s, cosed.t), 1.);
        } else {
            // lower is in a decreasing section
            return ifloat(-1., max(cosed.s, cosed.t));
        }
    } else {
        // non adjacent sections
        return ifloat(-1., 1.);
    }
}
```

Moving from 1D inputs to 3D inputs is reasonable trivial. Having done this, we can now determine if a section of our ray intersects the graph. \
To determine *where* the solution is, we can simply bisect the ray, test its parts, and repeat until we find an appropriately small interval that contains a solution. 

