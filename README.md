# Working with arrays

## Memory address

Each box has a number written on the front, starting with 0 for the 1st box, then 1 for the 2nd box, 2 for the 3rd box, and so on.

## Memory Module

Javascript doesn't give you direct access to the underlying memory in system.

get(ptr) - returns the value stored at a certain memory address (ptr is shorthand for pointer: variables containing memory addresses are known as pointers)
set(ptr, value) - sets the value stored at a certain memory address
allocate(size) - reserves a contiguous block of memory consisting of size boxes which you can safely modify, returning a pointer to the 1st box or null if the allocation fails
free(ptr) - frees the block of memory reserved using allocate
copy(to, from, size) - copies size boxes of data from the from pointer to the to pointer (for example, copy(10, 0, 3) would copy the values at boxes 0, 1 and 2 to the boxes at 10, 11 and 12 respectively)