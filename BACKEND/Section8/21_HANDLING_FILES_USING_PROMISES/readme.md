# in this lecture, i study about how to use promise wala version to handle files

1. we need to change our import statement to :
   **import fs from "fs/promises";**

2. To open a file , we use :
   **const fileHandle = await fs.open("chars.txt", "w+");**

3. To read a file, we use :
   **const data = await fileHandle.read("abc");**

4. To close a file , we use:
   **fileHandle.close();**
