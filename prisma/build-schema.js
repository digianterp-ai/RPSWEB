const fs = require("fs")
const path = require("path")

const prismaDir = path.join(__dirname)

const folders = [
  "enums",
  "system",
  "core",
  "academic",
  "students",
  "admissions",
  "attendance",
  "exams",
  "homework",
  "finance",
  "transport",
  "library",
  "inventory",
  "events"
]

let schema = fs.readFileSync(
  path.join(prismaDir, "schema.prisma"),
  "utf8"
)

folders.forEach(folder => {

  const folderPath = path.join(prismaDir, folder)

  const files = fs.readdirSync(folderPath)

  files.forEach(file => {

    if(file.endsWith(".prisma")){

      const content = fs.readFileSync(
        path.join(folderPath, file),
        "utf8"
      )

      schema += "\n\n" + content
    }

  })

})

fs.writeFileSync(
  path.join(prismaDir, "schema.generated.prisma"),
  schema
)

console.log("✅ Prisma schema generated")