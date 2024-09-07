/* eslint no-undef: "off" */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

const componentDir = path.join(__dirname, '../src/components', componentName);
const tsFilePath = path.join(componentDir, `${componentName}.ts`);
const htmlFilePath = path.join(componentDir, `${componentName}.html`);
const cssFilePath = path.join(componentDir, `${componentName}.css`);

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

fs.writeFileSync(
  tsFilePath,
  `// TypeScript code for ${componentName} component\n`,
  'utf8'
);

fs.writeFileSync(
  htmlFilePath,
  `<!-- HTML code for ${componentName} component -->\n`,
  'utf8'
);

fs.writeFileSync(
  cssFilePath,
  `/* CSS styles for ${componentName} component */\n`,
  'utf8'
);

console.log(`Component ${componentName} created successfully.`);
