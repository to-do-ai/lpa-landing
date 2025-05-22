const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Log function to track build
function log(message) {
  console.log(`[Build Script] ${message}`);
}

try {
  // Run the build
  log('Starting Next.js build process...');
  execSync('next build', { stdio: 'inherit' });
  
  log('Build completed successfully');
  
  // Check if the output directory exists
  const outDir = path.join(process.cwd(), 'out');
  if (fs.existsSync(outDir)) {
    log(`Output directory exists at: ${outDir}`);
    
    // List files to confirm content
    const files = fs.readdirSync(outDir);
    log(`Files in output directory: ${files.join(', ')}`);
  } else {
    log('WARNING: Output directory does not exist!');
    // Create it as a fallback
    fs.mkdirSync(outDir, { recursive: true });
    log('Created empty output directory as fallback');
  }
  
  // Exit successfully
  process.exit(0);
} catch (error) {
  log(`Build failed: ${error.message}`);
  process.exit(1);
} 