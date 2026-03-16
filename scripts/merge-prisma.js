const fs = require("fs");
const path = require("path");

const prismaDir = path.join(__dirname, "../prisma");
const outputFile = path.join(prismaDir, "schema.generated.prisma");

let mergedSchema = "";

// Base schema
mergedSchema += fs.readFileSync(
  path.join(prismaDir, "schema.prisma"),
  "utf8"
);

// Scan folders
const folders = fs.readdirSync(prismaDir);

folders.forEach(folder => {
  const folderPath = path.join(prismaDir, folder);

  if (fs.statSync(folderPath).isDirectory()) {
    const files = fs.readdirSync(folderPath);

    files.forEach(file => {
      if (file.endsWith(".prisma")) {
        const filePath = path.join(folderPath, file);
        const content = fs.readFileSync(filePath, "utf8");

        mergedSchema += "\n\n" + content;
      }
    });
  }
});

// Write generated schema
fs.writeFileSync(outputFile, mergedSchema);

console.log("✅ Prisma schema merged successfully");