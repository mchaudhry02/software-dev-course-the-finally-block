/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================

function processFile(fileName, fileData) {
  let fileHandle = null;
  try {
    // Step 2: Input Validation
    if(!fileName || fileName.trim() === '') {
      throw new ReferenceError('Error name is missing or empty');
    }

    // Validate: Non-string file data
    if (typeof fileData !== 'string') {
      throw new TypeError('File data must be a string');
    }

    // Validate: Empty string data
    if (fileData.trim() === '') {
      throw new Error('File data cannot be empty');
    }

    // Simulate opening a file (acquiring resource)
    fileHandle = {
      name: fileName,
      status: 'open',
      timestamp: new Date().toISOString()
    };
    
    // Simulated file processing here
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);
    
    // Simulated reading operation
    console.log('Reading file data... (${fileData.length} characters)');

    // Simulated writing operation
    console.log('Writing processed data to virtual library... ');

    // Sucess message
    console.log('File processed sucessfully: ${fileName}\n');
    
  } catch (err) {
    // Step 1 & 2 error handling
    console.error('Error occurred: ${err.name}');
    console.error('  Message: ${err.message}\n');
  } finally {
    // Step 3:finally block - Always executes
    console.log('Cleanup: Executing finally block... ');

    //Closs file handle if it was opened
    if (fileHandle) {
      fileHandle.status = 'closed';
      console.log('File handle closed: ${fileHandle.name}');
    } else {
      console.log('No file handle to close (resource never acquired)');
    }
    console.log('Finally block executed\n');
    console.log('─'.repeat(50) + '\n');
  }
  
}


//Test Cases
// ============================================

console.log('='.repeat(50));
console.log('TESTING FILE PROCESSING SYSTEM');
console.log('='.repeat(50) + '\n');

console.log('TEST 1: Missing file name');
processFile(); // ReferenceError: File name is missing

console.log('TEST 2: Non-string file data');
processFile("myFile.txt", 42); //TypeError: File data must be a string

console.log('TEST 3: Empty string data');
processFile("myFile.txt", ""); //Error: File data cannot be empty

console.log('TEST 4: Successful processing');
processFile("myFile.txt", "Hello, world!"); //Should process successfully

console.log('TEST 5: Null file name');
processFile(null, "Some data"); //ReferenceError

console.log('TEST 6: Whitespace-only data');
processFile("document.txt", "   "); // Error: Empty data

console.log('TEST 7: Valid large file');
processFile("library-catalog.txt", "Book Title: The Great Adventure\nAuthor: Jane Doe\nISBN: 123-456"); //Success
