1. Computers represent numbers in binary. But binary alone doesn't indicate whether a number is positive or negative
2. For that we have signed and unsigned values concept

3. Unsigned only store positive values
4. 8-bit Unsigned Range:
0 to 255 (2⁸ = 256 possible values)

5. Signed Binary used to represent both positive and negative numbers.
6. The most significant bit (MSB) is reserved as the sign bit:

0 → positive number

1 → negative number

7. 8-bit Signed Range:
-128 to +127
(Still 256 values, but split between negative and positive)

8. If MSB is 1, it is assumed to be negative, and system uses 2’s complement to get the actual value.
9. To find 2's complement of a binary number:

Flip all bits (i.e., 0 → 1, 1 → 0)

Add 1 to the result

2 -> 0000 0010
2's complement -> 1111 1101 + 1 => 1111 1110
