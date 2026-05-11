# in this video, we study about Bufferpool 

1. Buffer.poolSize in node sets the size of internal memory i.e. 8kiB.
2. It enhances performance by reducing the overhead of constant memory allocation for numerous small data chunks.

3. allocUnsafe creates an ArrayBuffer of same size as Bufferpool i.e. 8kiB (8192 bytes).
4. allocUnsafe creates an buferpool based on the condition that allocatedsize must be less than half of 8192 i.e. 8kiB.

5. 